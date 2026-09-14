"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { cn } from "@/lib/cn";

/** Maximum tilt away from flat, in degrees. */
const MAX_TILT = 9;
/** Spring used for the tilt + shadow so movement feels weighted, not twitchy. */
const SPRING = { stiffness: 140, damping: 18, mass: 0.5 };

type TiltImageProps = {
  src: string;
  alt: string;
  /** Show the bottom-right expand button + lightbox. */
  expandable?: boolean;
  priority?: boolean;
  className?: string;
};

/**
 * Portrait image in a 3D frame.
 *
 * Interaction model (deliberately split by device):
 * - Fine pointer + no reduced-motion preference → the frame tilts toward the
 *   cursor (rotateX/rotateY inside a perspective parent) and the drop shadow
 *   slides the opposite way, which is what sells the depth.
 * - Touch devices, or reduced motion → no pointer tracking; instead the frame
 *   drifts on a slow 3.6s translateY loop.
 *
 * The pointer position is written to motion values, never React state, so
 * moving the mouse causes zero re-renders.
 */
export default function TiltImage({
  src,
  alt,
  expandable = true,
  priority = true,
  className,
}: TiltImageProps) {
  const reduceMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const [canTilt, setCanTilt] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Raw normalised pointer position within the frame (-1 … 1).
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-MAX_TILT, MAX_TILT]), SPRING);
  const rotateX = useSpring(useTransform(pointerY, [-1, 1], [MAX_TILT, -MAX_TILT]), SPRING);

  // Shadow travels opposite the tilt direction to reinforce the illusion.
  const shadowX = useSpring(useTransform(rotateY, [-MAX_TILT, MAX_TILT], [28, -28]), SPRING);
  const shadowY = useSpring(useTransform(rotateX, [-MAX_TILT, MAX_TILT], [-16, 16]), SPRING);

  // Portal target only exists on the client.
  useEffect(() => setMounted(true), []);

  // Enable tilt only on a hover-capable fine pointer.
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanTilt(query.matches && !reduceMotion);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [reduceMotion]);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const rect = frameRef.current?.getBoundingClientRect();
      if (!rect) return;
      pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
      pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
    },
    [pointerX, pointerY],
  );

  const resetTilt = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  // Close the lightbox on Escape and lock background scroll while it is open.
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <div className={cn("group relative", className)}>
      {/* Perspective lives on the parent: an element's own `perspective` only
          applies to its children, so the tilt needs this wrapper.
          On touch devices (no tilt) this same wrapper runs the slow float. */}
      <motion.div
        animate={canTilt ? { y: 0 } : { y: [0, -10, 0] }}
        transition={
          canTilt
            ? { duration: 0.4, ease: "easeOut" }
            : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
        }
        className="relative [perspective:1400px]"
      >
        {/* Depth bloom behind the frame */}
        <div
          aria-hidden="true"
          className="absolute -inset-6 -z-20 rounded-[3rem] bg-gradient-to-br from-violet-600/30 via-blue-600/15 to-cyan-400/30 blur-3xl"
        />

        {/* Drop shadow — slides opposite the tilt */}
        <motion.div
          aria-hidden="true"
          style={{ x: shadowX, y: shadowY }}
          className="absolute inset-x-8 bottom-0 top-10 -z-10 rounded-[2.5rem] bg-black/60 blur-3xl transition-opacity duration-500"
        />

        <motion.div
          ref={frameRef}
          onPointerMove={canTilt ? handlePointerMove : undefined}
          onPointerLeave={canTilt ? resetTilt : undefined}
          style={canTilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#101014] shadow-elevated transition-shadow duration-500 group-hover:shadow-elevated-lg"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 88vw, 440px"
            className="object-cover object-top"
          />

          {/* Rim light: a crisp highlight on the right edge plus a soft bloom,
              imitating a studio light raking across the subject. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-[3px] bg-gradient-to-b from-violet-400/0 via-cyan-300/90 to-blue-500/0"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-10 right-0 w-20 bg-gradient-to-l from-cyan-400/25 via-violet-500/10 to-transparent blur-2xl"
          />

          {/* Bottom scrim so the expand button always has contrast */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent"
          />

          {expandable ? (
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label="Expand profile photo"
              className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-md transition-all duration-300 ease-out hover:scale-110 hover:border-white/30 hover:bg-black active:scale-95"
            >
              <Maximize2 size={16} />
            </button>
          ) : null}
        </motion.div>
      </motion.div>

      {/* Lightbox is portalled to <body>: an ancestor with `perspective` or a
          transform would otherwise become its containing block and clip it. */}
      {mounted
        ? createPortal(
            <AnimatePresence>
              {lightboxOpen ? (
                <motion.div
                  key="lightbox"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Profile photo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setLightboxOpen(false)}
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
                >
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0, y: 12 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 8 }}
                    transition={{ type: "spring", stiffness: 240, damping: 26 }}
                    onClick={(event) => event.stopPropagation()}
                    className="relative"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={900}
                      height={1110}
                      sizes="(max-width: 768px) 92vw, 900px"
                      className="h-auto max-h-[86vh] w-auto rounded-3xl border border-white/10 object-contain shadow-elevated-lg"
                    />

                    <button
                      type="button"
                      onClick={() => setLightboxOpen(false)}
                      aria-label="Close"
                      autoFocus
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black"
                    >
                      <X size={16} />
                    </button>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
