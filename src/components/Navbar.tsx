import { useState } from "react";

const NAV_LINKS = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-grey-200 bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between gap-3 py-3 md:py-4">
          <a
            href="#dashboard"
            className="font-display text-xl font-semibold tracking-[-0.04em] text-near-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80 sm:text-2xl md:text-[2rem]"
          >
            Shivahari.
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs font-medium tracking-[0.18em] text-grey-600 uppercase transition-all duration-200 hover:-translate-y-0.5 hover:text-near-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-grey-300 bg-white text-near-black transition-all duration-200 hover:border-near-black md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-4 rounded-full bg-near-black transition-all ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-4 rounded-full bg-near-black transition-all ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`block h-0.5 w-4 rounded-full bg-near-black transition-all ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>

            <a
              href="mailto:bhurtelshivahari@gmail.com"
              className="inline-flex items-center rounded-full border border-near-black bg-near-black px-3 py-2 font-mono text-[9px] font-medium tracking-[0.14em] text-white uppercase transition-all duration-200 hover:bg-white hover:text-near-black sm:px-4 sm:py-2.5 sm:text-[10px] md:px-5 md:text-[11px]"
            >
              Contact
            </a>
          </div>
        </div>

        <nav
          aria-label="Mobile navigation"
          className={`overflow-hidden border-t border-grey-200 bg-white/90 transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 border-t-transparent opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-[10px] font-medium tracking-[0.16em] text-grey-600 uppercase transition-all duration-200 hover:text-near-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
