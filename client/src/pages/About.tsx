import EnquiryFormSection from "@/components/site/EnquiryFormSection";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { aboutFeaturePoints, companyProfile, sharedImages } from "@/lib/edpSiteContent";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#b08d57]/30 selection:text-white">
      <div className="fixed inset-0 -z-20 bg-[#0a0908]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(176,141,87,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />

      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/8 py-20 sm:py-24 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[1.8rem] border border-[#b08d57]/20" />
              <img
                src={sharedImages.brassDetail}
                alt="Close-up of a brushed brass handle showing premium finishing"
                className="relative w-full rounded-[1.75rem] border border-white/10 object-cover shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
              />
            </div>

            <div className="max-w-3xl">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">About EDP (UK) Ltd</p>
              <h1 className="mt-5 max-w-[12ch] font-[Cormorant_Garamond] text-6xl leading-[0.92] font-light tracking-[-0.04em] text-[#f4eee4] sm:text-7xl">
                Exclusive UK distribution with over 28 years of industry experience.
              </h1>
              <p className="mt-8 max-w-2xl font-[Manrope] text-lg leading-8 text-[#bbaf9c]">
                {companyProfile.shortIntro}
              </p>
              <p className="mt-6 max-w-2xl font-[Manrope] text-base leading-8 text-[#9f937f]">
                {companyProfile.aboutLead}
              </p>
            </div>
          </div>
        </section>

        <EnquiryFormSection
          pageName="About"
          eyebrow="Talk to EDP"
          title="Start a conversation with the UK distribution team."
          intro="Use the form to discuss product access, stockholding, specification guidance, or a new project with EDP (UK) Ltd and the wider Cosma-led offer."
        />

        <section className="border-b border-white/8 bg-[#161311]/70 py-24 sm:py-28">
          <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Company Profile</p>
              <h2 className="mt-5 max-w-[12ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f5eee4] sm:text-6xl">
                A long-standing trade partner for premium furniture components.
              </h2>
              <p className="mt-8 max-w-2xl font-[Manrope] text-base leading-8 text-[#bbaf9c]">
                {companyProfile.aboutBody}
              </p>
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-[Cormorant_Garamond] text-3xl text-[#f3e7d6]">{companyProfile.directorName}</p>
                <p className="mt-1 font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#9f8a6c]">
                  {companyProfile.directorRole}
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              {aboutFeaturePoints.map((point) => {
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
        </section>

        <section className="py-24 sm:py-28">
          <div className="container grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8d7960]">Location & Service</p>
              <h2 className="mt-5 max-w-[12ch] font-[Cormorant_Garamond] text-5xl font-light text-[#f5eee4] sm:text-6xl">
                Stockholding, advice, and reliable UK distribution.
              </h2>
              <p className="mt-8 max-w-2xl font-[Manrope] text-base leading-8 text-[#a89983]">
                From Southend-on-Sea, EDP supports customers with practical product knowledge, access to
                Cosma design collections, and a stockholding programme shaped around specification-led and
                trade-focused workflows.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#14110f] p-8 sm:p-10">
              <img
                src={sharedImages.darkShowroom}
                alt="Premium showroom image supporting the EDP company profile"
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,10,9,0.96),rgba(12,10,9,0.82)_55%,rgba(12,10,9,0.92))]" />
              <div className="relative">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8d7960]">EDP Details</p>
                <div className="mt-6 space-y-3 font-[Manrope] text-sm leading-7 text-[#e4d8c5]">
                  <p>{companyProfile.companyName}</p>
                  <p>{companyProfile.addressLines[0]}</p>
                  <p>{companyProfile.addressLines[1]}</p>
                  <p>{companyProfile.phoneLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
