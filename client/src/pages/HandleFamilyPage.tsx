/*
Design reminder for this file: Neo-Atelier Italian Editorial.
This page extends the `/handles` section into dedicated family detail destinations.
Keep the visual language connected to the showcase route while making each family page more commercially useful.
*/
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Ruler } from "lucide-react";
import { useRoute } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SiteHeader from "@/components/site/SiteHeader";
import { cosmaFamilyProducts, type ImportedHandleProduct } from "@/lib/cosmaFamilyProducts";
import { handleFamilies } from "@/lib/handleFamilies";

function getProductImage(product: ImportedHandleProduct) {
  return product.primaryImage || product.detailImages[0] || product.listingImages[0] || "";
}

function getUniqueValues(product: ImportedHandleProduct, key: string) {
  return Array.from(
    new Set(product.technicalRows.map((row) => row[key]).filter((value): value is string => Boolean(value)))
  );
}

function getFinishOptions(product: ImportedHandleProduct) {
  const finishes = [
    ...getUniqueValues(product, "Finish"),
    ...getUniqueValues(product, "Finishes"),
    ...getUniqueValues(product, "Colour"),
    ...getUniqueValues(product, "Color"),
  ];

  return Array.from(new Set(finishes));
}

function formatMeasurementList(values: string[], unit = "mm") {
  if (values.length === 0) {
    return "Available on request";
  }

  return `${values.join(", ")} ${unit}`;
}

function getProductSummary(product: ImportedHandleProduct) {
  const widths = getUniqueValues(product, "Width mm");
  const holeDistances = getUniqueValues(product, "Holes distance mm");
  const sections = getUniqueValues(product, "Section mm");

  const parts = [];

  if (widths.length > 0) {
    parts.push(`Widths ${widths.join(", ")} mm`);
  }

  if (holeDistances.length > 0) {
    parts.push(`Centres ${holeDistances.join(", ")} mm`);
  }

  if (sections.length > 0) {
    parts.push(`Section ${sections.join(", ")} mm`);
  }

  if (parts.length === 0) {
    return "Technical sizing can be supplied on request.";
  }

  return parts.join(" · ");
}

function getEnquiryHref(familyTitle: string, code: string) {
  return `mailto:hello@edphandles.com?subject=${encodeURIComponent(`${familyTitle} enquiry — ${code}`)}`;
}

function getFamilyListingIntro(slug: string) {
  switch (slug) {
    case "bridge":
      return "This page now moves straight from editorial family framing into a real imported Bridge catalogue view. The products below are grouped from the public Cosma Bridge and Modular Bridge source structure, then presented inside the EDP design language.";
    case "integrated":
      return "This page now opens directly into a real imported Integrated listing, combining Closed Grip, Modular Closed Grip, Integrated, and Integrated Modular products within the EDP structure while preserving those source categories for future family separation.";
    case "vertical":
      return "This page now opens directly into a real imported Vertical listing, combining Vertical and Vertical Integrated products into a cleaner EDP-led specification route for tall cabinetry and alignment-led projects.";
    case "appliance":
      return "This page now opens directly into a real imported Appliance listing, bringing the technical appliance-handle range into the EDP journey without sending the user away from the site.";
    case "knobs":
      return "This page now opens directly into a real imported Knobs listing, giving smaller-format hardware an immediate image-led view while staying within the premium editorial EDP language.";
    case "special-designs":
      return "This page now opens directly into a real imported Special listing, allowing more distinctive forms to be reviewed visually and technically without breaking the curated EDP experience.";
    default:
      return "This family page now moves straight from editorial framing into a real imported product listing presented inside the EDP design language.";
  }
}

function getFamilyImmediateViewText(familySlug: string, importedCount: number) {
  if (importedCount === 0) {
    return "This family page is ready for deeper listing integration in the next pass.";
  }

  if (familySlug === "integrated") {
    return `${importedCount} imported product listings are now visible directly on this page, with Closed Grip families still grouped here for now but ready to split later.`;
  }

  return `${importedCount} imported product listings are now visible directly on this page.`;
}

