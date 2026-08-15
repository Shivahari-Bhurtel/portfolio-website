const PROFILE_IMAGE_SRC = "/images/profile/shivahari.png";

const DASHBOARD_LINKS = [
  { label: "GitHub", href: "https://github.com/Shivahari-Bhurtel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivahari-bhurtel-886118359/" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-warm-white pt-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-grey-200/70 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-grey-300/60 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="grid items-center gap-12 py-16 md:grid-cols-[1.15fr_1fr] md:gap-16 md:py-24">
          <div
            className="flex flex-col gap-7"
            style={{ animation: "fadeInLeft 0.7s ease-out both" }}
          >
            <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-grey-600 uppercase">
              AI Engineer
            </span>

            <div className="space-y-2">
              <h1 className="font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.85] font-black tracking-[-0.05em] text-near-black">
                Hi, I'm
                <br />
                <span className="not-italic">Shiv.</span>
              </h1>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-grey-600 md:text-lg">
              I build thoughtful software, useful AI experiences, and practical ideas
              that feel human — not just clever. If it helps people, I’m in.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {DASHBOARD_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="inline-flex items-center justify-center rounded-full border border-grey-300 bg-white/90 px-4 py-2.5 font-mono text-[10px] font-medium tracking-[0.16em] text-near-black uppercase shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-near-black hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className="relative flex items-center justify-center md:justify-end"
            style={{ animation: "fadeInUp 0.9s ease-out both" }}
          >
            <img
              src={PROFILE_IMAGE_SRC}
              alt="Shivahari"
              className="block h-[clamp(320px,32vw,420px)] w-[clamp(320px,32vw,420px)] rounded-[2rem] object-cover object-center shadow-[0_30px_80px_rgba(0,0,0,0.10)] transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-grey-200" />
    </section>
  );
}