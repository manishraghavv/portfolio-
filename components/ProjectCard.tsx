"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight?: boolean;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  highlight = false,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="dark-card p-7 flex flex-col gap-4 group h-full relative"
    >
      {/* Top light reflection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div>
          {highlight && (
            <span className="inline-flex items-center mb-2.5 rounded-full bg-[#00E68A]/10 border border-[#00E68A]/30 px-3 py-0.5 text-[10px] font-bold text-[#00E68A] uppercase tracking-wider shadow-[0_0_10px_rgba(0,230,138,0.15)]">
              Enterprise Featured
            </span>
          )}
          <h3 className="text-white font-bold text-lg leading-snug tracking-tight group-hover:text-white transition-colors">
            {title}
          </h3>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 shrink-0">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center
                         text-slate-400 hover:text-[#00E68A] hover:border-[#00E68A]/40 hover:bg-white/[0.08] transition-all backdrop-blur-md"
              aria-label="View Project Source Code"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center
                         text-slate-400 hover:text-[#00E68A] hover:border-[#00E68A]/40 hover:bg-white/[0.08] transition-all backdrop-blur-md"
              aria-label="View Live Deployment"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1 font-normal">{description}</p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="tech-pill"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
