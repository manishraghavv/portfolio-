"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import GlassCard from "./ui/GlassCard";
import TiltCard from "./ui/TiltCard";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  const timelineRef = useRef<HTMLOListElement>(null);

  // Progress of the timeline through the viewport, smoothed with a spring.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const glowY = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Building enterprise software, e-commerce platforms and performance-tuned backends."
      />

      <div className="relative">
        {/* Timeline rail (desktop: center-left gutter; mobile: far left) */}
        <div className="absolute left-[11px] top-2 h-full w-px bg-white/10 sm:left-[15px] lg:left-[19px]" />
        {/* Animated gradient fill that grows as you scroll */}
        <motion.div
          style={{ scaleY: progress }}
          className="absolute left-[11px] top-2 h-full w-px origin-top bg-gradient-to-b from-violet-400 via-blue-400 to-cyan-400 sm:left-[15px] lg:left-[19px]"
        />
        {/* Travelling glow dot */}
        <motion.div
          style={{ top: glowY }}
          className="absolute left-[11px] hidden h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_4px_rgba(34,211,238,0.55)] sm:left-[15px] sm:block lg:left-[19px]"
        />

        <ol ref={timelineRef} className="space-y-8">
          {experiences.map((job, index) => (
            <li key={job.company} className="relative pl-9 sm:pl-12 lg:pl-16">
              {/* Glass node */}
              <Reveal direction="none" delay={0.05}>
                <span className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md sm:h-8 sm:w-8">
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${job.accent} shadow-[0_0_14px_rgba(139,92,246,0.7)]`}
                  />
                </span>
              </Reveal>

              <Reveal direction="up" delay={index * 0.08}>
                {/* Subtle 3D tilt + lift on hover */}
                <TiltCard>
                  <GlassCard interactive className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                        {job.role}
                      </h3>
                      <p
                        className={`mt-1 bg-gradient-to-r ${job.accent} bg-clip-text text-sm font-medium text-transparent`}
                      >
                        {job.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="glass-pill !py-1 text-slate-200">
                        <Calendar size={12} className="text-cyan-300" />
                        {job.period}
                      </span>
                      <span className="glass-pill !py-1 text-slate-200">
                        <MapPin size={12} className="text-violet-300" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                        <Briefcase
                          size={15}
                          className="mt-0.5 shrink-0 text-slate-500"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  </GlassCard>
                </TiltCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
