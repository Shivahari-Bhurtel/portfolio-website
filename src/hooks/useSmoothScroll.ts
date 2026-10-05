import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/** Add gentle native-feeling wheel momentum while preserving normal touch scrolling. */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      syncTouch: false,
      respectReducedMotion: true,
    });

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) {
        return;
      }

      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const targetId = decodeURIComponent(anchor.hash.slice(1));
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", anchor.hash);
      lenis.scrollTo(target, { duration: 1.05 });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);
}
