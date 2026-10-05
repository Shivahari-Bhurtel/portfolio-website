import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const PROFILE_IMAGE_SRC = "/images/profile/shivahari.png";

const DASHBOARD_LINKS = [
  { label: "GitHub", href: "https://github.com/Shivahari-Bhurtel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivahari-bhurtel-886118359/" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function Dashboard() {
  const prefersReducedMotion = useReducedMotion();
  const portraitVideoRef = useRef<HTMLVideoElement>(null);
  const portraitCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = portraitVideoRef.current;
    const canvas = portraitCanvasRef.current;
    const context = canvas?.getContext("2d", { willReadFrequently: true });
    if (!video || !canvas || !context) return;

    let animationRequest: number | null = null;
    let videoFrameRequest: number | null = null;
    let backgroundMask = new Uint8Array(0);
    let floodQueue = new Int32Array(0);

    const isBackgroundPixel = (pixels: Uint8ClampedArray, pixelIndex: number) => {
      const red = pixels[pixelIndex];
      const green = pixels[pixelIndex + 1];
      const blue = pixels[pixelIndex + 2];
      return (
        Math.max(red, green, blue) > 220 &&
        Math.max(red, green, blue) - Math.min(red, green, blue) < 20
      );
    };

    const renderKeyedFrame = () => {
      animationRequest = null;
      videoFrameRequest = null;
      if (
        document.documentElement.dataset.theme !== "dark" ||
        video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ||
        !video.videoWidth ||
        !video.videoHeight
      ) {
        return;
      }

      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = context.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = frame.data;
      const pixelCount = canvas.width * canvas.height;

      if (backgroundMask.length !== pixelCount) {
        backgroundMask = new Uint8Array(pixelCount);
        floodQueue = new Int32Array(pixelCount);
      } else {
        backgroundMask.fill(0);
      }

      let queueStart = 0;
      let queueEnd = 0;
      const enqueueBackground = (pixelIndex: number) => {
        if (backgroundMask[pixelIndex] || !isBackgroundPixel(pixels, pixelIndex * 4)) return;
        backgroundMask[pixelIndex] = 1;
        floodQueue[queueEnd++] = pixelIndex;
      };

      for (let x = 0; x < canvas.width; x += 1) {
        enqueueBackground(x);
        enqueueBackground((canvas.height - 1) * canvas.width + x);
      }
      for (let y = 1; y < canvas.height - 1; y += 1) {
        enqueueBackground(y * canvas.width);
        enqueueBackground(y * canvas.width + canvas.width - 1);
      }

      while (queueStart < queueEnd) {
        const pixelIndex = floodQueue[queueStart++];
        const x = pixelIndex % canvas.width;
        if (x > 0) enqueueBackground(pixelIndex - 1);
        if (x < canvas.width - 1) enqueueBackground(pixelIndex + 1);
        if (pixelIndex >= canvas.width) enqueueBackground(pixelIndex - canvas.width);
        if (pixelIndex < pixelCount - canvas.width) enqueueBackground(pixelIndex + canvas.width);
      }

      for (let index = 0; index < pixels.length; index += 4) {
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const lightest = Math.max(red, green, blue);
        const darkest = Math.min(red, green, blue);
        const pixelIndex = index / 4;

        if (backgroundMask[pixelIndex]) {
          pixels[index + 3] = 0;
          continue;
        }

        const x = pixelIndex % canvas.width;
        const y = Math.floor(pixelIndex / canvas.width);
        let touchesBackground = false;
        for (let offsetY = -1; offsetY <= 1 && !touchesBackground; offsetY += 1) {
          for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
            const neighborX = x + offsetX;
            const neighborY = y + offsetY;
            if (
              (offsetX || offsetY) &&
              neighborX >= 0 && neighborX < canvas.width &&
              neighborY >= 0 && neighborY < canvas.height &&
              backgroundMask[neighborY * canvas.width + neighborX]
            ) {
              touchesBackground = true;
              break;
            }
          }
        }

        if (touchesBackground && lightest > 190 && lightest - darkest < 24) {
          const edgeAlpha = Math.max(0, Math.min(1, (232 - lightest) / 42));
          pixels[index + 3] = Math.round(pixels[index + 3] * edgeAlpha);
        }

        pixels[index] = Math.round(255 * (red / 255) ** 0.9);
        pixels[index + 1] = Math.round(255 * (green / 255) ** 0.9);
        pixels[index + 2] = Math.round(255 * (blue / 255) ** 0.9);
      }

      context.putImageData(frame, 0, 0);
      scheduleNextFrame();
    };

    const scheduleNextFrame = () => {
      if (
        document.documentElement.dataset.theme !== "dark" ||
        animationRequest !== null ||
        videoFrameRequest !== null
      ) {
        return;
      }

      if (typeof video.requestVideoFrameCallback === "function") {
        videoFrameRequest = video.requestVideoFrameCallback(renderKeyedFrame);
      } else {
        animationRequest = window.requestAnimationFrame(renderKeyedFrame);
      }
    };

    const handleThemeChange = () => {
      if (document.documentElement.dataset.theme === "dark") {
        scheduleNextFrame();
        return;
      }

      if (animationRequest !== null) {
        window.cancelAnimationFrame(animationRequest);
        animationRequest = null;
      }
      if (videoFrameRequest !== null && typeof video.cancelVideoFrameCallback === "function") {
        video.cancelVideoFrameCallback(videoFrameRequest);
        videoFrameRequest = null;
      }
    };

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    video.addEventListener("playing", scheduleNextFrame);
    video.addEventListener("loadeddata", scheduleNextFrame);
    scheduleNextFrame();

    return () => {
      themeObserver.disconnect();
      video.removeEventListener("playing", scheduleNextFrame);
      video.removeEventListener("loadeddata", scheduleNextFrame);
      if (animationRequest !== null) window.cancelAnimationFrame(animationRequest);
      if (videoFrameRequest !== null && typeof video.cancelVideoFrameCallback === "function") {
        video.cancelVideoFrameCallback(videoFrameRequest);
      }
    };
  }, []);

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
              className="font-body text-sm font-bold tracking-[0.08em] text-forest uppercase sm:text-base"
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
                  className="inline-flex items-center justify-center rounded-full border border-near-black bg-near-black px-3.5 py-2.5 font-body text-xs font-semibold tracking-[0.02em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-white sm:px-4 sm:text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-forest bg-forest px-3.5 py-2.5 font-body text-xs font-semibold tracking-[0.02em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-near-black hover:bg-near-black sm:px-4 sm:text-sm"
              >
                Let’s talk
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className={`hero-portrait-frame ${prefersReducedMotion ? "" : "hero-portrait-blend"} relative mx-auto flex w-full max-w-[360px] items-center justify-center pt-6 md:max-w-[480px] lg:mx-0 lg:ml-auto lg:justify-end xl:max-w-[580px]`}
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