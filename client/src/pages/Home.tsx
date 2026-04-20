/*
Design reminder for this file: Neo-Atelier Italian Editorial.
Use asymmetrical compositions, generous whitespace, serif-led hierarchy, brass-accent details, and calm premium interactions.
Every section should feel like a curated showroom rather than a generic centered landing page.
*/
import { ArrowRight, Building2, MoveRight, PhoneCall } from "lucide-react";
import EnquiryFormSection from "@/components/site/EnquiryFormSection";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { companyProfile, internalFittings, sharedImages } from "@/lib/edpSiteContent";

const teaserFittings = internalFittings.slice(0, 4);

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
                Bringing three decades of Italian craftsmanship to British kitchens and interiors. EDP
                supplies premium cabinet handles and design-led fittings with the quality, finish, and
                service expected by trade professionals across the UK.
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
                  <a href="/trade-portal">Trade Portal</a>
                </Button>
              </div>

              <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
                {[
                  ["30+", "Years Heritage"],
                  ["8", "Premium Styles"],
                  ["UK", "Stockholding"],
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
                  src={sharedImages.heroKitchen}
                  alt="Luxury charcoal kitchen with brushed brass handles"
                  className="h-[26rem] w-full rounded-[1.4rem] object-cover object-center sm:h-[34rem]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,0.06),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_25%,rgba(0,0,0,0.18))]" />
              </div>
            </div>
          </div>
        </section>

        <EnquiryFormSection
          pageName="Homepage"
          eyebrow="General Enquiry"
          title="Start a handles or fittings conversation."
          intro="Use the enquiry form to discuss premium handles, internal fittings, stockholding, finish options, and project-led advice with EDP before moving deeper into the range."
        />

        <section className="border-y border-white/8 bg-[#161311]/70 py-24 sm:py-28">
          <div className="container grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#12100e] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
              <img
                src="/images/internal-fittings-mira-hero.jpg"
                alt="Wardrobe interior featuring Cosma MIRA internal fittings"
                className="h-[26rem] w-full rounded-[1.4rem] object-cover object-center sm:h-[32rem]"
              />
            </div>

            <div className="max-w-3xl">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Internal Fittings</p>
              <h2 className="mt-5 max-w-[11ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f4eee4] sm:text-6xl">
                Premium wardrobe interiors with a dedicated destination.
              </h2>
              <p className="mt-8 max-w-2xl font-[Manrope] text-lg leading-8 text-[#bbaf9c]">
                Explore the Cosma MIRA-led offer through a dedicated Internal Fittings page covering
                hanging rails, shelf frames, pull-out frames, drawers, and accessory-led storage solutions.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {teaserFittings.map((item) => (
                  <article key={item.name} className="border border-white/10 bg-white/[0.03] p-5">
                    <p className="font-[Cormorant_Garamond] text-3xl text-[#f5eee2]">{item.name}</p>
                    <p className="mt-3 font-[Manrope] text-sm leading-7 text-[#a89983]">{item.description}</p>
                  </article>
                ))}
              </div>
              <a
                href="/internal-fittings"
                className="mt-8 inline-flex items-center gap-2 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#e4d0ad] transition hover:text-white"
              >
                Visit Internal Fittings
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">About EDP</p>
              <h2 className="mt-5 max-w-[11ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f4eee4] sm:text-6xl">
                Exclusive UK distribution backed by real industry experience.
              </h2>
              <p className="mt-8 font-[Manrope] text-base leading-8 text-[#bbaf9c]">
                {companyProfile.aboutLead}
              </p>
              <p className="mt-5 font-[Manrope] text-base leading-8 text-[#9f937f]">
                {companyProfile.aboutBody}
              </p>
              <a
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#e4d0ad] transition hover:text-white"
              >
                Read About EDP
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#14110f] p-8 sm:p-10 lg:p-12">
              <img
                src={sharedImages.brassDetail}
                alt="Close-up of brushed brass handle"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,10,9,0.96),rgba(12,10,9,0.82)_55%,rgba(12,10,9,0.92))]" />
              <div className="relative">
                <div className="flex items-center gap-3 text-[#dbc39f]">
                  <Building2 className="h-5 w-5" />
                  <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8d7960]">Company Snapshot</p>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="font-[Cormorant_Garamond] text-3xl text-[#f3e7d6]">{companyProfile.companyName}</p>
                    <p className="mt-2 font-[Manrope] text-sm leading-7 text-[#c8baa4]">{companyProfile.strapline}</p>
                  </div>
                  <div>
                    <p className="font-[Cormorant_Garamond] text-3xl text-[#f3e7d6]">{companyProfile.directorName}</p>
                    <p className="mt-2 font-[Manrope] text-sm leading-7 text-[#c8baa4]">{companyProfile.directorRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181411] p-8 sm:p-10 lg:p-14">
              <img
                src={sharedImages.darkShowroom}
                alt="Moody luxury showroom background"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(10,8,7,0.92),rgba(10,8,7,0.7)_55%,rgba(10,8,7,0.88))]" />
              <div className="relative max-w-2xl">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Trade Support</p>
                <h2 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f5eee4] sm:text-6xl">
                  Dedicated support beyond the homepage.
                </h2>
                <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#c0b19a]">
                  The Trade Portal now stands as its own destination for specification-led support,
                  catalogue access, and product conversations for premium kitchen and furniture projects.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="w-full rounded-none border border-[#d7be92]/45 bg-[#f5efe5] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#ddc7a5] sm:w-auto"
                  >
                    <a href="/trade-portal">Access Trade Portal</a>
                  </Button>
                  <Button
                    asChild
                    className="w-full rounded-none border border-white/14 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:w-auto"
                  >
                    <a href="/contact">Contact EDP</a>
                  </Button>
                </div>
              </div>
            </div>

            <aside className="grid gap-5">
              <div className="border border-white/10 bg-white/[0.03] p-8">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8d7960]">Trade Portal</p>
                <h3 className="mt-4 font-[Cormorant_Garamond] text-4xl font-light text-[#f5eee4]">
                  Built for specification-led workflows.
                </h3>
                <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#a89983]">
                  Product guidance, finish alignment, and dependable support for kitchen studios,
                  furniture manufacturers, and project partners.
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#b08d57]/30 bg-[#b08d57]/8 text-[#dbc39f]">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#8d7960]">Contact</p>
                    <p className="mt-1 font-[Manrope] text-sm text-[#f5eee2]">{companyProfile.phoneLabel}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
