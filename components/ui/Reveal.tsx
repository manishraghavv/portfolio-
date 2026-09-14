"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger helper: seconds to wait before animating in. */
  delay?: number;
  /** Direction the element travels from. */
  direction?: Direction;
  duration?: number;
};

/** Offsets the element starts from, per direction. */
const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

/**
 * Wraps content in a fade-up (or directional) scroll reveal.
 * Honours `prefers-reduced-motion` by fading without movement.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const from = reduceMotion ? {} : offsets[direction];

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: 0, y: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
