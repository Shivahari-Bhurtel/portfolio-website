const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/Shivahari-Bhurtel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivahari-bhurtel-886118359/" },
  { label: "Email", href: "mailto:bhurtelshivahari@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-grey-700 bg-near-black">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center md:px-10">
        <a
          href="#dashboard"
          className="font-display text-sm font-bold text-white not-italic transition-colors hover:text-grey-300"
        >
          Shivahari.
        </a>

        <div className="flex flex-wrap items-center gap-5">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] tracking-[0.14em] text-grey-400 uppercase transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="font-mono text-[10px] tracking-[0.12em] text-grey-500 uppercase">
          Shivahari
        </span>
      </div>
    </footer>
  );
}
