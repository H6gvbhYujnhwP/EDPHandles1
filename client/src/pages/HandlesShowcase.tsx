/* Design Philosophy — Neo-Atelier Italian Editorial
   This page should feel like a private showroom catalogue: asymmetrical,
   tactile, calm, and product-led. Use dark architectural surfaces, ivory
   typography, brass accents, and controlled motion to communicate luxury
   craftsmanship rather than generic commerce. */

const showcase = [
  {
    number: "01",
    title: "Architectural Pulls",
    text: "Long-form silhouettes with disciplined lines for entrances, wardrobes, and statement joinery.",
  },
  {
    number: "02",
    title: "Cabinet Collections",
    text: "Balanced proportions and tactile finishes designed to complement contemporary millwork.",
  },
  {
    number: "03",
    title: "Signature Finishes",
    text: "Brushed brass, smoked steel, satin metal, and matte black presented with showroom precision.",
  },
];

const finishes = [
  {
    name: "Brushed Brass",
    note: "Warm, softened highlights for interiors that favour depth and quiet contrast.",
  },
  {
    name: "Smoked Steel",
    note: "A refined graphite-metal tone suited to restrained, contemporary schemes.",
  },
  {
    name: "Matte Black",
    note: "A sharp architectural finish for cabinetry, internal doors, and minimal detailing.",
  },
  {
    name: "Satin Nickel",
    note: "Subtle reflectivity with a clean technical edge for versatile specification work.",
  },
];

const applications = [
  "Private residences",
  "Bespoke kitchens",
  "Architectural joinery",
  "Interior refurbishment",
];

