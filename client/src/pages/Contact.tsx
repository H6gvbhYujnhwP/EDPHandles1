import { Building2, MapPin, PhoneCall } from "lucide-react";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { companyProfile, sharedImages } from "@/lib/edpSiteContent";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#b08d57]/30 selection:text-white">
      <div className="fixed inset-0 -z-20 bg-[#0a0908]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(176,141,87,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />

      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/8 py-20 sm:py-24 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Contact EDP</p>
              <h1 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-6xl leading-[0.92] font-light tracking-[-0.04em] text-[#f5efe5] sm:text-7xl">
                Talk to EDP about stock, trade support, and product guidance.
              </h1>
              <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#b5a893] sm:text-lg">
                {companyProfile.contactLead}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="w-full rounded-none border border-[#d7be92]/45 bg-[#f5efe5] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#ddc7a5] sm:w-auto"
                >
                  <a href="tel:01702618877">Call EDP</a>
                </Button>
                <Button
                  asChild
                  className="w-full rounded-none border border-white/14 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:w-auto"
                >
                  <a href="/trade-portal">Trade Portal</a>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181411] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
              <img
                src={sharedImages.darkShowroom}
                alt="Premium showroom image for the EDP contact page"
                className="h-[28rem] w-full rounded-[1.4rem] object-cover object-center sm:h-[36rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,0.2),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_25%,rgba(0,0,0,0.34))]" />
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="container grid gap-5 lg:grid-cols-3">
            <article className="border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-center gap-3 text-[#dbc39f]">
                <MapPin className="h-5 w-5" />
                <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#8d7960]">Visit</p>
              </div>
              <p className="mt-5 font-[Cormorant_Garamond] text-3xl text-[#f5eee4]">Southend-on-Sea</p>
              <div className="mt-4 space-y-1 font-[Manrope] text-sm leading-7 text-[#e4d8c5]">
                <p>{companyProfile.addressLines[0]}</p>
                <p>{companyProfile.addressLines[1]}</p>
              </div>
            </article>

            <article className="border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-center gap-3 text-[#dbc39f]">
                <PhoneCall className="h-5 w-5" />
                <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#8d7960]">Call</p>
              </div>
              <p className="mt-5 font-[Cormorant_Garamond] text-3xl text-[#f5eee4]">Direct Contact</p>
              <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#e4d8c5]">{companyProfile.phoneLabel}</p>
              <p className="mt-3 font-[Manrope] text-sm leading-7 text-[#a89983]">
                Professional advice for trade, stockholding, and specification enquiries.
              </p>
            </article>

            <article className="border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-center gap-3 text-[#dbc39f]">
                <Building2 className="h-5 w-5" />
                <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#8d7960]">Company</p>
              </div>
              <p className="mt-5 font-[Cormorant_Garamond] text-3xl text-[#f5eee4]">{companyProfile.companyName}</p>
              <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#a89983]">
                {companyProfile.strapline} with practical support for furniture and associated industries.
              </p>
            </article>
          </div>
        </section>

        <section className="border-t border-white/8 py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="border border-white/10 bg-[#12100e] p-8 sm:p-10 lg:p-14">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Company Profile</p>
              <h2 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f5eee4] sm:text-6xl">
                A direct route into premium product support in the UK.
              </h2>
              <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#c0b19a]">
                {companyProfile.shortIntro}
              </p>
              <p className="mt-5 max-w-xl font-[Manrope] text-base leading-8 text-[#a89983]">
                {companyProfile.aboutBody}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#14110f] p-8 sm:p-10">
              <img
                src={sharedImages.brassDetail}
                alt="Close-up handle detail for EDP contact page"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,10,9,0.96),rgba(12,10,9,0.82)_55%,rgba(12,10,9,0.92))]" />
              <div className="relative">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8d7960]">Leadership</p>
                <p className="mt-6 font-[Cormorant_Garamond] text-4xl font-light text-[#f3e7d6]">
                  {companyProfile.directorName}
                </p>
                <p className="mt-1 font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#9f8a6c]">
                  {companyProfile.directorRole}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
