/*
Design reminder for this file: Neo-Atelier Italian Editorial.
This page must remain a refined `/handles` destination within the wider site.
Preserve the dark showroom atmosphere, ivory serif hierarchy, brass accents, and asymmetrical pacing.
Integrate the six agreed handle families into the editorial structure without disturbing the homepage or other routes.
*/
import { ArrowRight } from "lucide-react";
import EnquiryFormSection from "@/components/site/EnquiryFormSection";
import SiteHeader from "@/components/site/SiteHeader";
import { handleApplications, handleFamilies, handleFinishes } from "@/lib/handleFamilies";

export default function HandlesShowcase() {
  return (
    <main className="relative overflow-hidden bg-[#0a0908] text-stone-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,166,108,0.14),transparent_24%)]" />

      <SiteHeader />

      <section id="top" className="relative isolate px-0 pb-14 pt-6 md:pb-24 md:pt-8">
        <div className="container">
          <div className="hero-shadow grain-overlay relative overflow-hidden rounded-[2rem] border border-white/10 min-h-[720px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.66) 36%, rgba(10, 10, 10, 0.12) 72%), url('https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-hero-atelier-HSEDDXggEHG8cE3MBKSTYt.webp')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%,rgba(0,0,0,0.2))]" />

            <div className="relative z-10 flex min-h-[720px] max-w-3xl flex-col justify-between px-8 py-10 sm:px-12 md:px-16 md:py-14">
              <div className="max-w-xl space-y-8 pt-8 md:pt-12">
                <p className="label-kicker">Option A — Neo-Atelier Italian Editorial</p>
                <div className="space-y-5">
                  <h1 className="font-display text-balance text-5xl font-semibold leading-[0.92] text-stone-50 sm:text-6xl md:text-7xl">
                    Six families, presented with the restraint of a private showroom.
                  </h1>
                  <p className="max-w-lg text-base leading-8 text-stone-300 sm:text-lg">
                    The `/handles` section now frames the agreed family structure through a calmer editorial lens so clients can understand the range without losing the material confidence of the brand.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#collections"
                    className="inline-flex items-center justify-center rounded-full bg-[rgba(201,166,108,0.92)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950 transition duration-300 hover:bg-[rgba(220,187,129,0.98)]"
                  >
                    Explore Families
                  </a>
                  <a
                    href="/handles/catalogue"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.42)] hover:bg-white/10"
                  >
                    View Catalogue Layout
                  </a>
                </div>
              </div>

              <div className="grid gap-5 border-t border-white/10 pt-8 text-sm text-stone-300 md:grid-cols-3">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-stone-500">Collection Focus</p>
                  <p>Bridge, integrated, vertical, appliance, knob, and special-design families arranged for easier navigation.</p>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-stone-500">Specification Mood</p>
                  <p>Designed for premium interiors that require tactile presence without visual noise.</p>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-stone-500">Visual Language</p>
                  <p>Dark panels, ivory type, brass keylines, and deliberate negative space throughout.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryFormSection
        pageName="Handles"
        eyebrow="Handles Enquiry"
        title="Discuss handle families, finishes, and project requirements."
        intro="Use the enquiry form to discuss handle collections, finish selection, stockholding, and specification support for furniture, kitchen, and interior projects."
      />

      <section id="collections" className="relative py-16 md:py-24">
        <div className="container space-y-12">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="space-y-6">
              <p className="label-kicker">The Six Families</p>
              <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
                A complete family structure, edited into a clearer collection view.
              </h2>
              <p className="max-w-xl text-base leading-8 text-stone-400">
                Instead of broad mood statements alone, the section now introduces the full six-family range. Each family is positioned as a practical collection type while still reading like part of the same showroom narrative.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-[rgba(201,166,108,0.18)] bg-[rgba(255,255,255,0.03)] p-6 md:p-7">
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-stone-500">Editorial Reading Order</p>
              <p className="leading-7 text-stone-300">
                The families move from core architectural pulls into integrated and vertical formats, then on to appliance solutions, smaller tactile pieces, and the more expressive special-design offer.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {handleFamilies.map((family, index) => (
              <a
                key={family.slug}
                href={`/handles/${family.slug}`}
                className="group editorial-panel block overflow-hidden rounded-[1.7rem] transition duration-500 hover:-translate-y-1 hover:border-[rgba(214,192,154,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,166,108,0.72)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0908]"
              >
                <div className="relative h-64 overflow-hidden border-b border-white/10">
                  <img
                    src={family.image}
                    alt={family.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.5))]" />
                  <div className="absolute left-5 top-5 flex items-center gap-3">
                    <span className="font-display text-3xl text-[rgba(201,166,108,0.9)]">{family.number}</span>
                    <span className="text-xs uppercase tracking-[0.24em] text-stone-300">{family.source}</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Family {index + 1}</p>
                    <h3 className="mt-2 font-display text-3xl leading-tight text-stone-50">{family.title}</h3>
                  </div>
                </div>
                <div className="space-y-5 p-6">
                  <p className="leading-7 text-stone-400">{family.summary}</p>
                  <div className="inline-flex items-center gap-3 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.24em] text-[rgba(201,166,108,0.88)] transition duration-300 group-hover:text-stone-50">
                    Collection Overview
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="relative py-10 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="editorial-panel brass-line rounded-[2rem] p-5 md:p-7">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-product-macro-metal-5UqnTJVgfH46fUbnATUB8Y.webp"
                alt="Close-up editorial view of premium handle finishes and detailing"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8 px-1 lg:px-8">
            <div className="space-y-5">
              <p className="label-kicker">Material Story</p>
              <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
                The family structure is now clearer, while the showroom tone remains intact.
              </h2>
              <p className="text-base leading-8 text-stone-400">
                This update keeps the editorial restraint of Option A but gives the page a more usable collection logic. Clients can scan the six families quickly, then move deeper into finish, application, and consultation conversations without losing the sense of brand refinement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-stone-500">Collection Clarity</p>
                <p className="leading-7 text-stone-300">
                  The six-family edit replaces the earlier abstract category trio with a complete, decision-friendly range view.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-stone-500">Surface Discipline</p>
                <p className="leading-7 text-stone-300">
                  Dark mineral tones, softened reflections, and brass accents continue to hold the visual identity together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="finishes" className="relative py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <p className="label-kicker">Finish Palette</p>
            <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
              Metallic warmth against shadow-led architecture.
            </h2>
            <p className="max-w-md text-base leading-8 text-stone-400">
              The palette stays restrained so the products read as part of a broader interior language. Warm brass, muted steel, and quiet black finishes create contrast without visual excess.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {handleFinishes.map((finish, index) => (
              <article key={finish.name} className="editorial-panel rounded-[1.6rem] p-6 md:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-3xl text-[rgba(201,166,108,0.84)]">0{index + 1}</span>
                  <span
                    className="h-3 w-24 rounded-full"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(90deg, #7b5b2d, #c7a260, #ead6aa)"
                          : index === 1
                            ? "linear-gradient(90deg, #3b3d42, #7a7d82, #adb0b5)"
                            : index === 2
                              ? "linear-gradient(90deg, #0f0f10, #26272a, #4a4a4c)"
                              : "linear-gradient(90deg, #5e6168, #a9b0bc, #d6dce5)",
                    }}
                  />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-stone-100">{finish.name}</h3>
                <p className="leading-7 text-stone-400">{finish.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="label-kicker">Interior Application</p>
            <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
              Chosen to complete joinery, not compete with it.
            </h2>
            <p className="max-w-xl text-base leading-8 text-stone-400">
              In the right setting, hardware becomes part of the room’s discipline. The handle should anchor the hand, register in the light, and sit in conversation with timber, stone, lacquer, and shadow.
            </p>
            <div className="flex flex-wrap gap-3">
              {handleApplications.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(214,192,154,0.18)] bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.22em] text-stone-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="editorial-panel overflow-hidden rounded-[2rem] p-4 md:p-5">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-architectural-interior-UeB5quf5SZTnWuY5qpLt8R.webp"
              alt="Architectural interior with refined metal hardware and dark joinery"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="relative pb-20 pt-8 md:pb-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(214,192,154,0.18)] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-8 py-10 md:px-12 md:py-14">
            <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[url('https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-dark-metal-texture-bhrrskYzJm7Gb44S4N6XQ4.webp')] bg-cover bg-center opacity-30 lg:block" />
            <div className="relative z-10 max-w-2xl space-y-6">
              <p className="label-kicker">Consultation</p>
              <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
                The six-family structure is in place. The next pass can sharpen product depth.
              </h2>
              <p className="text-base leading-8 text-stone-300">
                This update establishes the agreed families inside the `/handles` section while preserving the rest of the site. From here, the page can evolve into deeper family pages, richer product data, and real enquiry pathways.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@edphandles.com"
                  className="inline-flex items-center justify-center rounded-full bg-[rgba(201,166,108,0.92)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950 transition duration-300 hover:bg-[rgba(220,187,129,0.98)]"
                >
                  hello@edphandles.com
                </a>
                <a
                  href="/handles/catalogue"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.42)] hover:bg-white/10"
                >
                  Open Full Catalogue View
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
