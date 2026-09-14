"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Waddaya ITSM Portal",
    description:
      "Enterprise IT service management platform built on SAP BTP. Features ticket management, SLA tracking, approval workflows, and real-time dashboards using SAP CAP and Fiori Elements.",
    techStack: ["SAP CAP", "SAP BTP", "Fiori Elements", "OData V4", "Node.js", "HANA DB"],
    highlight: true,
  },
  {
    title: "SAP ECC → S/4HANA Migration",
    description:
      "Led module-level migration of inventory and procurement processes from legacy SAP ECC to S/4HANA, including ABAP enhancement rewrites, custom Fiori app development, and data migration scripts.",
    techStack: ["SAP S/4HANA", "ABAP", "Fiori", "SAP BAS", "LSMW"],
    highlight: false,
  },
  {
    title: "MDM ERP Platform",
    description:
      "Full-stack ERP system for legal case management and compliance tracking. REST APIs for data synchronisation, role-based access control, and a responsive React dashboard.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "REST API", "TypeScript"],
    highlight: true,
  },
  {
    title: "ITSM Self-Service Portal",
    description:
      "End-user self-service portal for IT support requests, knowledge base search, and asset management. Integrated with SAP BTP destinations and custom CAP service extensions.",
    techStack: ["React", "SAP CAP", "TypeScript", "Playwright", "Jest", "CI/CD"],
    highlight: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Soft Ambient Glow Blobs ─────────────────────── */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(0, 230, 138, 0.4) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="pointer-events-none absolute right-[-5%] top-1/3 w-[400px] h-[400px] opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)",
          filter: "blur(110px)",
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
            Featured{" "}
            <span
              className="text-[#00E68A]"
              style={{ textShadow: "0 0 35px rgba(0,230,138,0.4)" }}
            >
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            SAP BTP enterprise solutions and high-throughput web applications delivering real business value at scale.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
