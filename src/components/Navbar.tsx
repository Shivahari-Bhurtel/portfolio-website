import { useState } from "react";

const NAV_LINKS = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-near-black text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between gap-3 py-3 md:py-4">
          <a
            href="#dashboard"
            className="font-display text-xl font-semibold tracking-[-0.04em] text-white transition-colors duration-200 hover:text-mint sm:text-2xl md:text-[2rem]"
          >
            Shivahari.
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs font-medium tracking-[0.12em] text-white/65 uppercase transition-colors duration-200 hover:text-mint"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors duration-200 hover:border-mint lg:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-4 rounded-full bg-white transition-all ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-4 rounded-full bg-white transition-all ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`block h-0.5 w-4 rounded-full bg-white transition-all ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-mint bg-mint px-3 py-2 font-mono text-[9px] font-medium tracking-[0.14em] text-near-black uppercase transition-colors duration-200 hover:bg-white sm:px-4 sm:py-2.5 sm:text-[10px] md:px-5 md:text-[11px]"
            >
              Contact
            </a>
          </div>
        </div>

        <nav
          aria-label="Mobile navigation"
          className={`overflow-hidden border-t border-white/10 bg-near-black transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 border-t-transparent opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-[10px] font-medium tracking-[0.16em] text-white/70 uppercase transition-all duration-200 hover:text-mint"
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
