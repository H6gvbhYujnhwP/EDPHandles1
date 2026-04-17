/*
Design reminder for this file: Neo-Atelier Italian Editorial.
This page extends the `/handles` section into dedicated family detail destinations.
Keep the visual language connected to the showcase route while making each family page more commercially useful.
*/
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRoute } from "wouter";
import { handleFamilies } from "@/lib/handleFamilies";

export default function HandleFamilyPage() {
  const [, params] = useRoute("/handles/:slug");
  const family = handleFamilies.find((item) => item.slug === params?.slug);

  if (!family) {
    window.location.href = "/404";
    return null;
  }

  const relatedFamilies = handleFamilies.filter((item) => item.slug !== family.slug);

  return (
    <main className="relative overflow-hidden bg-[#0a0908] text-stone-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,166,108,0.12),transparent_26%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(12,11,10,0.76)] backdrop-blur-2xl">
        <div className="container flex items-center justify-between py-5">
          <a href="/" className="flex items-center gap-3 text-sm tracking-[0.32em] text-stone-100">
            <span className="inline-block h-2 w-2 rounded-full bg-[rgba(201,166,108,0.95)] shadow-[0_0_18px_rgba(201,166,108,0.8)]" />
            EDP HANDLES
          </a>

          <nav className="hidden items-center gap-8 text-sm text-stone-300 lg:flex">
            <a href="/handles" className="hover:text-stone-50">
              Handles Overview
            </a>
            <a href="/handles/catalogue" className="hover:text-stone-50">
              Catalogue View
            </a>
            <a href="#contact" className="hover:text-stone-50">
              Enquiry
            </a>
          </nav>

          <a
            href="/handles/catalogue#trade-support"
            className="rounded-full border border-[rgba(214,192,154,0.28)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.55)] hover:bg-white/5"
          >
            Request a Consultation
          </a>
        </div>
      </header>

      <section className="relative isolate px-0 pb-14 pt-6 md:pb-24 md:pt-8">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(10, 10, 10, 0.92) 0%, rgba(10, 10, 10, 0.68) 42%, rgba(10, 10, 10, 0.18) 76%), url('${family.image}')`,
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%,rgba(0,0,0,0.28))]" />

            <div className="relative z-10 flex min-h-[680px] max-w-3xl flex-col justify-between px-8 py-10 sm:px-12 md:px-16 md:py-14">
              <div className="max-w-2xl space-y-8 pt-8 md:pt-12">
                <a
                  href="/handles"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-stone-300 transition hover:text-stone-50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Handles Overview
                </a>
                <div className="space-y-5">
                  <p className="label-kicker">Family {family.number} — {family.source}</p>
                  <h1 className="font-display text-balance text-5xl font-semibold leading-[0.92] text-stone-50 sm:text-6xl md:text-7xl">
                    {family.title}
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
                    {family.summary}
                  </p>
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
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-stone-500">Next Step</p>
                  <p>Use this family page as the bridge into finish direction and project consultation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  href="mailto:info@edphandles.co.uk"
                  className="inline-flex items-center justify-center rounded-full bg-[rgba(201,166,108,0.92)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950 transition duration-300 hover:bg-[rgba(220,187,129,0.98)]"
                >
                  Email EDP Handles
                </a>
                <a
                  href="/handles/catalogue#trade-support"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.42)] hover:bg-white/10"
                >
                  Open Trade Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
