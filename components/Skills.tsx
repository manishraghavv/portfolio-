"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Cloud,
  GitBranch,
  TestTube2,
  Wrench,
  Layers,
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
          <span className="text-[11px] font-semibold text-white tracking-wide">BTP Telemetry &amp; CAP Health</span>
        </div>
        <span className="text-[10px] font-mono text-[#00E68A] bg-[#00E68A]/10 border border-[#00E68A]/20 rounded px-1.5 py-0.5">
          99.9% LIVE
        </span>
      </div>

      {/* Animated glass bars */}
      <div className="flex items-end gap-2 h-16 pt-2">
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
              <div className="absolute inset-x-0 top-0 h-1 bg-white/40" />
            </motion.div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-white/[0.04]">
        {["SAP BAS", "Cloud Connector", "SAP CAP (CDS)", "Cloud Foundry"].map((tag) => (
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
            Technical{" "}
            <span
              className="text-[#00E68A]"
              style={{ textShadow: "0 0 35px rgba(0,230,138,0.4)" }}
            >
              Skills
            </span>{" "}
            &amp; Capabilities
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Complete technical stack spanning modern frontend frameworks, scalable backend APIs, SAP BTP enterprise tools, and cloud DevOps.
          </p>
        </motion.div>

        {/* ── Bento Grid encompassing ALL 9 resume skill categories ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">
          {/* 1. Frontend */}
          <BentoCard
            icon={<Monitor className="w-5 h-5" />}
            title="Frontend"
            description="Developing responsive, high-performance user interfaces and component libraries with modern React and Next.js ecosystem."
          >
            <TechPills items={["React.js", "Next.js", "Bootstrap", "Tailwind CSS"]} />
          </BentoCard>

          {/* 2. Backend */}
          <BentoCard
            icon={<Server className="w-5 h-5" />}
            title="Backend"
            description="Engineering resilient server-side services, enterprise business logic, and RESTful/OData communication protocols."
          >
            <TechPills items={["Node.js", "Express.js", "SAP CAP (CDS)", "RESTful/OData Services"]} />
          </BentoCard>

          {/* 3. SAP BTP Tools */}
          <BentoCard
            icon={<Cloud className="w-5 h-5" />}
            title="SAP BTP Tools"
            description="Enterprise cloud application development, secure connectivity, and CAP service orchestration on SAP BTP."
          >
            <TechPills items={["SAP Business Application Studio (BAS)", "SAP Cloud Connector", "SAP CAP"]} />
            <SAPMockup />
          </BentoCard>

          {/* 4. Languages */}
          <BentoCard
            icon={<Code2 className="w-5 h-5" />}
            title="Languages"
            description="Core web and server programming languages used for application scripting, modern DOM structuring, and style rendering."
          >
            <TechPills items={["JavaScript", "Node.js", "HTML", "CSS"]} />
          </BentoCard>

          {/* 5. Database */}
          <BentoCard
            icon={<Database className="w-5 h-5" />}
            title="Database"
            description="Relational and document storage architectures, schema design, data indexing, and migration pipelines."
          >
            <TechPills items={["MySQL", "MongoDB", "PostgreSQL"]} />
          </BentoCard>

          {/* 6. Testing */}
          <BentoCard
            icon={<TestTube2 className="w-5 h-5" />}
            title="Testing"
            description="Comprehensive automated testing suites guaranteeing enterprise reliability, zero regressions, and full coverage."
          >
            <TechPills items={["Jest", "Playwright (E2E Testing)"]} />
          </BentoCard>

          {/* 7. Version Control / DevOps */}
          <BentoCard
            icon={<GitBranch className="w-5 h-5" />}
            title="Version Control / DevOps"
            description="Continuous integration and deployment workflows, containerisation, cluster orchestration, and system observability."
          >
            <TechPills items={["Git", "GitHub", "Docker", "CI/CD Pipelines", "Kubernetes", "Grafana"]} />
          </BentoCard>

          {/* 8. Tools & Platforms */}
          <BentoCard
            icon={<Wrench className="w-5 h-5" />}
            title="Tools &amp; Platforms"
            description="Everyday development environments, API testing clients, and Unix-based server operating system operations."
          >
            <TechPills items={["Postman", "VS Code", "Linux"]} />
          </BentoCard>

          {/* 9. Concepts */}
          <BentoCard
            icon={<Layers className="w-5 h-5" />}
            title="Concepts"
            description="Foundational software patterns, enterprise security practices, multi-tier architectures, and adaptive layout design."
          >
            <TechPills items={[
              "CAP Model",
              "MVC Architecture",
              "JWT Authentication",
              "Cloud Foundry",
              "BTP Security",
              "Responsive Design"
            ]} />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
