"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState, MouseEvent } from "react";

interface BentoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  wide?: boolean;
  tall?: boolean;
}

export default function BentoCard({
  icon,
  title,
  description,
  children,
  className = "",
  wide = false,
  tall = false,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`
        relative rounded-2xl border border-white/10 bg-[#121212]/70 backdrop-blur-xl p-7 flex flex-col gap-4 group overflow-hidden
        shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.08)]
        hover:border-[#00E68A]/35 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(0,230,138,0.15),inset_0_1px_0_0_rgba(255,255,255,0.15)]
        transition-all duration-300
        ${wide ? "col-span-2" : ""}
        ${tall ? "row-span-2" : ""}
        ${className}
      `}
    >
      {/* ── Enterprise Interactive Spotlight Overlay ─────── */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 230, 138, 0.08), transparent 70%)`,
        }}
      />

      {/* Subtle top reflection edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent z-10" />

      {/* Icon */}
      <div className="relative z-10 flex items-center gap-3">
        <div
          className="flex items-center justify-center w-11 h-11 rounded-xl border border-[#00E68A]/25
                     bg-white/[0.04] text-[#00E68A] backdrop-blur-md shadow-[0_0_15px_rgba(0,230,138,0.1)]
                     group-hover:border-[#00E68A]/45 group-hover:scale-105 transition-all duration-300"
        >
          {icon}
        </div>
      </div>

      {/* Title + description */}
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed font-normal">{description}</p>
      </div>

      {/* Slot for visual content */}
      {children && <div className="relative z-10 mt-auto pt-2">{children}</div>}
    </motion.div>
  );
}
