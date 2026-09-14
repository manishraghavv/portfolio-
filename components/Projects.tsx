"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Waddaya ITSM",
    description: [
      "Building a cloud-native IT Service Management app on SAP BTP using SAP CAP (CDS) and Node.js for enterprise service desk workflows.",
      "Implemented automated testing pipeline with Jest for unit tests and Playwright for end-to-end browser testing.",
      "Monitoring application performance and infrastructure metrics using Grafana dashboards integrated with Kubernetes deployments.",
    ],
    techStack: ["Next.js", "SAP CAP", "Node.js", "PostgreSQL", "Jest", "Playwright"],
    highlight: true,
  },
  {
    title: "SAP ECC to S/4HANA Migration & Modernization",
    description: [
      "Developed data extraction and transformation pipelines to migrate legacy SAP ECC data to SAP S/4HANA using Python and FastAPI.",
      "Built middleware services to bridge SAP NetWeaver RFC calls with modern REST APIs, ensuring zero data loss during migration.",
    ],
    techStack: ["Python", "FastAPI", "SAP NetWeaver", "SAP HANA"],
    highlight: false,
  },
  {
    title: "MDM ERP",
    description: [
      "Worked on a Master Data Management ERP solution focusing on centralized data governance and entity management.",
      "Handled integration with enterprise resource planning modules for seamless data flow across systems.",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    highlight: true,
  },
  {
    title: "ITSM Portal",
    description: [
      "Developed an IT Service Management portal to streamline ticketing, incident management, and service request workflows.",
      "Built with modern web technologies enabling efficient IT support operations for enterprise users.",
    ],
    techStack: ["Next.js", "Node.js", "Express.js", "PostgreSQL"],
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
            Enterprise cloud solutions, data migration pipelines, and modern full-stack web applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
