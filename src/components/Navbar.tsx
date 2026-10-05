import { useEffect, useState } from "react";

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
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 -mb-4 px-3 pt-3 pb-4 text-white sm:px-6">
      <div
        className={`mx-auto max-w-[1200px] overflow-hidden border border-white/15 bg-gradient-to-r from-[#2b3931] via-[#131b16] to-[#090d0a] shadow-[0_12px_40px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition-[border-radius] duration-300 ${
          isMenuOpen ? "rounded-[1.75rem]" : "rounded-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:px-8 md:py-3">
          <a
            href="#dashboard"
            className="font-display text-xl font-bold tracking-[-0.045em] text-white transition-colors duration-200 hover:text-mint sm:text-2xl md:text-[1.85rem]"
          >
            Shivahari.
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 font-body text-[13px] font-semibold tracking-[0.01em] text-white/75 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-mint after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              aria-pressed={theme === "dark"}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition-all duration-200 hover:border-mint/60 hover:bg-white/10 hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              onClick={() => setTheme((current) => current === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.6 8.6 0 1 0 20.2 15.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5 3v4M14.5 5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              )}
            </button>

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
              className="inline-flex items-center rounded-full border border-mint/80 bg-mint px-4 py-2.5 font-body text-xs font-bold tracking-[0.01em] text-near-black shadow-[0_4px_16px_rgba(183,228,199,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white sm:px-5 sm:text-[13px]"
            >
              Contact
            </a>
          </div>
        </div>

        <nav
          aria-label="Mobile navigation"
          className={`overflow-hidden bg-transparent transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 border-t-transparent opacity-0"
          }`}
        >
          <div className="mx-3 mb-3 flex flex-col gap-1 border-t border-white/10 pt-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 font-body text-sm font-semibold tracking-normal text-white/80 transition-colors duration-200 hover:bg-white/8 hover:text-mint"
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