function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,166,108,0.14),transparent_24%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(12,11,10,0.72)] backdrop-blur-2xl">
        <div className="container flex items-center justify-between py-5">
          <a href="#top" className="flex items-center gap-3 text-sm tracking-[0.32em] text-stone-100">
            <span className="inline-block h-2 w-2 rounded-full bg-[rgba(201,166,108,0.95)] shadow-[0_0_18px_rgba(201,166,108,0.8)]" />
            EDP HANDLES
          </a>

          <nav className="hidden items-center gap-8 text-sm text-stone-300 lg:flex">
            <a href="#collections" className="hover:text-stone-50">
              Collections
            </a>
            <a href="#story" className="hover:text-stone-50">
              Story
            </a>
            <a href="#finishes" className="hover:text-stone-50">
              Finishes
            </a>
            <a href="#contact" className="hover:text-stone-50">
              Enquiry
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[rgba(214,192,154,0.28)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.55)] hover:bg-white/5"
          >
            Request a Consultation
          </a>
        </div>
      </header>

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
                    Hardware presented with the restraint of a private showroom.
                  </h1>
                  <p className="max-w-lg text-base leading-8 text-stone-300 sm:text-lg">
                    EDP Handles frames architectural pulls, cabinet hardware, and finish-led detail within a calm editorial experience that prioritises touch, proportion, and material confidence.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#collections"
                    className="inline-flex items-center justify-center rounded-full bg-[rgba(201,166,108,0.92)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950 transition duration-300 hover:bg-[rgba(220,187,129,0.98)]"
                  >
                    Explore Collections
                  </a>
                  <a
                    href="#story"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.42)] hover:bg-white/10"
                  >
                    View Editorial Story
                  </a>
                </div>
              </div>

              <div className="grid gap-5 border-t border-white/10 pt-8 text-sm text-stone-300 md:grid-cols-3">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-stone-500">Material Focus</p>
                  <p>Brushed brass, satin metal, smoked finishes, and matte architectural blacks.</p>
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

      <section id="collections" className="relative py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-6">
            <p className="label-kicker">Curated Categories</p>
            <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
              Presented less like stock, and more like collected objects of use.
            </h2>
            <p className="max-w-xl text-base leading-8 text-stone-400">
              The collections are framed through proportion, finish, and architectural setting rather than visual clutter. Each range is introduced with a sense of weight, detail, and interior relevance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {showcase.map((item) => (
              <article key={item.number} className="editorial-panel rounded-[1.6rem] p-6 transition duration-500 hover:-translate-y-1 hover:border-[rgba(214,192,154,0.32)]">
                <p className="mb-8 font-display text-3xl text-[rgba(201,166,108,0.9)]">{item.number}</p>
                <h3 className="mb-3 text-xl font-semibold text-stone-100">{item.title}</h3>
                <p className="leading-7 text-stone-400">{item.text}</p>
              </article>
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
                A composition of touch, finish, and engineered calm.
              </h2>
              <p className="text-base leading-8 text-stone-400">
                This direction treats the handle not as an afterthought, but as the final tactile note in a room. Edges are softened, lines remain disciplined, and finishes are allowed to catch light in ways that feel considered rather than decorative.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-stone-500">Editorial Framing</p>
                <p className="leading-7 text-stone-300">
                  Oversized serif headings and narrow explanatory notes create the pacing of a printed catalogue.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-stone-500">Surface Discipline</p>
                <p className="leading-7 text-stone-300">
                  Dark mineral tones, softened reflections, and brass accents hold the visual identity together.
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
            {finishes.map((finish, index) => (
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
                              ? "linear-gradient(90deg, #080808, #232323, #454545)"
                              : "linear-gradient(90deg, #7f7e7b, #bebcb8, #ece7e0)",
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
        <div className="container grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 hero-shadow">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-architectural-interior-6igcymZMf8AGvuTBU4fSfi.webp"
              alt="Architectural interior with bespoke joinery and premium handles"
              className="h-full min-h-[520px] w-full object-cover"
            />
          </div>

          <div className="space-y-8 lg:px-8">
            <div className="space-y-5">
              <p className="label-kicker">Interior Application</p>
              <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
                Chosen to complete joinery, not compete with it.
              </h2>
              <p className="text-base leading-8 text-stone-400">
                In the right setting, hardware becomes part of the room’s discipline. The handle should anchor the hand, register in the light, and sit in conversation with timber, stone, lacquer, and shadow.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {applications.map((item) => (
                <div key={item} className="rounded-full border border-white/12 bg-white/[0.03] px-5 py-4 text-sm uppercase tracking-[0.22em] text-stone-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative pb-20 pt-10 md:pb-28 md:pt-16">
        <div className="container">
          <div
            className="grain-overlay hero-shadow relative overflow-hidden rounded-[2.2rem] border border-[rgba(214,192,154,0.18)] px-8 py-10 md:px-14 md:py-14"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(8,8,8,0.9), rgba(18,18,18,0.78)), url('https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-dark-metal-texture-WAHzJonXXrFGTJ6mjhwtmr.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl space-y-5">
                <p className="label-kicker">Consultation</p>
                <h2 className="font-display text-4xl font-medium leading-tight text-stone-100 md:text-5xl">
                  If Option A feels right, the next step is a sharper product and content pass.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-stone-300">
                  This first direction establishes the visual language. Once approved, the same framework can be expanded into a fuller collection structure, deeper product presentation, and then a second exploration through Option B.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="mailto:hello@edphandles.com"
                  className="inline-flex items-center justify-center rounded-full bg-[rgba(201,166,108,0.92)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-950 transition duration-300 hover:bg-[rgba(220,187,129,1)]"
                >
                  hello@edphandles.com
                </a>
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-stone-100 transition duration-300 hover:border-[rgba(214,192,154,0.42)] hover:bg-white/5"
                >
                  Back to Top
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 py-8">
        <div className="container flex flex-col gap-4 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>EDP Handles — editorial presentation for premium architectural hardware.</p>
          <p>Option A implemented first, with Option B ready for a second design pass after review.</p>
        </div>
      </footer>
    </main>
  );
}

export default Home;
