export default function About() {
  return (
    <section id="about" className="bg-near-black min-h-screen">
      <div className="section-panel mx-auto w-full max-w-[1200px] px-4 pt-6 pb-20 sm:px-6 md:px-10 md:pt-12 md:pb-36">
        <div className="max-w-4xl" data-reveal>
          <h2 className="font-display text-[clamp(2.4rem,8vw,4.5rem)] font-black leading-[0.98] tracking-[-0.05em] text-white">
            About
          </h2>
          <div className="mt-10 max-w-3xl space-y-6 md:mt-14">
            <p className="text-xl leading-relaxed text-grey-200 md:text-3xl md:leading-[1.45]">
              I’m Shivahari, an AI engineer who enjoys turning difficult ideas into
              simple, useful experiences.
            </p>
            <p className="text-base leading-relaxed text-grey-400 md:text-xl md:leading-[1.8]">
              I work across software, AI, and product design, with a focus on building
              tools that feel clear, capable, and genuinely helpful. I care about the
              details that make technology easier to understand and better to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}