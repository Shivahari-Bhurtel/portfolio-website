import { useEffect, useRef } from "react";

export default function ForestTorch() {
  const lampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lamp = lampRef.current;
    if (!lamp) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const placeLamp = (x: number, y: number) => {
      const lampSize = lamp.getBoundingClientRect().width;
      lamp.style.transform = `translate3d(${x - lampSize / 2}px, ${y - lampSize / 2}px, 0)`;
    };

    placeLamp(window.innerWidth * 0.5, window.innerHeight * 0.42);

    if (reducedMotion.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      placeLamp(event.clientX, event.clientY);
    };

    const handleTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) placeLamp(touch.clientX, touch.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  return <div ref={lampRef} className="forest-torch" aria-hidden="true" />;
}
