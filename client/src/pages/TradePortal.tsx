import { ArrowRight, PhoneCall, ShieldCheck, SwatchBook } from "lucide-react";
import EnquiryFormSection from "@/components/site/EnquiryFormSection";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { companyProfile, sharedImages } from "@/lib/edpSiteContent";

const tradePoints = [
  {
    title: "Specification Support",
    text: "Guidance on handle families, finishes, and internal fittings for premium residential and furniture-led projects.",
    icon: SwatchBook,
  },
  {
    title: "Reliable Availability",
    text: "UK stockholding and responsive support help keep projects aligned with programme and finish requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Direct Advice",
    text: "Experienced staff provide practical assistance for trade customers, kitchen studios, and associated industries.",
    icon: PhoneCall,
  },
] as const;

export default function TradePortal() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#b08d57]/30 selection:text-white">
      <div className="fixed inset-0 -z-20 bg-[#0a0908]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(176,141,87,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />

      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/8 py-20 sm:py-24 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Trade Portal</p>
              <h1 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-6xl leading-[0.92] font-light tracking-[-0.04em] text-[#f5efe5] sm:text-7xl">
                Support for specification-led and trade-focused projects.
              </h1>
              <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#b5a893] sm:text-lg">
                {companyProfile.tradeLead}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="w-full rounded-none border border-[#d7be92]/45 bg-[#f5efe5] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#ddc7a5] sm:w-auto"
                >
                  <a href="/handles/catalogue">Browse Catalogue</a>
                </Button>
                <Button
                  asChild
                  className="group w-full rounded-none border border-white/14 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/10 sm:w-auto"
                >
                  <a href="/contact">
                    Contact EDP
                    <ArrowRight className="ml-3 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181411] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
              <img
                src={sharedImages.darkShowroom}
                alt="EDP trade portal showroom background"
                className="h-[28rem] w-full rounded-[1.4rem] object-cover object-center sm:h-[36rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,0.22),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_25%,rgba(0,0,0,0.34))]" />
            </div>
          </div>
        </section>

        <EnquiryFormSection
          pageName="Trade Portal"
          eyebrow="Trade Enquiry"
          title="Discuss trade access, specification, and project support."
          intro="Use the form to open a trade conversation with EDP about handles, internal fittings, stockholding, and specification support for your projects."
        />

        <section className="py-24 sm:py-28">
          <div className="container grid gap-5 lg:grid-cols-3">
            {tradePoints.map((point) => {
              const Icon = point.icon;
              return (
                <article
                  key={point.title}
                  className="group border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-[#b08d57]/35 hover:bg-white/[0.045]"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-[#b08d57]/30 bg-[#b08d57]/8 text-[#dbc39f] transition duration-300 group-hover:bg-[#b08d57]/12">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-[Cormorant_Garamond] text-4xl font-light text-[#f5eee4]">{point.title}</h2>
                  <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#a89983]">{point.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-t border-white/8 py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="border border-white/10 bg-[#12100e] p-8 sm:p-10 lg:p-14">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Working with EDP</p>
              <h2 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f5eee4] sm:text-6xl">
                A direct route into premium product support.
              </h2>
              <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#c0b19a]">
                Use the Trade Portal as your starting point for collection access, finish alignment,
                application guidance, and conversations around premium hardware for kitchen and furniture
                projects.
              </p>
            </div>

            <aside className="grid gap-5">
              <div className="border border-white/10 bg-white/[0.03] p-8">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8d7960]">Contact</p>
                <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#e4d8c5]">{companyProfile.phoneLabel}</p>
                <p className="mt-3 font-[Manrope] text-sm leading-7 text-[#a89983]">
                  Contact EDP for stock, specification, or project-support enquiries.
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-8">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8d7960]">Location</p>
                <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#e4d8c5]">{companyProfile.addressLines[0]}</p>
                <p className="font-[Manrope] text-sm leading-7 text-[#e4d8c5]">{companyProfile.addressLines[1]}</p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
