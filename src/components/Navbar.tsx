const NAV_LINKS = [
  { label: "About", href: "#dashboard" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-grey-200 bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#dashboard"
          className="font-display text-2xl font-semibold tracking-[-0.04em] text-near-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80 md:text-[2rem]"
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

        <a
          href="mailto:bhurtelshivahari@gmail.com"
          className="inline-flex items-center rounded-full border border-near-black bg-near-black px-4 py-2.5 font-mono text-[10px] font-medium tracking-[0.16em] text-white uppercase transition-all duration-200 hover:bg-white hover:text-near-black md:px-5 md:text-[11px]"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
