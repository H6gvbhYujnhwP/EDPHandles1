/*
Design reminder for this file: Neo-Atelier Italian Editorial.
Use asymmetrical compositions, generous whitespace, serif-led hierarchy, brass-accent details, and calm premium interactions.
Every section should feel like a curated showroom rather than a generic centered landing page.
*/
import { ArrowRight, Building2, MapPin, MoveRight, PhoneCall, ShieldCheck, Sparkles, SwatchBook } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/site/SiteHeader";

const internalFittings = [
  {
    name: "MIRA System",
    description: "A modular wardrobe-organisation system designed around refined aluminium profiles, soft edges, and fast custom assembly.",
    image: "/images/internal-fittings-mira-hero.jpg",
  },
  {
    name: "Hanging Rails",
    description: "Minimal wardrobe hanging rails with dedicated side and shelf supports, available with premium covering options.",
    image: "/images/internal-fittings/hanging-rails-correct.jpg",
  },
  {
    name: "Shelf Frames",
    description: "Fixed shelf-frame components that create a clean internal architecture for glass or material shelf inserts.",
    image: "/images/internal-fittings/pull-out-frame.jpg",
  },
  {
    name: "Pull-Out Frames",
    description: "Flexible pull-out frame assemblies that bring accessible wardrobe storage and a premium engineered feel.",
    image: "/images/internal-fittings/shelf-frame.jpg",
  },
  {
    name: "Drawers",
    description: "Straight-cut aluminium drawer construction with optional glass-front detailing for bespoke interior schemes.",
    image: "/images/internal-fittings/drawers-correct.png",
  },
  {
    name: "Trays & Dividers",
    description: "Organised internal storage solutions for jewellery, watches, and small accessories, designed to fit the MIRA system.",
    image: "/images/internal-fittings/trays-dividers-correct.png",
  },
  {
    name: "Trouser Holders",
    description: "Dedicated trouser-holder profiles with non-slip detailing for tailored wardrobe functionality.",
    image: "/images/internal-fittings/trouser-holders-correct.png",
  },
  {
    name: "Shoe Racks & Accessories",
    description: "Shoe-rack profiles and complementary accessory options that complete the internal fittings offer.",
    image: "/images/internal-fittings/shoe-rack-correct.png",
  },
];

