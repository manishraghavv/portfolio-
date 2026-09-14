"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Building2,
  TestTube2,
} from "lucide-react";
import BentoCard from "./BentoCard";

/* ── Tech icon pill row ───────────────────────────────── */
function TechPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04]
                     px-3 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md
                     hover:border-[#00E68A]/40 hover:text-[#00E68A] transition-all"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/* ── SAP dashboard mini mockup with animated glass bars ───────────────────────── */
function SAPMockup() {
  const bars = [65, 82, 45, 95, 60, 78];

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-4 mt-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00E68A] animate-pulse" />
          <span className="text-[11px] font-semibold text-white tracking-wide">BTP Telemetry & CAP Health</span>
        </div>
        <span className="text-[10px] font-mono text-[#00E68A] bg-[#00E68A]/10 border border-[#00E68A]/20 rounded px-1.5 py-0.5">
          99.9% LIVE
        </span>
      </div>

      {/* Animated glass bars */}
      <div className="flex items-end gap-2 h-20 pt-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full relative group">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full rounded-t-sm relative overflow-hidden"
              style={{
                background:
                  i === 3
                    ? "linear-gradient(180deg, #00E68A 0%, rgba(0, 184, 109, 0.5) 100%)"
                    : "linear-gradient(180deg, rgba(0, 230, 138, 0.6) 0%, rgba(0, 230, 138, 0.15) 100%)",
                boxShadow:
                  i === 3
                    ? "0 0 15px rgba(0, 230, 138, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)"
                    : "inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Top glass reflection on bar */}
              <div className="absolute inset-x-0 top-0 h-1 bg-white/40" />
            </motion.div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-3 pt-2 border-t border-white/[0.04]">
        {["SAP CAP", "Cloud Foundry", "HANA DB", "BAS Studio"].map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium rounded-md px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Skill dot badge row ──────────────────────────────── */
function DotBadges({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/10
                     bg-white/[0.03] backdrop-blur-md px-3 py-1 text-xs text-slate-300
                     hover:border-[#00E68A]/40 hover:text-white transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E68A] shadow-[0_0_6px_#00E68A]" />
          {item}
        </span>
      ))}
    </div>
  );
}

/* ── Main section ─────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Soft Ambient Glow Blobs ─────────────────────── */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 -translate-y-1/2 w-[550px] h-[550px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(0,230,138,0.4) 0%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />
      <div
        className="pointer-events-none absolute right-10 bottom-10 w-[450px] h-[450px] opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Crafting{" "}
            <span
              className="text-[#00E68A]"
              style={{ textShadow: "0 0 35px rgba(0,230,138,0.4)" }}
            >
              Pixel-Perfect
            </span>{" "}
            Experiences
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From high-fidelity React frontends to mission-critical SAP BTP enterprise services —
            architected for performance, security, and enterprise scale.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 auto-rows-auto">
          {/* Card 1 — Frontend */}
          <BentoCard
            icon={<Monitor className="w-5 h-5" />}
            title="Frontend Development"
            description="Crafting responsive, accessible UIs with React, Next.js, Tailwind CSS, and TypeScript. Pixel-perfect at every viewport."
          >
            <TechPills items={["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Shadcn"]} />
          </BentoCard>

          {/* Card 2 — Backend */}
          <BentoCard
            icon={<Server className="w-5 h-5" />}
            title="Backend & APIs"
            description="Building robust REST and OData APIs with Node.js, Express, and SAP CAP. High-throughput data pipelines and secure service layers."
          >
            <TechPills items={["Node.js", "Express", "REST APIs", "OData V4", "PostgreSQL", "Prisma"]} />
          </BentoCard>

          {/* Card 3 — SAP BTP (wide, 2 cols on xl) */}
          <div className="md:col-span-2 xl:col-span-1">
            <BentoCard
              icon={<Building2 className="w-5 h-5" />}
              title="SAP BTP & Enterprise Solutions"
              description="Designing and delivering cloud-native enterprise apps on SAP BTP using CAP framework, Business Application Studio, Cloud Foundry, and Fiori Elements."
              className="h-full"
            >
              <SAPMockup />
            </BentoCard>
          </div>

          {/* Card 4 — DevOps — spans 2 cols on md+ */}
          <div className="md:col-span-2 xl:col-span-3">
            <BentoCard
              icon={<TestTube2 className="w-5 h-5" />}
              title="Testing & DevOps"
              description="End-to-end quality via Jest unit tests, Playwright E2E suites, automated CI/CD pipelines, Docker containerisation, Kubernetes clusters, and Grafana telemetry."
              className="h-full"
            >
              <DotBadges
                items={[
                  "Jest",
                  "Playwright",
                  "Docker",
                  "Kubernetes",
                  "GitHub Actions CI/CD",
                  "Grafana",
                  "Cloud Foundry",
                ]}
              />
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
