import { companyProfile } from "@/lib/edpSiteContent";

const footerGroups = [
  {
    label: "Collections",
    links: [
      ["Handles", "/handles"],
      ["Walldrobe Internal Fittings", "/internal-fittings"],
      ["TELA Glass Doors Systems", "/tela-glass-doors-systems"],
      ["COSMA EXPRESS RANGE", "/cosma-express-range"],
    ],
  },
  {
    label: "Company",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
    ],
  },
  {
    label: "Trade",
    links: [
      ["Trade Portal", "/trade-portal"],
      ["Browse Catalogue", "/handles/catalogue"],
    ],
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0a09] py-14 sm:py-16">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#c6a66b]/35 bg-white/5 text-sm font-semibold text-[#f1dfbf]">
              E
            </div>
            <div>
              <p className="font-[Manrope] text-base font-semibold tracking-wide text-white">{companyProfile.companyName}</p>
              <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#a68e68]">
                {companyProfile.strapline}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-lg font-[Manrope] text-sm leading-7 text-[#9f937f]">
            {companyProfile.shortIntro}
          </p>
          <div className="mt-6 space-y-2 font-[Manrope] text-sm text-[#d6c7b0]">
            <p>{companyProfile.addressLines[0]}</p>
            <p>{companyProfile.addressLines[1]}</p>
            <p>{companyProfile.phoneLabel}</p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.label}>
              <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#88755d]">{group.label}</p>
              <div className="mt-4 flex flex-col gap-3">
                {group.links.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="font-[Manrope] text-sm text-[#d6c7b0] transition hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
