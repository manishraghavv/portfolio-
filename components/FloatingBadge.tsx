"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingBadgeProps {
  icon: LucideIcon;
  label?: string;
  className?: string;
  animationClass?: string;
  delay?: number;
}

export default function FloatingBadge({
  icon: Icon,
  label,
  className = "",
  animationClass = "animate-float",
  delay = 0,
}: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="group relative flex flex-col items-center justify-center gap-1 w-14 h-14 rounded-full
                   border border-white/20 bg-white/[0.05] backdrop-blur-md
                   shadow-[0_12px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(0,230,138,0.12),inset_0_1px_0_0_rgba(255,255,255,0.25)]
                   hover:border-[#00E68A]/50 hover:bg-white/[0.09] hover:shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(0,230,138,0.3),inset_0_1px_0_0_rgba(255,255,255,0.4)]
                   transition-all duration-300 cursor-default"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
        <Icon className="relative z-10 w-6 h-6 text-[#00E68A] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
        {label && (
          <span className="absolute -bottom-6 text-[10px] font-medium text-slate-300 bg-black/60 px-2 py-0.5 rounded-full border border-white/10 backdrop-blur-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
        )}
      </div>
    </motion.div>
  );
}
