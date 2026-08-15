import SectionHeading from "../components/SectionHeading";

const ABOUT_LINKS = [
  { label: "GitHub", href: "https://github.com/Shivahari-Bhurtel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivahari-bhurtel-886118359/" },
  { label: "Email", href: "mailto:bhurtelshivahari@gmail.com" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function About() {
  return (
    <section id="about" className="bg-near-black">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          <SectionHeading label="05 — About" title="" />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-light tracking-[-0.01em] text-off-white">
                I'm Shivahari.
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-grey-400 md:text-lg">
                I'm an AI-focused student building my foundation in machine
                learning, deep learning, and computer vision. I enjoy turning
                what I learn into practical projects and continuously improving
                through hands-on experimentation.
              </p>

              <p className="max-w-xl text-base leading-relaxed text-grey-400 md:text-lg">
                Currently, I'm focused on strengthening my Python and machine
                learning skills while exploring AI engineering and modern
                software development.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 border-t border-grey-700 pt-4">
              {ABOUT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="group flex items-center gap-2 font-mono text-xs tracking-wider text-off-white uppercase transition-colors hover:text-brown-light"
                >
                  <span className="inline-block h-px w-4 bg-current transition-all duration-300 group-hover:w-6" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}