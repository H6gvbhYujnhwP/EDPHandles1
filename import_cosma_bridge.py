from __future__ import annotations

import json
import re
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://cosma.design"
PRODUCTS_URL = f"{BASE_URL}/en/products"
TARGET_CATEGORY_IDS = {
    "20": "Bridge",
    "21": "Modular Bridge",
}
ROOT = Path("/home/ubuntu/edp_handles_repo")
OUTPUT_JSON_PATH = ROOT / "client" / "src" / "data" / "cosmaBridgeProducts.json"
OUTPUT_TS_PATH = ROOT / "client" / "src" / "lib" / "cosmaBridgeProducts.ts"
TIMEOUT = 30


def absolute_url(url: str | None) -> str | None:
    if not url:
        return None
    return urljoin(BASE_URL, url)


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def parse_listing_cards(html: str) -> list[dict]:
    soup = BeautifulSoup(html, "html.parser")
    cards: list[dict] = []

    for link in soup.select("a.product"):
        category_id = link.get("data-cat-id", "")
        if category_id not in TARGET_CATEGORY_IDS:
            continue

        href = link.get("href", "")
        product_code = clean_text(link.get_text(" ", strip=True))
        images = []
        for img in link.find_all("img"):
            src = img.get("data-src") or img.get("src")
            src = absolute_url(src)
            if src and src not in images:
                images.append(src)

        cards.append(
            {
                "categoryId": category_id,
                "sourceCategory": TARGET_CATEGORY_IDS[category_id],
                "productId": link.get("data-id", ""),
                "code": product_code,
                "productUrl": absolute_url(href),
                "listingImages": images,
                "express": link.get("data-express-id") == "1",
            }
        )

    return cards


def parse_detail_page(html: str) -> dict:
    soup = BeautifulSoup(html, "html.parser")

    detail_images = []
    for img in soup.find_all("img"):
        src = img.get("src") or img.get("data-src")
        src = absolute_url(src)
        if src and "/images/products/" in src and src not in detail_images:
            detail_images.append(src)

    material = None
    page_text = soup.get_text("\n", strip=True)
    material_match = re.search(r"Material\s+([A-Z][A-Z0-9\s\-/]+)", page_text)
    if material_match:
        material = clean_text(material_match.group(1))

    technical_rows = []
    table = soup.find("table")
    if table:
        rows = []
        for tr in table.find_all("tr"):
            cells = [clean_text(td.get_text(" ", strip=True)) for td in tr.find_all(["th", "td"])]
            if cells:
                rows.append(cells)

        if rows:
            headers = rows[0]
            for row in rows[1:]:
                if len(row) == len(headers):
                    technical_rows.append(dict(zip(headers, row)))
                else:
                    technical_rows.append({"values": row})

    return {
        "detailImages": detail_images,
        "material": material,
        "technicalRows": technical_rows,
    }


def main() -> None:
    session = requests.Session()
    session.headers.update(
        {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
        }
    )

    listing_response = session.get(PRODUCTS_URL, timeout=TIMEOUT)
    listing_response.raise_for_status()
    cards = parse_listing_cards(listing_response.text)

    enriched_cards = []
    for card in cards:
        detail = {"detailImages": [], "material": None, "technicalRows": []}
        if card["productUrl"]:
            response = session.get(card["productUrl"], timeout=TIMEOUT)
            response.raise_for_status()
            detail = parse_detail_page(response.text)

        enriched_cards.append(
            {
                **card,
                "primaryImage": (detail["detailImages"] or card["listingImages"] or [None])[0],
                "detailImages": detail["detailImages"],
                "material": detail["material"],
                "technicalRows": detail["technicalRows"],
            }
        )

    OUTPUT_JSON_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON_PATH.write_text(json.dumps(enriched_cards, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    ts_output = (
        "export type ImportedHandleProduct = {\n"
        "  categoryId: string;\n"
        "  sourceCategory: string;\n"
        "  productId: string;\n"
        "  code: string;\n"
        "  productUrl: string | null;\n"
        "  listingImages: string[];\n"
        "  express: boolean;\n"
        "  primaryImage: string | null;\n"
        "  detailImages: string[];\n"
        "  material: string | null;\n"
        "  technicalRows: Record<string, string>[];\n"
        "};\n\n"
        f"export const cosmaBridgeProducts: ImportedHandleProduct[] = {json.dumps(enriched_cards, indent=2, ensure_ascii=False)};\n"
    )
    OUTPUT_TS_PATH.write_text(ts_output, encoding="utf-8")
    print(f"Wrote {len(enriched_cards)} bridge products to {OUTPUT_JSON_PATH} and {OUTPUT_TS_PATH}")


if __name__ == "__main__":
    main()
