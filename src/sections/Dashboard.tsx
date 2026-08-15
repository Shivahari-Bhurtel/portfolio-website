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
      className="flex min-h-screen flex-col justify-center bg-warm-white pt-14"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="grid items-end gap-16 py-20 md:grid-cols-[1fr_auto] md:gap-24 md:py-32">
          <div className="flex flex-col gap-8">
            <span className="font-mono text-xs tracking-[0.18em] text-brown uppercase">
              AI / ML Student
            </span>

            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] leading-none font-light tracking-[-0.02em] text-near-black">
              Shiva
              <br />
              <span className="italic">hari.</span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-grey-500 md:text-lg">
              Building practical projects in machine learning, deep learning,
              and computer vision while developing toward an AI engineering
              career.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              {DASHBOARD_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="group flex items-center gap-2 font-mono text-xs tracking-wider text-near-black uppercase"
                >
                  <span className="inline-block h-px w-4 bg-current transition-all duration-300 group-hover:w-6" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <img
              src={PROFILE_IMAGE_SRC}
              alt="Shivahari"
              className="block aspect-3/4 w-[clamp(180px,22vw,300px)] object-cover object-top"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 pb-10 text-grey-400">
          <div className="h-12 w-px bg-grey-300" />
          <span className="font-mono text-xs tracking-[0.15em] uppercase">
            Scroll
          </span>
        </div>
      </div>

      <div className="border-t border-grey-200" />
    </section>
  );
}