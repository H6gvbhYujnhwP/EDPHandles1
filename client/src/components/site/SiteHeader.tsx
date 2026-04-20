import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const siteNavLinks = [
  ["Handles", "/handles"],
  ["Internal Fittings", "/#internal-fittings"],
  ["About", "/#heritage"],
  ["Trade Portal", "/handles/catalogue#trade-support"],
  ["Contact", "/#contact"],
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
            {siteNavLinks.map(([label, href]) => (
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
              <a href="/handles">Get Started</a>
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
              <Button
                asChild
                className="mt-2 w-full rounded-none border border-[#c6a66b]/40 bg-[#f6f0e6] py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#d8c2a0]"
              >
                <a href="/handles" onClick={() => setMobileOpen(false)}>
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
