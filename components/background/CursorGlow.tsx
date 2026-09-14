"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A soft radial glow that trails the cursor. The position is written to CSS
 * custom properties (`--cursor-x` / `--cursor-y`) so the actual painting stays
 * on the compositor and we never re-render React on mouse move.
 *
 * Rendered only on fine-pointer devices without a reduced-motion preference.
 */
export default function CursorGlow() {
  const layerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  // Decide on the client whether the effect should run at all.
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (finePointer && !reduceMotion) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: PointerEvent) => {
      // Throttle updates to one per animation frame.
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        const layer = layerRef.current;
        if (!layer) return;
        layer.style.setProperty("--cursor-x", `${event.clientX}px`);
        layer.style.setProperty("--cursor-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="cursor-glow pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
    />
  );
}
