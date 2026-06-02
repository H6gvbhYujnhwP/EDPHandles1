import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const siteNavLinks = [
  ["Cosma Handles", "/handles"],
  ["MIRA Wardrobe Internal Fittings", "/internal-fittings"],
  ["TELA Glass Doors Systems", "/tela-glass-doors-systems"],
  ["COSMA EXPRESS RANGE", "/cosma-express-range"],
  ["About", "/about"],
  ["Trade Portal", "/trade-portal"],
  ["Contact", "/contact"],
] as const;

export default function SiteHeader() {
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0908]/80 backdrop-blur-xl">
      <div className="container">
        <div className="flex items-center justify-between gap-6 py-4">
          <a href="/" className="flex items-center gap-3 text-left">
            <img
              src="/images/site/logo-cosma-bianco.png"
              alt="Cosma logo"
              className="h-14 w-auto object-contain shrink-0"
            />
            <div>
              <p className="font-[Manrope] text-base font-semibold tracking-wide text-white">EDP Handles</p>
              <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#a68e68]">
                COSMA ITALIAN CRAFTMANSHIP
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {siteNavLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="font-[Manrope] text-[11px] tracking-[0.13em] text-[#d9cab1] transition duration-300 hover:text-white xl:text-xs xl:tracking-[0.16em] 2xl:text-sm 2xl:tracking-[0.18em]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:01702618877"
              className="font-[Manrope] text-xs font-semibold uppercase tracking-[0.18em] text-[#d9cab1] transition duration-300 hover:text-white"
            >
              Tel. 01702 618877
            </a>
            <Button
              asChild
              className="rounded-none border border-[#c6a66b]/40 bg-[#f6f0e6] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#d8c2a0]"
            >
              <a href="#enquiry-form">Make Enquiry</a>
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
              {siteNavLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="font-[Manrope] text-sm uppercase tracking-[0.18em] text-[#d9cab1]"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href="tel:01702618877"
                className="font-[Manrope] text-sm uppercase tracking-[0.18em] text-[#d9cab1]"
                onClick={() => setMobileOpen(false)}
              >
                Tel. 01702 618877
              </a>
              <Button
                asChild
                className="mt-2 w-full rounded-none border border-[#c6a66b]/40 bg-[#f6f0e6] py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#d8c2a0]"
              >
                <a href="#enquiry-form" onClick={() => setMobileOpen(false)}>
                  Make Enquiry
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
