import { useLayoutEffect } from "react";

/** Replay content reveals each time an element enters the viewport. */
export function useScrollReveal() {
  useLayoutEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const animationEndHandlers = new WeakMap<HTMLElement, EventListener>();
    const lastRevealAt = new WeakMap<HTMLElement, number>();
    let lastScrollY = window.scrollY;
    let scrollDirection: "up" | "down" = "down";

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY !== lastScrollY) {
        scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
        lastScrollY = currentScrollY;
      }
    };

    const markVisible = (element: HTMLElement) => {
      element.classList.remove("reveal-pending", "reveal-armed");
      element.classList.add("is-visible");

      const now = performance.now();
      const previousRevealAt = lastRevealAt.get(element);
      if (previousRevealAt !== undefined && now - previousRevealAt < 450) {
        return;
      }
      lastRevealAt.set(element, now);

      const previousHandler = animationEndHandlers.get(element);
      if (previousHandler) {
        element.removeEventListener("animationend", previousHandler);
      }

      element.style.setProperty(
        "--reveal-offset",
        scrollDirection === "down" ? "30px" : "-30px",
      );
      element.classList.add("reveal-animating");

      const handleAnimationEnd: EventListener = (event) => {
        if ((event as AnimationEvent).animationName !== "contentReveal") return;
        element.classList.remove("reveal-animating");
        element.removeEventListener("animationend", handleAnimationEnd);
        animationEndHandlers.delete(element);
      };

      animationEndHandlers.set(element, handleAnimationEnd);
      element.addEventListener("animationend", handleAnimationEnd);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!entry.target.classList.contains("is-visible")) {
              markVisible(entry.target as HTMLElement);
            }
          } else if (entry.target.classList.contains("is-visible")) {
            const element = entry.target as HTMLElement;
            const animationEndHandler = animationEndHandlers.get(element);
            if (animationEndHandler) {
              element.removeEventListener("animationend", animationEndHandler);
              animationEndHandlers.delete(element);
            }
            element.classList.remove("is-visible", "reveal-animating");
            element.classList.add("reveal-pending", "reveal-armed");
          }
        });
      },
      { threshold: 0, rootMargin: "200px 0px 200px 0px" },
    );

    elements.forEach((element) => {
      const bounds = element.getBoundingClientRect();
      const initiallyVisible = bounds.top < window.innerHeight && bounds.bottom > 0;

      if (initiallyVisible) {
        markVisible(element);
      } else {
        element.classList.add("reveal-pending");
      }
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
