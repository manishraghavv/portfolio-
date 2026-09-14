"use client";

import { motion } from "framer-motion";

interface RotatingBadgeProps {
  text?: string;
  size?: number;
}

export default function RotatingBadge({
  text = "AVAILABLE FOR HIRE • FULLSTACK DEVELOPER •",
  size = 110,
}: RotatingBadgeProps) {
  const radius = size / 2 - 12;

  return (
    <div
      className="relative flex items-center justify-center p-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl
                 shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_25px_rgba(0,230,138,0.18),inset_0_1px_0_0_rgba(255,255,255,0.2)]"
      style={{ width: size, height: size }}
    >
      {/* Subtle green ambient ring */}
      <div className="absolute inset-0 rounded-full border border-[#00E68A]/30 pointer-events-none animate-pulse" />

      {/* Rotating text ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <path
              id="circle-path"
              d={`
                M ${size / 2}, ${size / 2}
                m -${radius}, 0
                a ${radius},${radius} 0 1,1 ${radius * 2},0
                a ${radius},${radius} 0 1,1 -${radius * 2},0
              `}
            />
          </defs>
          <text
            className="text-[8.5px] font-semibold tracking-widest fill-slate-300 uppercase"
            style={{ letterSpacing: "2.2px" }}
          >
            <textPath href="#circle-path" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center frosted core */}
      <div
        className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full
                   border border-[#00E68A]/40 bg-black/70 backdrop-blur-md
                   shadow-[0_0_15px_rgba(0,230,138,0.25)]"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="#00E68A"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