export default function HandleFamilyPage() {
  const [, params] = useRoute("/handles/:slug");
  const family = handleFamilies.find((item) => item.slug === params?.slug);
  const [selectedProduct, setSelectedProduct] = useState<ImportedHandleProduct | null>(null);

  if (!family) {
    window.location.href = "/404";
    return null;
  }

  const relatedFamilies = handleFamilies.filter((item) => item.slug !== family.slug);
  const importedProducts = cosmaFamilyProducts[family.slug] || [];
  const groupedCounts = importedProducts.reduce<Record<string, number>>((acc, product) => {
    acc[product.sourceCategory] = (acc[product.sourceCategory] || 0) + 1;
    return acc;
  }, {});

  const selectedProductMeasurements = useMemo(() => {
    if (!selectedProduct) {
      return null;
    }

    return {
      widths: getUniqueValues(selectedProduct, "Width mm"),
      centres: getUniqueValues(selectedProduct, "Holes distance mm"),
      heights: getUniqueValues(selectedProduct, "Height mm"),
      sections: getUniqueValues(selectedProduct, "Section mm"),
      codes: getUniqueValues(selectedProduct, "Code"),
      finishes: getFinishOptions(selectedProduct),
    };
  }, [selectedProduct]);

  return (
    <>
      <main className="relative overflow-hidden bg-[#0a0908] text-stone-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,166,108,0.12),transparent_26%)]" />

        <SiteHeader />

        <section className="relative isolate px-0 pb-12 pt-6 md:pb-18 md:pt-8">
          <div className="container">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(10, 10, 10, 0.94) 0%, rgba(10, 10, 10, 0.78) 42%, rgba(10, 10, 10, 0.24) 76%), url('${family.image}')`,
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%,rgba(0,0,0,0.28))]" />

              <div className="relative z-10 flex min-h-[520px] max-w-4xl flex-col justify-between px-8 py-10 sm:px-12 md:px-16 md:py-14">
                <div className="max-w-3xl space-y-8 pt-6 md:pt-8">
                  <a
                    href="/handles"
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-stone-300 transition hover:text-stone-50"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Handles Overview
                  </a>
                  <div className="space-y-5">
                    <p className="label-kicker">
                      Family {family.number} — {family.source}
                    </p>
                    <h1 className="font-display text-balance text-5xl font-semibold leading-[0.92] text-stone-50 sm:text-6xl md:text-7xl">
                      {family.title}
                    </h1>
                    <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">{family.summary}</p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a
                      href="/handles/catalogue#trade-support"
                      className="inline-flex items-center justify-center rounded-full bg-[rgba(201,166,108,0.92)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950 transition duration-300 hover:bg-[rgba(220,187,129,0.98)]"
                    >
                      Discuss This Family
                    </a>
                    <a
                      href="/handles/catalogue"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.42)] hover:bg-white/10"
                    >
                      Open Catalogue View
                    </a>
                  </div>
                </div>

                <div className="grid gap-5 border-t border-white/10 pt-8 text-sm text-stone-300 md:grid-cols-3">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.28em] text-stone-500">Source Taxonomy</p>
                    <p>{family.source}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.28em] text-stone-500">EDP Positioning</p>
                    <p>Curated into a UK-facing premium collection journey rather than a raw catalogue dump.</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.28em] text-stone-500">Immediate View</p>
                    <p>{getFamilyImmediateViewText(family.slug, importedProducts.length)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {importedProducts.length > 0 && (
          <section className="relative pb-12 pt-2 md:pb-16 md:pt-4">
            <div className="container space-y-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div className="space-y-4">
                  <p className="label-kicker">Live Family Listing</p>
                  <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
                    View the full {family.title.replace("Handles", "").replace("& Small Hardware", "collection").trim()} listing immediately.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-stone-400">{getFamilyListingIntro(family.slug)}</p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {Object.entries(groupedCounts).map(([label, count]) => (
                    <span
                      key={label}
                      className="rounded-full border border-[rgba(214,192,154,0.22)] bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.22em] text-stone-300"
                    >
                      {label} · {count}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {importedProducts.map((product) => {
                  const image = getProductImage(product);
                  return (
                    <article
                      key={`${family.slug}-${product.productId || product.code}`}
                      className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-1 hover:border-[rgba(214,192,154,0.32)]"
                    >
                      <div className="relative aspect-[1.12] overflow-hidden border-b border-white/10 bg-[#151311]">
                        {image ? (
                          <img
                            src={image}
                            alt={`${family.title} ${product.code}`}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.22em] text-stone-500">
                            Image pending
                          </div>
                        )}
                      </div>

                      <div className="space-y-5 p-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full border border-[rgba(214,192,154,0.18)] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-stone-300">
                            {product.sourceCategory}
                          </span>
                          {product.express && (
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-stone-400">
                              Express collection
                            </span>
                          )}
                        </div>

                        <div className="space-y-3">
                          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Product code</p>
                          <h3 className="font-display text-3xl leading-none text-stone-50">{product.code}</h3>
                          <p className="leading-7 text-stone-400">{getProductSummary(product)}</p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="rounded-[1.15rem] border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">Material</p>
                            <p className="text-sm leading-6 text-stone-300">{product.material || "Available on request"}</p>
                          </div>
                          <div className="rounded-[1.15rem] border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">Formats shown</p>
                            <p className="text-sm leading-6 text-stone-300">
                              {product.technicalRows.length || product.detailImages.length} variants/images available
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                          <a
                            href={getEnquiryHref(family.title, product.code)}
                            className="inline-flex flex-1 items-center justify-center rounded-full bg-[rgba(201,166,108,0.92)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-950 transition duration-300 hover:bg-[rgba(220,187,129,0.98)]"
                          >
                            Request This Product
                          </a>
                          <button
                            type="button"
                            onClick={() => setSelectedProduct(product)}
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.42)] hover:bg-white/10"
                          >
                            Technical Sheet
                            <Ruler className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="relative py-16 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6 lg:sticky lg:top-28">
              <p className="label-kicker">Family Overview</p>
              <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
                A more considered route into {family.title.toLowerCase()}.
              </h2>
              <p className="max-w-xl text-base leading-8 text-stone-400">{family.overview}</p>
            </div>

            <div className="grid gap-5">
              <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-7">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">Ideal Applications</p>
                <div className="flex flex-wrap gap-3">
                  {family.applications.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(214,192,154,0.18)] bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.22em] text-stone-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-7">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">Finish Pairing</p>
                <p className="leading-7 text-stone-300">{family.finishPairing}</p>
              </article>

              <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-7">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">Signature Forms</p>
                <p className="leading-7 text-stone-300">{family.signatureForms}</p>
              </article>

              <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-7">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">Specification Notes</p>
                <p className="leading-7 text-stone-300">{family.specificationNotes}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="relative py-10 md:py-20">
          <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="editorial-panel brass-line rounded-[2rem] p-5 md:p-7">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={family.image}
                  alt={family.title}
                  className="h-[420px] w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8 px-1 lg:px-8">
              <div className="space-y-5">
                <p className="label-kicker">Commercial Guidance</p>
                <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
                  {family.consultationTitle}
                </h2>
                <p className="text-base leading-8 text-stone-400">{family.consultationText}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-stone-500">Collection Logic</p>
                  <p className="leading-7 text-stone-300">
                    This page adapts the upstream Cosma family structure into a more deliberate UK-facing specification journey.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-stone-500">Next Layer</p>
                  <p className="leading-7 text-stone-300">
                    The family page can now connect naturally onward into finishes, catalogue review, and direct project consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24">
          <div className="container space-y-8">
            <div className="space-y-4">
              <p className="label-kicker">Related Families</p>
              <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
                Continue through the wider handle structure.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedFamilies.map((item) => (
                <a
                  key={item.slug}
                  href={`/handles/${item.slug}`}
                  className="group rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-[rgba(214,192,154,0.32)]"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{item.source}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-stone-50">{item.title}</h3>
                  <p className="mt-4 leading-7 text-stone-400">{item.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[rgba(201,166,108,0.88)] transition duration-300 group-hover:text-stone-50">
                    View Family
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative pb-20 pt-8 md:pb-28">
          <div className="container">
            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(214,192,154,0.18)] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-8 py-10 md:px-12 md:py-14">
              <div className="relative z-10 max-w-2xl space-y-6">
                <p className="label-kicker">Enquiry Path</p>
                <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
                  Move from family interest into a real project conversation.
                </h2>
                <p className="text-base leading-8 text-stone-300">
                  The family pages are intended to make the `/handles` section more useful without disturbing the rest of the site. From here, the next step is a curated catalogue review or a direct consultation about finish, application, and project type.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:hello@edphandles.com"
                    className="inline-flex items-center justify-center rounded-full bg-[rgba(201,166,108,0.92)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950 transition duration-300 hover:bg-[rgba(220,187,129,0.98)]"
                  >
                    Email EDP Handles
                  </a>
                  <a
                    href="/handles/catalogue#trade-support"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.42)] hover:bg-white/10"
                  >
                    Review Trade Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={Boolean(selectedProduct)} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 bg-[#11100f] text-stone-100 sm:max-w-3xl">
          {selectedProduct && selectedProductMeasurements && (
            <div className="space-y-8">
              <DialogHeader className="space-y-3 text-left">
                <p className="text-xs uppercase tracking-[0.26em] text-stone-500">Technical Sheet</p>
                <DialogTitle className="font-display text-4xl text-stone-50">
                  {family.title} — {selectedProduct.code}
                </DialogTitle>
                <DialogDescription className="text-base leading-7 text-stone-400">
                  Internal EDP technical view for {selectedProduct.sourceCategory.toLowerCase()} with the current imported sizing and specification information presented inside the site.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">Source Group</p>
                  <p className="text-sm leading-6 text-stone-300">{selectedProduct.sourceCategory}</p>
                </div>
                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">Material</p>
                  <p className="text-sm leading-6 text-stone-300">{selectedProduct.material || "Available on request"}</p>
                </div>
                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">Finish Options</p>
                  <p className="text-sm leading-6 text-stone-300">
                    {selectedProductMeasurements.finishes.length > 0
                      ? selectedProductMeasurements.finishes.join(", ")
                      : "Available on request"}
                  </p>
                </div>
                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">Technical Variants</p>
                  <p className="text-sm leading-6 text-stone-300">{selectedProduct.technicalRows.length || 1} rows imported</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="mb-4 text-xs uppercase tracking-[0.24em] text-stone-500">Measurements</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">Widths</p>
                      <p className="text-sm leading-6 text-stone-300">{formatMeasurementList(selectedProductMeasurements.widths)}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">Centres</p>
                      <p className="text-sm leading-6 text-stone-300">{formatMeasurementList(selectedProductMeasurements.centres)}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">Heights</p>
                      <p className="text-sm leading-6 text-stone-300">{formatMeasurementList(selectedProductMeasurements.heights)}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">Sections</p>
                      <p className="text-sm leading-6 text-stone-300">{formatMeasurementList(selectedProductMeasurements.sections)}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="mb-4 text-xs uppercase tracking-[0.24em] text-stone-500">Specification Notes</p>
                  <div className="space-y-3 text-sm leading-6 text-stone-300">
                    <p>Product code: {selectedProduct.code}</p>
                    <p>
                      Source codes: {selectedProductMeasurements.codes.length > 0 ? selectedProductMeasurements.codes.join(", ") : selectedProduct.code}
                    </p>
                    <p>
                      Image references available: {selectedProduct.detailImages.length || selectedProduct.listingImages.length}
                    </p>
                    <p>For project-specific fixing, finish, and availability guidance, use the enquiry route below.</p>
                  </div>
                </div>
              </div>

              {selectedProduct.technicalRows.length > 0 && (
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="mb-4 text-xs uppercase tracking-[0.24em] text-stone-500">Imported Technical Rows</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-separate border-spacing-y-2 text-left text-sm text-stone-300">
                      <thead>
                        <tr>
                          {Object.keys(selectedProduct.technicalRows[0]).map((header) => (
                            <th key={header} className="px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProduct.technicalRows.map((row, index) => (
                          <tr key={`${selectedProduct.code}-${index}`} className="bg-white/[0.03] even:bg-white/[0.06]">
                            {Object.keys(selectedProduct.technicalRows[0]).map((header) => (
                              <td key={header} className="px-4 py-3 align-top leading-6 text-stone-300">
                                {row[header] || "—"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 border-t border-white/10 pt-2 sm:flex-row">
                <a
                  href={getEnquiryHref(family.title, selectedProduct.code)}
                  className="inline-flex items-center justify-center rounded-full bg-[rgba(201,166,108,0.92)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950 transition duration-300 hover:bg-[rgba(220,187,129,0.98)]"
                >
                  Enquire About {selectedProduct.code}
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.42)] hover:bg-white/10"
                >
                  Close Technical Sheet
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
