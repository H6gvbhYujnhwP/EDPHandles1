from __future__ import annotations

import json
import re
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://cosma.design"
PRODUCTS_URL = f"{BASE_URL}/en/products"
ROOT = Path("/home/ubuntu/edp_handles_repo")
OUTPUT_JSON_PATH = ROOT / "client" / "src" / "data" / "cosmaFamilyProducts.json"
OUTPUT_TS_PATH = ROOT / "client" / "src" / "lib" / "cosmaFamilyProducts.ts"
TIMEOUT = 30

FAMILY_CATEGORY_MAP = {
    "bridge": {
        "20": "Bridge",
        "21": "Modular Bridge",
    },
    "integrated": {
        "27": "Closed Grip",
        "28": "Modular Closed Grip",
        "24": "Integrated",
        "31": "Integrated Modular",
    },
    "vertical": {
        "29": "Vertical",
        "30": "Vertical Integrated",
    },
    "appliance": {
        "32": "Domestic Appliances",
    },
    "knobs": {
        "25": "Knobs",
    },
    "special-designs": {
        "26": "Special",
    },
}

CATEGORY_TO_FAMILY = {
    category_id: family_slug
    for family_slug, category_map in FAMILY_CATEGORY_MAP.items()
    for category_id in category_map
}
CATEGORY_TO_SOURCE = {
    category_id: source_label
    for category_map in FAMILY_CATEGORY_MAP.values()
    for category_id, source_label in category_map.items()
}


def absolute_url(url: str | None) -> str | None:
    if not url:
        return None
    return urljoin(BASE_URL, url)


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def parse_listing_cards(html: str) -> dict[str, list[dict]]:
    soup = BeautifulSoup(html, "html.parser")
    grouped_cards: dict[str, list[dict]] = {slug: [] for slug in FAMILY_CATEGORY_MAP}

    for link in soup.select("a.product"):
        category_id = link.get("data-cat-id", "")
        family_slug = CATEGORY_TO_FAMILY.get(category_id)
        if not family_slug:
            continue

        href = link.get("href", "")
        product_code = clean_text(link.get_text(" ", strip=True))
        images: list[str] = []
        for img in link.find_all("img"):
            src = img.get("data-src") or img.get("src")
            src = absolute_url(src)
            if src and src not in images:
                images.append(src)

        grouped_cards[family_slug].append(
            {
                "familySlug": family_slug,
                "categoryId": category_id,
                "sourceCategory": CATEGORY_TO_SOURCE[category_id],
                "productId": link.get("data-id", ""),
                "code": product_code,
                "productUrl": absolute_url(href),
                "listingImages": images,
                "express": link.get("data-express-id") == "1",
            }
        )

    return grouped_cards


def parse_detail_page(html: str) -> dict:
    soup = BeautifulSoup(html, "html.parser")

    detail_images: list[str] = []
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

    technical_rows: list[dict[str, str]] = []
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
                    technical_rows.append({"values": " | ".join(row)})

    return {
        "detailImages": detail_images,
        "material": material,
        "technicalRows": technical_rows,
    }


def enrich_cards(session: requests.Session, grouped_cards: dict[str, list[dict]]) -> dict[str, list[dict]]:
    enriched: dict[str, list[dict]] = {slug: [] for slug in FAMILY_CATEGORY_MAP}

    for family_slug, cards in grouped_cards.items():
        for card in cards:
            detail = {"detailImages": [], "material": None, "technicalRows": []}
            if card["productUrl"]:
                response = session.get(card["productUrl"], timeout=TIMEOUT)
                response.raise_for_status()
                detail = parse_detail_page(response.text)

            enriched[family_slug].append(
                {
                    **card,
                    "primaryImage": (detail["detailImages"] or card["listingImages"] or [None])[0],
                    "detailImages": detail["detailImages"],
                    "material": detail["material"],
                    "technicalRows": detail["technicalRows"],
                }
            )

    return enriched


def write_outputs(grouped_products: dict[str, list[dict]]) -> None:
    OUTPUT_JSON_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON_PATH.write_text(json.dumps(grouped_products, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    ts_output = (
        "export type ImportedHandleProduct = {\n"
        "  familySlug: string;\n"
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
        "export type ImportedFamilyProducts = Record<string, ImportedHandleProduct[]>;\n\n"
        f"export const cosmaFamilyProducts: ImportedFamilyProducts = {json.dumps(grouped_products, indent=2, ensure_ascii=False)};\n"
    )
    OUTPUT_TS_PATH.write_text(ts_output, encoding="utf-8")


def main() -> None:
    session = requests.Session()
    session.headers.update(
        {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
        }
    )

    listing_response = session.get(PRODUCTS_URL, timeout=TIMEOUT)
    listing_response.raise_for_status()
    grouped_cards = parse_listing_cards(listing_response.text)
    grouped_products = enrich_cards(session, grouped_cards)
    write_outputs(grouped_products)

    summary = {slug: len(items) for slug, items in grouped_products.items()}
    print(json.dumps(summary, indent=2))
    print(f"Wrote family datasets to {OUTPUT_JSON_PATH} and {OUTPUT_TS_PATH}")


if __name__ == "__main__":
    main()
