import { motion, useReducedMotion } from "motion/react";

const PROFILE_IMAGE_SRC = "/images/profile/shivahari.png";

const DASHBOARD_LINKS = [
  { label: "GitHub", href: "https://github.com/Shivahari-Bhurtel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivahari-bhurtel-886118359/" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function Dashboard() {
  const prefersReducedMotion = useReducedMotion();

  function handlePortraitPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${-pointerY * 10}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${pointerX * 12}deg`);
  }

  function resetPortraitTilt(event: React.PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <section
      id="dashboard"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-warm-white pt-12 text-near-black sm:pt-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-grey-200/50 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-mint/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-10">
        <div className="grid items-center gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
          <motion.div
            className="hero-copy flex flex-col gap-5 sm:gap-7"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
          >
            <motion.span
              className="font-mono text-[9px] font-medium tracking-[0.16em] text-forest uppercase sm:text-[10px]"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: "easeOut" },
                },
              }}
            >
              AI Engineer
            </motion.span>

            <motion.div
              className="space-y-2"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.86] font-black tracking-[-0.05em] text-near-black">
                Hi, I'm
                <br />
                <span className="not-italic">Shiv.</span>
              </h1>
            </motion.div>

            <motion.p
              className="max-w-xl text-sm leading-relaxed text-grey-600 sm:text-base md:text-lg"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              I build thoughtful software, useful AI experiences, and practical ideas
              that feel human — not just clever. If it helps people, I’m in.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-2.5 pt-1 sm:gap-3 sm:pt-2"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              {DASHBOARD_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="inline-flex items-center justify-center rounded-full border border-grey-300 bg-white px-3.5 py-2.5 font-mono text-[9px] font-medium tracking-[0.14em] text-near-black uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-white sm:px-4 sm:text-[10px]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-forest bg-forest px-3.5 py-2.5 font-mono text-[9px] font-medium tracking-[0.14em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-near-black hover:bg-near-black sm:px-4 sm:text-[10px]"
              >
                Let’s talk
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-portrait-frame relative flex items-center justify-center md:justify-end"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 32, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          >
            <motion.div
              className="hero-portrait-float"
              animate={prefersReducedMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="hero-portrait-stage"
                onPointerMove={handlePortraitPointerMove}
                onPointerLeave={resetPortraitTilt}
              >
                <img
                  src={PROFILE_IMAGE_SRC}
                  alt="Shivahari"
                  className="hero-portrait block h-[clamp(260px,68vw,420px)] w-[clamp(260px,68vw,420px)] object-cover object-center"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-grey-200" />
    </section>
  );
}