"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Cloud,
  Figma,
  FileDown,
  Briefcase,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import FloatingBadge from "./FloatingBadge";
import RotatingBadge from "./RotatingBadge";

const TECH_STACK = [
  { label: "React.js" },
  { label: "Next.js" },
  { label: "Node.js" },
  { label: "SAP CAP" },
  { label: "PostgreSQL" },
  { label: "JavaScript" },
];

const MARQUEE_LOGOS = [
  { name: "SAP BTP" },
  { name: "SAP CAP (CDS)" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "Jest" },
  { name: "Playwright" },
  { name: "Linux" },
];

const FLOATING_BADGES = [
  { icon: Figma, animation: "animate-float", delay: 0, position: "top-[6%] -left-3 sm:-left-5" },
  { icon: Code2, animation: "animate-float-2", delay: 0.4, position: "top-[22%] -right-3 sm:-right-5" },
  { icon: Database, animation: "animate-float-3", delay: 0.8, position: "bottom-[28%] -left-3 sm:-left-4" },
  { icon: Cloud, animation: "animate-float", delay: 1.2, position: "bottom-[14%] -right-3 sm:-right-4" },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  // ── Mouse-tilt 3D interaction for Profile Image ──
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 28 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 28 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-28 pb-16 md:pt-36 md:pb-20"
    >
      {/* ── Soft Ambient Glow Blobs ─────────────────────── */}
      <div
        className="pointer-events-none absolute right-0 top-10 w-[600px] h-[600px] opacity-25"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(0, 230, 138, 0.3) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-[-5%] top-1/4 w-[450px] h-[450px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />
      <div
        className="pointer-events-none absolute right-[15%] bottom-10 w-[350px] h-[350px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(0, 230, 138, 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="section-container flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-12 w-full my-auto">
        {/* ── LEFT — Text content (40%) ──────────────────── */}
        <div className="flex-1 lg:max-w-[46%] flex flex-col justify-center gap-6 z-10 order-2 lg:order-1">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-4 py-2 text-xs font-semibold text-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E68A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E68A]" />
              </span>
              <span>Fullstack Developer • Noida, India</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-white"
          >
            Meet the Expert{" "}
            <span
              className="text-[#00E68A] relative inline-block"
              style={{ textShadow: "0 0 40px rgba(0,230,138,0.4)" }}
            >
              Fullstack Developer
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            I build scalable web apps and enterprise solutions using React,
            Next.js, Node.js, and SAP BTP technologies.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="btn-green flex items-center gap-2.5 text-sm font-bold tracking-tight"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white shrink-0 shadow-sm">
                <ArrowRight className="w-3.5 h-3.5 text-[#0A0A0A]" />
              </span>
              Explore Projects
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-outline text-sm font-semibold tracking-tight"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {TECH_STACK.map((tech) => (
              <span
                key={tech.label}
                className="inline-flex items-center rounded-full border border-white/10
                           bg-white/[0.03] backdrop-blur-md px-3 py-1.5 text-xs font-medium text-slate-300
                           hover:border-[#00E68A]/40 hover:text-[#00E68A] hover:bg-white/[0.06] transition-all"
              >
                {tech.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — Fully Rounded Profile Container with 3D Tilt & Floating Badges ── */}
        <div className="flex-1 relative flex items-center justify-center lg:justify-end order-1 lg:order-2 py-4">
          <div
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            {/* ── Floating Icon Badges positioned naturally along the rounded border ── */}
            {FLOATING_BADGES.map((badge) => (
              <div key={badge.position} className={`absolute z-30 ${badge.position}`}>
                <FloatingBadge
                  icon={badge.icon}
                  animationClass={badge.animation}
                  delay={badge.delay}
                />
              </div>
            ))}

            {/* ── Rotating Badge at Bottom-Right ── */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 z-30">
              <RotatingBadge size={110} />
            </div>

            {/* ── 3D Tilting Image Frame ── */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] select-none"
            >
              {/* Soft ambient glow blob behind the entire image container */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-40 blur-3xl -z-10"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0, 230, 138, 0.5) 0%, rgba(34, 211, 238, 0.2) 60%, transparent 80%)",
                }}
              />

              {/* Generous 4-corner rounded image container with vignette & border */}
              <div
                className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/15 bg-[#141414]
                           shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(0,230,138,0.12),inset_0_1px_0_0_rgba(255,255,255,0.2)]"
              >
                <Image
                  src="/mr.jpeg"
                  alt="Manish Raghav"
                  width={480}
                  height={580}
                  className="w-full h-auto object-cover object-top aspect-[4/5] sm:aspect-[4.1/5] transform transition-transform duration-500 hover:scale-105"
                  priority
                />

                {/* Subtle edge vignette & inner shadow for seamless dark theme integration */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_50px_rgba(0,0,0,0.7)]"
                />

                {/* Bottom subtle gradient fade to anchor portrait cleanly */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/30 to-transparent" />

                {/* Top glass reflection highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Enterprise Glass Stat Card & Reliability Micro-Stats ─── */}
      <div className="section-container mt-10 lg:mt-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl border border-white/15 bg-[#121212]/60 backdrop-blur-2xl shadow-[0_16px_45px_rgba(0,0,0,0.7),0_0_30px_rgba(0,230,138,0.1),inset_0_1px_0_0_rgba(255,255,255,0.15)]"
        >
          {/* Main profile stat */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full shrink-0 overflow-hidden border-2 p-0.5"
              style={{ borderColor: "#00E68A", boxShadow: "0 0 15px rgba(0,230,138,0.3)" }}
            >
              <Image
                src="/mr.jpeg"
                alt="Manish Raghav"
                width={48}
                height={48}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="min-w-[120px]">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold text-white tracking-tight">2+</span>
                <span className="text-[#00E68A] text-sm font-bold flex items-center">
                  <TrendingUp className="w-4 h-4" />
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Years Experience</p>
            </div>
          </div>

          {/* Micro-stats: Enterprise Reliability */}
          <div className="hidden sm:flex items-center gap-3 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-5">
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-[#00E68A]" />
              <div className="text-left">
                <p className="text-xs font-bold text-white leading-none">Enterprise Projects</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Delivered on Time</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
              <Briefcase className="w-4 h-4 text-[#00E68A]" />
              <div className="text-left">
                <p className="text-xs font-bold text-white leading-none">3 Organizations</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Waddaya, Ramaera, Keen &amp; Able</p>
              </div>
            </div>
          </div>

          {/* Resume / CV CTA */}
          <div className="flex items-center justify-end">
            <a
              href="#contact"
              onClick={() => scrollTo("#contact")}
              className="btn-green flex items-center justify-center gap-2 !py-2.5 !px-5 text-xs font-bold tracking-tight w-full sm:w-auto"
            >
              <FileDown className="w-4 h-4" />
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Enterprise Trust Marquee / Logo Strip ─────────── */}
      <div className="w-full mt-12 pt-6 border-t border-white/[0.06] overflow-hidden">
        <div className="section-container mb-3 flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            Resume Technical Stack &amp; Cloud Platforms
          </p>
          <span className="hidden md:inline-block text-[11px] text-[#00E68A] font-mono">
            SAP BTP • Next.js • Node.js • PostgreSQL
          </span>
        </div>

        {/* Auto-scrolling logo strip */}
        <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex items-center gap-3 whitespace-nowrap py-1"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((item, idx) => (
              <span
                key={`${item.name}-${idx}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-slate-400 backdrop-blur-md hover:text-[#00E68A] hover:border-[#00E68A]/30 hover:bg-white/[0.06] transition-all cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E68A]/60" />
                {item.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
