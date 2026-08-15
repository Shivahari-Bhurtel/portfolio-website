import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#dashboard" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

/** Tracks which section is currently in view, so we can highlight its nav link. */
function useActiveSection() {
  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-warm-white/90 backdrop-blur-md border-grey-200"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6 md:px-10">
        <a
          href="#dashboard"
          className="font-display text-sm font-medium tracking-[0.2em] uppercase text-near-black"
        >
          Shivahari
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`border-b pb-0.5 font-mono text-xs tracking-[0.1em] uppercase transition-colors ${
                    isActive
                      ? "border-brown text-brown"
                      : "border-transparent text-grey-500 hover:text-near-black"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-px w-5 bg-near-black transition-transform duration-200 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-near-black transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-5 bg-near-black transition-transform duration-200 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-grey-200 bg-warm-white md:hidden">
          <ul className="mx-auto flex max-w-[1200px] flex-col gap-5 px-6 py-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm tracking-wider uppercase text-grey-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
