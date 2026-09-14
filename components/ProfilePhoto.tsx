"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type ProfilePhotoProps = {
  /** Rendered diameter in CSS pixels (Next/Image width & height). */
  size?: number;
  className?: string;
};

/**
 * Circular profile photo in a glassmorphic frame.
 *
 * Layering, back to front:
 *   1. Blurred colour halo that breathes (animate-pulse-glow, 4s)
 *   2. Slowly rotating conic-gradient ring (the coloured "glow border")
 *   3. Frosted glass ring — 1px semi-transparent border + backdrop blur
 *   4. The image, clipped to a circle
 *
 * The subtle float and the hover scale are both driven by Framer Motion, so
 * they compose on one transform instead of fighting a CSS `hover:scale-*`.
 *
 * The source photo is a portrait (1918×2366), so `object-cover object-top`
 * keeps the head and shoulders in frame; the slight `scale-[1.18]` tightens
 * the crop so the face reads clearly at avatar size.
 */
export default function ProfilePhoto({ size = 250, className }: ProfilePhotoProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      // Gentle 4px float so the portrait feels alive rather than static.
      animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      className={`group relative shrink-0 ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      {/* 1. Colour halo behind the photo */}
      <div
        aria-hidden="true"
        className="absolute -inset-7 rounded-full bg-gradient-to-br from-violet-500/70 via-fuchsia-500/45 to-cyan-400/70 blur-3xl animate-pulse-glow"
      />

      {/* 2. Rotating gradient ring — the glowing border wrapping the glass ring */}
      <div
        aria-hidden="true"
        className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#e879f9,#22d3ee,#a855f7,#8b5cf6)] opacity-80 blur-[2px] animate-spin-slow transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* 3. Frosted glass ring */}
      <div
        aria-hidden="true"
        className="absolute -inset-[1px] rounded-full border border-white/25 bg-white/[0.06] backdrop-blur-xl transition-colors duration-500 group-hover:border-white/40"
      />

      {/* 4. Photo (padded so the glass ring shows through as a frosted border).
             Scaling happens on the frame, not here, so the rings stay visible. */}
      <div className="relative h-full w-full overflow-hidden rounded-full p-1.5">
        <Image
          src="/mr.jpeg"
          alt="Manish Raghav — Fullstack Developer"
          width={size}
          height={size}
          priority
          className="h-full w-full scale-[1.18] origin-top rounded-full object-cover object-top"
        />
      </div>
    </motion.div>
  );
}
