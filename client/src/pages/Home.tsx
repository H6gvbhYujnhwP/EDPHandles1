/*
Design reminder for this file: Neo-Atelier Italian Editorial.
Use asymmetrical compositions, generous whitespace, serif-led hierarchy, brass-accent details, and calm premium interactions.
Every section should feel like a curated showroom rather than a generic centered landing page.
*/
import { ArrowRight, Menu, MoveRight, PhoneCall, ShieldCheck, Sparkles, SwatchBook, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const collections = [
  {
    name: "Modern Brass",
    description: "Clean linear profiles with warm brushed finishes for contemporary cabinetry.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-collection-modern-kitchen-h3DZ3cFDwrFHTeYwoHduPj.webp",
  },
  {
    name: "Matte Steel",
    description: "Understated cool-toned hardware designed for composed architectural interiors.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Curved Elegance",
    description: "Soft silhouettes that bring sculptural tactility to bespoke kitchen joinery.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Leather Luxury",
    description: "Rich material pairings for interiors that balance warmth, craft, and distinction.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Geometric Bold",
    description: "Confident statement forms engineered for design-led residential projects.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Minimalist",
    description: "Refined essentials that let premium surfaces and exact detailing lead the room.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Vintage Brass",
    description: "Time-softened character inspired by heritage fittings and classical proportions.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mixed Metals",
    description: "Layered finishes curated for high-contrast kitchens with bespoke design intent.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
];

const featurePoints = [
  {
    title: "Premium Materials",
    text: "Sourced from distinguished suppliers in Italy and across Europe for lasting finish integrity.",
    icon: SwatchBook,
  },
  {
    title: "Artisan Crafted",
    text: "Each handle is finished with the care, accuracy, and tactile nuance expected of specialist makers.",
    icon: Sparkles,
  },
  {
    title: "Trade Focused",
    text: "Designed around the expectations of kitchen studios, fitters, developers, and specification partners.",
    icon: ShieldCheck,
  },
];

const footerGroups = [
  {
    label: "Collections",
    links: ["Modern", "Classic", "Statement"],
  },
  {
    label: "Trade",
    links: ["Trade Portal", "Pricing", "Support"],
  },
  {
    label: "Company",
    links: ["About", "Contact", "Privacy"],
  },
];

export default function Home() {
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
            <a href="#top" className="flex items-center gap-3 text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#c6a66b]/35 bg-white/5 text-sm font-semibold text-[#f1dfbf]">
                E
              </div>
              <div>
                <p className="font-[Manrope] text-base font-semibold tracking-wide text-white">EDP Handles</p>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#a68e68]">
                  Italian Craftsmanship
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 lg:flex">
              {[
                ["Handles", "/handles"],
                ["Collections", "#collections"],
                ["Heritage", "#heritage"],
                ["Trade Portal", "#trade"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
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
                <a href="#trade">Get Started</a>
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
                {[
                  ["Handles", "/handles"],
                  ["Collections", "#collections"],
                  ["Heritage", "#heritage"],
                  ["Trade Portal", "#trade"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
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
                  <a href="#trade" onClick={() => setMobileOpen(false)}>
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="container grid min-h-[calc(100vh-5rem)] items-center gap-16 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="relative max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-3 border border-white/12 bg-white/4 px-4 py-3 text-[#e2d4be] shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c6a66b]" />
                <span className="font-[Manrope] text-xs uppercase tracking-[0.28em]">30+ Years of Excellence</span>
              </div>

              <h1 className="max-w-[8ch] font-[Cormorant_Garamond] text-6xl leading-[0.92] font-light tracking-[-0.04em] text-[#f5efe5] sm:text-7xl md:text-8xl lg:text-[7.2rem]">
                Italian Style to the UK
              </h1>

              <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#b5a893] sm:text-lg">
                Bringing three decades of Italian craftsmanship to British kitchens. Premium cabinet
                handles that elevate every space with timeless elegance and uncompromising quality.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="group w-full rounded-none border border-[#d7be92]/45 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-[#f2e6d1] transition hover:border-[#d7be92] hover:bg-[#d7be92]/10 sm:w-auto"
                >
                  <a href="/handles">
                    Browse Handles
                    <MoveRight className="ml-3 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full rounded-none border border-white/14 bg-white/6 px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/12 sm:w-auto"
                >
                  <a href="#trade">Trade Portal</a>
                </Button>
              </div>

              <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
                {[
                  ["30+", "Years Heritage"],
                  ["8", "Premium Styles"],
                  ["100%", "Handcrafted"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-[Cormorant_Garamond] text-5xl leading-none text-[#f6efe5]">{value}</p>
                    <p className="mt-3 font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8f7d63]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="absolute -inset-6 hidden border border-[#b08d57]/20 lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#12100e] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-hero-kitchen-brass-LnFBkzRUvbTX7u7dbXRoHv.webp"
                  alt="Luxury charcoal kitchen with brushed brass handles"
                  className="h-[26rem] w-full rounded-[1.4rem] object-cover object-center sm:h-[34rem]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,0.06),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_25%,rgba(0,0,0,0.18))]" />
              </div>
            </div>
          </div>
        </section>

        <section id="heritage" className="relative border-y border-white/8 bg-[#161311]/70 py-24 sm:py-28">
          <div className="container grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[1.8rem] border border-[#b08d57]/20" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-heritage-detail-brass-9C2UfHatBAbx2pMkg8sP9q.webp"
                alt="Close-up of a brushed brass handle showing premium finishing"
                className="relative w-full rounded-[1.75rem] border border-white/10 object-cover shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
              />
            </div>

            <div className="max-w-3xl">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Three Decades of Mastery</p>
              <h2 className="mt-5 max-w-[11ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f4eee4] sm:text-6xl">
                Authentic Italian detailing for British kitchens.
              </h2>
              <p className="mt-8 max-w-2xl font-[Manrope] text-lg leading-8 text-[#bbaf9c]">
                Since our founding, EDP Handles has been dedicated to bringing authentic Italian
                craftsmanship to kitchens across the United Kingdom. Every handle is a study in
                precision, elegance, and the enduring traditions of material-led design.
              </p>
              <p className="mt-6 max-w-2xl font-[Manrope] text-base leading-8 text-[#9f937f]">
                Our collections unite contemporary silhouettes with classical heritage, giving kitchen
                studios and trade professionals access to fittings that feel both highly usable and quietly
                exceptional.
              </p>

              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {featurePoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <article
                      key={point.title}
                      className="group border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#b08d57]/35 hover:bg-white/[0.045]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center border border-[#b08d57]/30 bg-[#b08d57]/8 text-[#dbc39f] transition duration-300 group-hover:bg-[#b08d57]/12">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-[Manrope] text-sm font-semibold uppercase tracking-[0.18em] text-[#f5eee2]">
                        {point.title}
                      </h3>
                      <p className="mt-3 font-[Manrope] text-sm leading-7 text-[#a89983]">{point.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="py-24 sm:py-28">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Eight Exquisite Collections</p>
                <h2 className="mt-5 max-w-[11ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f5eee3] sm:text-6xl">
                  Crafted ranges for every interior language.
                </h2>
              </div>
              <p className="max-w-2xl font-[Manrope] text-base leading-8 text-[#a89983] lg:justify-self-end">
                From minimalist elegance to statement-led forms, discover a collection designed to align
                with your project’s atmosphere, material palette, and architectural character.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {collections.map((collection, index) => (
                <article
                  key={collection.name}
                  className={`group relative overflow-hidden border border-white/10 bg-[#12100e] transition duration-500 hover:-translate-y-1 hover:border-[#b08d57]/40 ${
                    index % 4 === 0 ? "xl:mt-10" : index % 4 === 2 ? "xl:-mt-10" : ""
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="border-t border-white/10 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-[Cormorant_Garamond] text-3xl leading-none text-[#f5eee2]">
                        {collection.name}
                      </h3>
                      <span className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#88755d]">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#a89983]">{collection.description}</p>
                    <a
                      href="#trade"
                      className="mt-6 inline-flex items-center gap-2 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#e4d0ad] transition hover:text-white"
                    >
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trade" className="border-t border-white/8 py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181411] p-8 sm:p-10 lg:p-14">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-cta-dark-showroom-5xCUtERPZdSioeLcAoTr4h.webp"
                alt="Moody luxury showroom background"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(10,8,7,0.92),rgba(10,8,7,0.7)_55%,rgba(10,8,7,0.88))]" />
              <div className="relative max-w-2xl">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Ready to Transform Your Kitchen?</p>
                <h2 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f5eee4] sm:text-6xl">
                  Join trusted trade partners across the UK.
                </h2>
                <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#c0b19a]">
                  Access curated collections, consultation support, and specification-ready hardware for
                  premium projects that demand craftsmanship and visual distinction.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="w-full rounded-none border border-[#d7be92]/45 bg-[#f5efe5] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#ddc7a5] sm:w-auto"
                  >
                    <a href="#contact">Access Trade Portal</a>
                  </Button>
                  <Button
                    asChild
                    className="w-full rounded-none border border-white/14 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:w-auto"
                  >
                    <a href="#contact">Schedule Consultation</a>
                  </Button>
                </div>
              </div>
            </div>

            <aside className="grid gap-5">
              <div className="border border-white/10 bg-white/[0.03] p-8">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8d7960]">Trade Portal</p>
                <h3 className="mt-4 font-[Cormorant_Garamond] text-4xl font-light text-[#f5eee4]">Designed for specification-led workflows.</h3>
                <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#a89983]">
                  Product guidance, finish alignment, and dependable support for kitchen studios and
                  project partners.
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#b08d57]/30 bg-[#b08d57]/8 text-[#dbc39f]">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#8d7960]">Consultation</p>
                    <p className="mt-1 font-[Manrope] text-sm text-[#f5eee2]">Tailored support for premium residential and trade projects.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 bg-[#0c0a09] py-16">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#c6a66b]/35 bg-white/5 text-sm font-semibold text-[#f1dfbf]">
                E
              </div>
              <div>
                <p className="font-[Manrope] text-base font-semibold tracking-wide text-white">EDP Handles</p>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#a68e68]">
                  Italian Craftsmanship
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-lg font-[Manrope] text-sm leading-7 text-[#9f937f]">
              Bringing Italian style to the UK for over 30 years with refined cabinet hardware curated for
              kitchens that value both beauty and exacting detail.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#88755d]">{group.label}</p>
                <div className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <a
                      key={link}
                      href={link === "Contact" ? "#contact" : link === "About" ? "#heritage" : link.includes("Trade") ? "#trade" : "#collections"}
                      className="font-[Manrope] text-sm text-[#d6c7b0] transition hover:text-white"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
