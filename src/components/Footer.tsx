/**
 * REPLACE ME — swap these for your real GitHub / LinkedIn / email.
 * Keep this list in sync with the links in the About section.
 */
const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/REPLACE_ME" },
  { label: "LinkedIn", href: "https://linkedin.com/in/REPLACE_ME" },
  { label: "Email", href: "mailto:REPLACE_ME@example.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-grey-700 bg-near-black">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center md:px-10">
        <span className="font-display text-sm text-grey-600 italic">
          Shivahari
        </span>

        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-grey-600 transition-colors hover:text-grey-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="font-mono text-xs text-grey-700">
          © {year} Shivahari
        </span>
      </div>
    </footer>
  );
}