const featurePoints = [
  {
    title: "Exclusive Cosma Distribution",
    text: "Exclusive UK agency and distribution support for Cosma Italian handles, giving customers direct access to design-led collections and dependable availability.",
    icon: SwatchBook,
  },
  {
    title: "Technical Guidance",
    text: "Experienced staff provide practical product advice for furniture manufacturers, kitchen studios, and associated trade customers across the UK.",
    icon: Sparkles,
  },
  {
    title: "UK Stockholding",
    text: "A Southend-based stockholding programme supports responsive fulfilment, continuity, and service for specification-led projects.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#b08d57]/30 selection:text-white">
      <div className="fixed inset-0 -z-20 bg-[#0a0908]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(176,141,87,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />

      <SiteHeader />

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
                  <a href="/handles/catalogue#trade-support">Trade Portal</a>
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
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">About EDP (UK) Ltd</p>
              <h2 className="mt-5 max-w-[12ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f4eee4] sm:text-6xl">
                Exclusive UK distribution with over 28 years of industry experience.
              </h2>
              <p className="mt-8 max-w-2xl font-[Manrope] text-lg leading-8 text-[#bbaf9c]">
                EDP (UK) Ltd supplies high-quality components to the furniture and associated industries,
                with a long-standing focus on selecting products that combine design distinction,
                dependable engineering, and commercial practicality for the UK market.
              </p>
              <p className="mt-6 max-w-2xl font-[Manrope] text-base leading-8 text-[#9f937f]">
                Based in Southend-on-Sea, Essex, the company supports customers with full UK stockholding,
                professional technical advice, and exclusive access to Cosma Italian handles. Under the
                direction of Mark Willett, the business continues to develop an innovative range shaped by
                reliability, product development, and premium European craftsmanship.
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

        <section id="internal-fittings" className="py-24 sm:py-28">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Internal Fittings</p>
                <h2 className="mt-5 max-w-[11ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f5eee3] sm:text-6xl">
                  Modular wardrobe interiors with premium Italian detailing.
                </h2>
              </div>
              <p className="max-w-2xl font-[Manrope] text-base leading-8 text-[#a89983] lg:justify-self-end">
                Discover a refined internal-fittings offer built around the Cosma MIRA system, including
                hanging rails, shelf frames, pull-out frames, drawers, and accessory-led storage solutions
                for bespoke wardrobes and premium interiors.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {internalFittings.map((collection, index) => (
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
                      href="#internal-fittings"
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
                    <a href="/handles/catalogue#trade-support">Access Trade Portal</a>
                  </Button>
                  <Button
                    asChild
                    className="w-full rounded-none border border-white/14 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:w-auto"
                  >
                    <a href="/handles/catalogue#trade-support">Schedule Consultation</a>
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
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#c6a66b]/35 bg-white/5 text-sm font-semibold text-[#f1dfbf]">
                E
              </div>
              <div>
                <p className="font-[Manrope] text-base font-semibold tracking-wide text-white">EDP (UK) Ltd</p>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#a68e68]">
                  Exclusive UK Distributors for Cosma
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-lg font-[Manrope] text-sm leading-7 text-[#9f937f]">
              For product guidance, stock enquiries, and trade support, EDP (UK) Ltd offers direct access
              to premium Italian handle and internal-fittings collections for furniture and associated
              industries throughout the UK.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <article className="border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3 text-[#dbc39f]">
                  <MapPin className="h-5 w-5" />
                  <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#8d7960]">Visit</p>
                </div>
                <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#e4d8c5]">
                  Unit 1, 40 Comet Way<br />
                  Southend on Sea, Essex SS2 6GD
                </p>
              </article>
              <article className="border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-3 text-[#dbc39f]">
                  <PhoneCall className="h-5 w-5" />
                  <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#8d7960]">Call</p>
                </div>
                <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#e4d8c5]">
                  Tel. 01702 618877<br />
                  Professional advice for trade and specification enquiries.
                </p>
              </article>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#14110f] p-8 sm:p-10">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/fRVbFQ3JDagBgP7ipYs35A/edp-cta-dark-showroom-5xCUtERPZdSioeLcAoTr4h.webp"
              alt="Premium showroom mood image for EDP contact section"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,10,9,0.96),rgba(12,10,9,0.82)_55%,rgba(12,10,9,0.92))]" />
            <div className="relative">
              <div className="flex items-center gap-3 text-[#dbc39f]">
                <Building2 className="h-5 w-5" />
                <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8d7960]">Company Profile</p>
              </div>
              <h3 className="mt-5 max-w-[12ch] font-[Cormorant_Garamond] text-4xl font-light text-[#f5eee4] sm:text-5xl">
                Built around service, stockholding, and dependable technical support.
              </h3>
              <p className="mt-6 max-w-xl font-[Manrope] text-sm leading-7 text-[#c8baa4]">
                EDP (UK) Ltd is a leading distributor of components to the furniture and associated
                industries, focused on supplying innovative, reliable products backed by experienced advice
                and responsive UK support.
              </p>
              <p className="mt-5 max-w-xl font-[Manrope] text-sm leading-7 text-[#a89983]">
                As exclusive UK distributors for Cosma, the business combines Italian product development
                with local availability, helping customers specify solutions that are both technically sound
                and commercially practical.
              </p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-[Cormorant_Garamond] text-3xl text-[#f3e7d6]">Mark Willett</p>
                <p className="mt-1 font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#9f8a6c]">Director</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
