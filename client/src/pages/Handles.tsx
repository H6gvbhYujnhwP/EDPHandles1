/*
Design reminder for this file: Neo-Atelier Italian Editorial.
Maintain the dark showroom atmosphere, brass-accent restraint, serif-led hierarchy, and asymmetrical editorial pacing.
Use real product imagery for the catalogue moments and keep the page feeling curated rather than overly technical.
*/
import { ArrowRight, Menu, MoveRight, PhoneCall, Ruler, ShieldCheck, SwatchBook, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const handleCategories = [
  {
    title: "Bridge Handles",
    source: "Ponte · Ponte Modulari",
    description:
      "Architectural pull handles with composed proportions, generous grip comfort, and a timeless profile suited to refined kitchen and wardrobe schemes.",
    image: "https://cosma.design/images/products/1731921599203_cosma-handle-13063_C.jpg",
  },
  {
    title: "Integrated Handles",
    source: "Presa Chiusa · Integrate",
    description:
      "Concealed and integrated solutions designed for cleaner elevations, contemporary joinery, and exacting minimal compositions.",
    image: "https://cosma.design/images/products/1731921599203_cosma-handle-13063_D.jpg",
  },
  {
    title: "Vertical Handles",
    source: "Verticali · Verticali Integrate",
    description:
      "Elegant upright formats for tall cabinetry, statement pantry runs, and interiors where rhythm and alignment matter as much as touch.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Appliance Handles",
    source: "Elettrodomestici",
    description:
      "Purpose-led hardware created for integrated appliances and larger frontages where strength, balance, and finish integrity are essential.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Knobs & Small Hardware",
    source: "Pomoli",
    description:
      "Compact tactile pieces that add a jewellery-like finish to bespoke furniture, dressers, and secondary cabinetry details.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Special Designs",
    source: "Speciali",
    description:
      "Distinctive forms selected for studios and designers seeking a more sculptural, individual hardware signature.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

const featuredHandles = [
  {
    code: "13063",
    family: "Bridge Handles",
    material: "Zamak",
    description:
      "A quietly architectural pull with softened edges and a disciplined linear stance, ideal for premium cabinetry with understated metal detailing.",
    image: "https://cosma.design/images/products/1731921599203_cosma-handle-13063_C.jpg",
    detail: "Available in two practical lengths for compact doors and broader drawer runs.",
  },
  {
    code: "13061",
    family: "Bridge Handles",
    material: "Metal finish programme",
    description:
      "A more rounded silhouette that brings warmth and familiarity to contemporary kitchens while retaining a tailored technical feel.",
    image: "https://cosma.design/images/products/1731921599203_cosma-handle-13063_D.jpg",
    detail: "Suitable for projects that need comfort-forward geometry without losing visual precision.",
  },
  {
    code: "13058",
    family: "Special Designs",
    material: "Design-led hardware",
    description:
      "A directional form chosen to demonstrate the more expressive side of the Cosma offer for statement interiors and custom joinery.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    detail: "Best positioned as part of a curated edit rather than a volume-first range.",
  },
];

const finishEdit = [
  { name: "Brushed Brass", tone: "Warm, luminous, and suited to layered natural materials." },
  { name: "Bronze", tone: "A deeper architectural mood for darker joinery and stone palettes." },
  { name: "Black", tone: "Restrained contrast for contemporary interiors and minimalist compositions." },
  { name: "Steel", tone: "Cool, precise, and ideal for quietly technical kitchen environments." },
];

const specificationPoints = [
  {
    title: "Curated UK Selection",
    text: "A refined edit of the wider Italian catalogue presented in a way that is easier for UK studios, joiners, and specifiers to navigate.",
    icon: ShieldCheck,
  },
  {
    title: "Finish-Led Advice",
    text: "Support for selecting the right handle family against cabinetry colour, surface texture, and project character.",
    icon: SwatchBook,
  },
  {
    title: "Technical Confidence",
    text: "Product pages can scale into dimensional data, finish references, and downloadable resources as the site grows section by section.",
    icon: Ruler,
  },
];

const navLinks = [
  ["Home", "/"],
  ["Handles", "/handles"],
  ["Finishes", "#finishes-edit"],
  ["Trade", "#trade-support"],
  ["Contact", "#contact"],
] as const;

export default function Handles() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#b08d57]/30 selection:text-white">
      <div className="fixed inset-0 -z-20 bg-[#0a0908]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(176,141,87,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0908]/80 backdrop-blur-xl">
        <div className="container">
          <div className="flex items-center justify-between gap-6 py-4">
            <a href="/" className="flex items-center gap-3 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#c6a66b]/35 bg-white/5 text-sm font-semibold text-[#f1dfbf]">
                E
              </div>
              <div>
                <p className="font-[Manrope] text-base font-semibold tracking-wide text-white">EDP Handles</p>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#a68e68]">
                  Curated Italian Hardware
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="font-[Manrope] text-sm tracking-[0.18em] text-[#d9cab1] transition duration-300 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button
                asChild
                className="rounded-none border border-[#c6a66b]/40 bg-[#f6f0e6] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#d8c2a0]"
              >
                <a href="#trade-support">Discuss a Project</a>
              </Button>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-[#f1dfbf] lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen ? (
            <div className="border-t border-white/10 py-4 lg:hidden">
              <div className="flex flex-col gap-4">
                {navLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="font-[Manrope] text-sm uppercase tracking-[0.18em] text-[#d9cab1]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-2 w-full rounded-none border border-[#c6a66b]/40 bg-[#f6f0e6] py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#d8c2a0]"
                >
                  <a href="#trade-support" onClick={() => setMobileOpen(false)}>
                    Discuss a Project
                  </a>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="container grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24">
            <div className="relative max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-3 border border-white/12 bg-white/4 px-4 py-3 text-[#e2d4be] shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c6a66b]" />
                <span className="font-[Manrope] text-xs uppercase tracking-[0.28em]">Curated Handles Collection</span>
              </div>

              <h1 className="max-w-[9ch] font-[Cormorant_Garamond] text-6xl leading-[0.92] font-light tracking-[-0.04em] text-[#f5efe5] sm:text-7xl md:text-8xl lg:text-[7rem]">
                Handles for quietly exceptional interiors
              </h1>

              <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#b5a893] sm:text-lg">
                A UK-facing edit of the wider Cosma offer, organised into clear product families for kitchen studios,
                interior designers, and bespoke joinery projects. The focus is on architectural form, tactile finish,
                and specification confidence.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="group w-full rounded-none border border-[#d7be92]/45 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-[#f2e6d1] transition hover:border-[#d7be92] hover:bg-[#d7be92]/10 sm:w-auto"
                >
                  <a href="#category-edit">
                    Explore Categories
                    <MoveRight className="ml-3 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full rounded-none border border-white/14 bg-white/6 px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/12 sm:w-auto"
                >
                  <a href="#trade-support">Trade Enquiries</a>
                </Button>
              </div>

              <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
                {[
                  ["225", "Visible Handle Items"],
                  ["11", "Catalogue Families"],
                  ["UK", "Curated Distributor Edit"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-[Cormorant_Garamond] text-5xl leading-none text-[#f6efe5]">{value}</p>
                    <p className="mt-3 font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8f7d63]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-4">
              <div className="absolute -inset-6 hidden border border-[#b08d57]/20 lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#15110e] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
                <div className="relative overflow-hidden border-b border-white/10 bg-[#11100f]">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-collection-modern-kitchen-h3DZ3cFDwrFHTeYwoHduPj.webp"
                    alt="Warm kitchen interior with premium brass hardware styling"
                    className="h-[20rem] w-full object-cover object-center sm:h-[24rem] lg:h-[26rem]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090807]/55 via-transparent to-transparent" />
                </div>
                <div className="grid gap-6 bg-[linear-gradient(180deg,rgba(16,13,11,0.98),rgba(10,8,7,1))] p-7 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
                  <div>
                    <p className="font-[Manrope] text-[0.68rem] uppercase tracking-[0.3em] text-[#b89f78]">EDP Curated Selection</p>
                    <p className="mt-4 max-w-md font-[Cormorant_Garamond] text-3xl leading-[1.02] text-[#f4ede2] sm:text-[2.3rem]">
                      Real product-led browsing within the same editorial design language.
                    </p>
                  </div>
                  <div className="border-l-0 border-white/10 pt-1 lg:border-l lg:pl-6">
                    <p className="font-[Manrope] text-[0.68rem] uppercase tracking-[0.28em] text-[#a58d67]">Phase One</p>
                    <p className="mt-3 max-w-xs font-[Manrope] text-sm leading-7 text-[#d5cab8]">
                      Handles page as the master template for the wider product architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="category-edit" className="border-b border-white/10 py-24 lg:py-32">
          <div className="container grid gap-14 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#b89f78]">Category overview</p>
              <h2 className="mt-5 max-w-sm font-[Cormorant_Garamond] text-5xl leading-[0.95] font-light tracking-[-0.04em] text-[#f4ede2] sm:text-6xl">
                A clearer way to browse the handle catalogue
              </h2>
              <p className="mt-6 max-w-sm font-[Manrope] text-base leading-8 text-[#b5a893]">
                Rather than mirroring the full manufacturer interface, EDP Handles translates the upstream offer into a smaller
                set of legible product families for the UK market.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:auto-rows-fr">
              {handleCategories.map((category) => (
                <article
                  key={category.title}
                  className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#120f0d] transition duration-500 hover:-translate-y-1 hover:border-[#c6a66b]/45"
                >
                  <div className="relative z-10 -mb-px overflow-hidden bg-[#090807] leading-none">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="block h-72 w-full object-cover object-center transition duration-700 will-change-transform [transform:translateZ(0)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-[#090807]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-[Manrope] text-[0.68rem] uppercase tracking-[0.3em] text-[#d4bd95]">{category.source}</p>
                    </div>
                  </div>
                  <div className="relative z-[1] flex flex-1 flex-col space-y-5 bg-[#120f0d] p-7">
                    <h3 className="font-[Cormorant_Garamond] text-3xl text-[#f2ebdf]">{category.title}</h3>
                    <p className="font-[Manrope] text-sm leading-7 text-[#b8ad99]">{category.description}</p>
                    <a
                      href="#trade-support"
                      className="mt-auto inline-flex items-center gap-3 font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#f0dfc2] transition hover:text-white"
                    >
                      Request selection advice
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 py-24 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
            <div>
              <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#b89f78]">Featured handles</p>
              <h2 className="mt-5 max-w-sm font-[Cormorant_Garamond] text-5xl leading-[0.97] font-light tracking-[-0.04em] text-[#f4ede2] sm:text-6xl">
                Product-led highlights with specification intent
              </h2>
            </div>
            <p className="max-w-2xl font-[Manrope] text-base leading-8 text-[#b5a893]">
              Phase one uses selected handle highlights to introduce the product language. As the site expands, these cards can evolve
              into full range pages, technical downloads, and dimensional selectors.
            </p>
          </div>

          <div className="container mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
            {featuredHandles.map((item, index) => (
              <article
                key={item.code}
                className={`overflow-hidden border border-white/10 bg-[#12100f] ${index === 0 ? "lg:row-span-2" : ""}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Cosma handle ${item.code}`}
                    className={`block w-full object-cover [transform:translateZ(0)] ${index === 0 ? "h-[32rem]" : "h-72"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-transparent" />
                </div>
                <div className="space-y-5 p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="border border-[#c6a66b]/30 bg-[#c6a66b]/10 px-3 py-2 font-[Manrope] text-[0.68rem] uppercase tracking-[0.24em] text-[#e6d0a7]">
                      {item.family}
                    </span>
                    <span className="font-[Manrope] text-xs uppercase tracking-[0.2em] text-[#8d7a61]">Item {item.code}</span>
                  </div>
                  <h3 className="font-[Cormorant_Garamond] text-4xl leading-none text-[#f3ecdf]">{item.material}</h3>
                  <p className="font-[Manrope] text-sm leading-7 text-[#b8ad99]">{item.description}</p>
                  <div className="border-t border-white/10 pt-5">
                    <p className="font-[Manrope] text-sm leading-7 text-[#d6cab7]">{item.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="finishes-edit" className="border-b border-white/10 py-24 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
            <div className="grid gap-6 sm:grid-cols-2">
              {finishEdit.map((finish, index) => (
                <div
                  key={finish.name}
                  className="border border-white/10 bg-white/[0.03] p-7"
                  style={{
                    backgroundImage:
                      index === 0
                        ? "linear-gradient(135deg, rgba(176,141,87,0.28), rgba(33,25,18,0.55))"
                        : index === 1
                          ? "linear-gradient(135deg, rgba(106,76,49,0.26), rgba(24,18,15,0.7))"
                          : index === 2
                            ? "linear-gradient(135deg, rgba(62,62,62,0.4), rgba(10,10,10,0.9))"
                            : "linear-gradient(135deg, rgba(140,146,150,0.32), rgba(28,30,31,0.78))",
                  }}
                >
                  <p className="font-[Cormorant_Garamond] text-3xl text-[#f5ede1]">{finish.name}</p>
                  <p className="mt-3 font-[Manrope] text-sm leading-7 text-[#e4d9c8]">{finish.tone}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#b89f78]">Finish direction</p>
              <h2 className="mt-5 max-w-md font-[Cormorant_Garamond] text-5xl leading-[0.97] font-light tracking-[-0.04em] text-[#f4ede2] sm:text-6xl">
                The handle page should lead naturally into finishes
              </h2>
              <p className="mt-6 max-w-xl font-[Manrope] text-base leading-8 text-[#b5a893]">
                The current page introduces a curated finish edit to support early specification conversations. A dedicated finishes page can
                later expand this into full material families, technical references, and downloadable swatch support.
              </p>
              <a
                href="#trade-support"
                className="mt-8 inline-flex items-center gap-3 font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#f0dfc2] transition hover:text-white"
              >
                Discuss finish availability
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="trade-support" className="border-b border-white/10 py-24 lg:py-28">
          <div className="container grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
            <div>
              <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#b89f78]">Trade support</p>
              <h2 className="mt-5 max-w-sm font-[Cormorant_Garamond] text-5xl leading-[0.97] font-light tracking-[-0.04em] text-[#f4ede2] sm:text-6xl">
                Made for studios, designers, and specification projects
              </h2>
            </div>
            <div className="grid gap-6">
              {specificationPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <article key={point.title} className="flex gap-5 border border-white/10 bg-white/[0.03] p-6">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center border border-[#c6a66b]/35 bg-[#c6a66b]/10 text-[#f2dfbf]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-[Cormorant_Garamond] text-3xl text-[#f2ebdf]">{point.title}</h3>
                      <p className="mt-3 font-[Manrope] text-sm leading-7 text-[#b8ad99]">{point.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="container mt-12">
            <div className="grid gap-8 border border-[#c6a66b]/20 bg-[linear-gradient(135deg,rgba(198,166,107,0.13),rgba(14,11,9,0.92))] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#dbc298]">Next step</p>
                <p className="mt-4 max-w-2xl font-[Cormorant_Garamond] text-4xl leading-tight text-[#f4ede2] sm:text-5xl">
                  Request the initial curated handle selection for your next project.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Button
                  asChild
                  className="rounded-none border border-[#f1dfbf]/35 bg-[#f6f0e6] px-7 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#d8c2a0]"
                >
                  <a href="mailto:info@edphandles.co.uk">Email EDP Handles</a>
                </Button>
                <a
                  href="tel:+440000000000"
                  className="inline-flex items-center justify-center gap-3 border border-white/15 px-7 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#f2e6d1] transition hover:bg-white/8"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call the trade desk
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="py-12">
        <div className="container grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="font-[Cormorant_Garamond] text-4xl text-[#f2ebdf]">EDP Handles</p>
            <p className="mt-4 max-w-md font-[Manrope] text-sm leading-7 text-[#a99a85]">
              A curated UK destination for Italian-crafted handle collections, specified with clarity and presented with a more design-led trade experience.
            </p>
          </div>
          <div className="grid gap-3 text-left md:justify-self-end md:text-right">
            <a href="/" className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#d5cab8] transition hover:text-white">
              Return to Home
            </a>
            <a href="mailto:info@edphandles.co.uk" className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#d5cab8] transition hover:text-white">
              info@edphandles.co.uk
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
