import { useEffect, useRef } from "react";

/**
 * Lightweight Apple-style custom cursor: solid dot + lagging ring.
 * Uses transform (GPU) instead of left/top to avoid scroll-jank reflows.
 * Hides automatically on touch devices and coarse pointers.
 */
export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let rafId = 0;
    let dirty = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dirty = true;
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dirty || Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1) {
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        }
        dirty = false;
      }
      rafId = requestAnimationFrame(tick);
    };

    let hoverState = false;
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = !!t.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-grow"
      );
      if (interactive !== hoverState) {
        hoverState = interactive;
        dotRef.current?.classList.toggle("is-hover", interactive);
        ringRef.current?.classList.toggle("is-hover", interactive);
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ left: 0, top: 0, willChange: "transform" }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ left: 0, top: 0, willChange: "transform" }}
        aria-hidden
      />
    </>
  );
};
