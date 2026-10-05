import SectionHeading from "../components/SectionHeading";

const ABOUT_LINKS = [
  { label: "GitHub", href: "https://github.com/Shivahari-Bhurtel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivahari-bhurtel-886118359/" },
  { label: "Email", href: "mailto:bhurtelshivahari@gmail.com" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function About() {
  return (
    <section id="about" className="bg-near-black min-h-screen">
      <div className="section-panel mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 md:px-10 md:py-36">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          <SectionHeading label="05 — About" title="" />

          <div
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-7" data-reveal>
              <div className="max-w-3xl space-y-5">
                <p className="text-lg leading-relaxed text-grey-300 md:text-2xl md:leading-[1.7]">
                  I’m Shivahari, and I like building things that make technology feel less
                  abstract and more useful. The best products are not just smart — they are
                  thoughtful, clear, and designed for the people using them.
                </p>

                <p className="text-base leading-relaxed text-grey-400 md:text-xl md:leading-[1.8]">
                  My interest sits at the intersection of AI, software, and human-centered
                  problem solving. I enjoy building systems that turn ideas into real-world
                  experiences, whether that means intelligent tools, smooth interfaces, or
                  products that quietly make life better.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-grey-700 pt-5" data-reveal>
              {ABOUT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="inline-flex items-center justify-center rounded-full border border-grey-600 bg-transparent px-4 py-2.5 font-mono text-[10px] font-medium tracking-[0.16em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-near-black"
                >
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