"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

const SPRING = { stiffness: 170, damping: 20, mass: 0.4 };

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees — keep it small so text stays readable. */
  max?: number;
  /** How far the card lifts toward the viewer on hover. */
  lift?: number;
};

/**
 * Wraps a card and tilts it toward the cursor, like the product cards on
 * Apple / Vercel. Adds a lift plus a deeper shadow on hover so the card reads
 * as a layer above the page.
 *
 * Tilt only runs for hover-capable fine pointers; touch devices get the lift
 * and shadow change on tap-hover, with no rotation. Pointer position is stored
 * in motion values so hovering never triggers a re-render.
 */
export default function TiltCard({
  children,
  className,
  max = 6,
  lift = 6,
}: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const [canTilt, setCanTilt] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-max, max]), SPRING);
  const rotateX = useSpring(useTransform(pointerY, [-1, 1], [max, -max]), SPRING);

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

  const reset = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    // Perspective must sit on the parent for the child's rotation to read as 3D.
    <div className="h-full [perspective:1200px]">
      <motion.div
        ref={frameRef}
        onPointerMove={canTilt ? handlePointerMove : undefined}
        onPointerLeave={canTilt ? reset : undefined}
        style={canTilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        whileHover={{ y: -lift }}
        transition={SPRING}
        className={cn("h-full transition-shadow duration-500 hover:shadow-elevated-lg", className)}
      >
        {children}
      </motion.div>
    </div>
  );
}
