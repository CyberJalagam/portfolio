"use client";

import { useEffect, useRef } from "react";

/** What the reticle will lock onto. */
const TARGETS = 'a[href], button, [role="button"], summary';

/** Idle size of the reticle, in px. */
const IDLE = 30;

/** Breathing room around a locked target. */
const PAD = 8;

type Box = { x: number; y: number; w: number; h: number };

/**
 * A reticle that trails the pointer and snaps to whatever it is over. The
 * native cursor is left alone: this sits behind it as ambience rather than
 * replacing it, so text carets and the pointer still read normally.
 *
 * Only mounts for fine pointers, so it never appears on touch.
 */
export function Cursor() {
  const frame = useRef<HTMLDivElement>(null);

  // Read by the animation loop; kept in refs so moving the mouse never
  // triggers a React render.
  const target = useRef<Box>({ x: -100, y: -100, w: IDLE, h: IDLE });
  const current = useRef<Box>({ x: -100, y: -100, w: IDLE, h: IDLE });
  const locked = useRef<Element | null>(null);
  const pointer = useRef({ x: -100, y: -100 });
  const visible = useRef(false);

  useEffect(() => {
    // Coarse pointers get nothing: the frame stays invisible and inert.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Centre the idle reticle on the pointer, or wrap the locked element.
    const measure = () => {
      const el = locked.current;
      if (el && el.isConnected) {
        const r = el.getBoundingClientRect();
        target.current = {
          x: r.left - PAD,
          y: r.top - PAD,
          w: r.width + PAD * 2,
          h: r.height + PAD * 2,
        };
      } else {
        target.current = {
          x: pointer.current.x - IDLE / 2,
          y: pointer.current.y - IDLE / 2,
          w: IDLE,
          h: IDLE,
        };
      }
    };

    const onMove = (e: PointerEvent) => {
      pointer.current = { x: e.clientX, y: e.clientY };
      const hit = (e.target as Element | null)?.closest?.(TARGETS) ?? null;
      locked.current = hit;

      if (!visible.current) {
        visible.current = true;
        // Start from the pointer so it does not fly in from the corner.
        current.current = {
          x: e.clientX - IDLE / 2,
          y: e.clientY - IDLE / 2,
          w: IDLE,
          h: IDLE,
        };
        frame.current?.style.setProperty("opacity", "1");
      }
      measure();
    };

    const onLeave = () => {
      visible.current = false;
      locked.current = null;
      frame.current?.style.setProperty("opacity", "0");
    };

    let raf = 0;
    const tick = () => {
      // Re-measure every frame so a locked target that scrolls or resizes
      // keeps the reticle attached to it.
      if (locked.current) measure();

      const c = current.current;
      const t = target.current;
      // Size eases faster than position, so the snap reads as a lock rather
      // than a drift. Reduced motion skips the easing entirely.
      const ep = reduced ? 1 : 0.18;
      const es = reduced ? 1 : 0.26;

      c.x += (t.x - c.x) * ep;
      c.y += (t.y - c.y) * ep;
      c.w += (t.w - c.w) * es;
      c.h += (t.h - c.h) * es;

      const node = frame.current;
      if (node) {
        node.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
        node.style.width = `${c.w}px`;
        node.style.height = `${c.h}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  // Four corner ticks rather than a ring: crop marks, to match the hairline
  // rules the rest of the page is built from.
  const corner =
    "absolute h-2.5 w-2.5 border-accent transition-colors duration-300";

  return (
    <div
      ref={frame}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[60] opacity-0 transition-opacity duration-300 will-change-transform"
    >
      <span className={`${corner} top-0 left-0 border-t border-l`} />
      <span className={`${corner} top-0 right-0 border-t border-r`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} right-0 bottom-0 border-r border-b`} />
    </div>
  );
}
