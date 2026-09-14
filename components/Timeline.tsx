"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Waddaya Solutions Pvt. Ltd.",
    role: "Fullstack Developer",
    duration: "Sep 2025 – Present",
    location: "Remote",
    current: true,
    bullets: [
      "Developing ITSM portal features using SAP CAP, Fiori Elements, and React",
      "Designing OData V4 services and integrating with SAP BTP Cloud Foundry",
      "Writing Jest unit tests and Playwright E2E tests for quality assurance",
      "Collaborating in agile sprints, code reviews, and architecture discussions",
    ],
  },
  {
    company: "Ramaera Legal Infotech",
    role: "Fullstack Developer",
    duration: "Nov 2024 – May 2025",
    location: "Hybrid",
    current: false,
    bullets: [
      "Built full-stack features for the MDM ERP platform using Node.js and React",
      "Developed RESTful APIs for case management and compliance workflows",
      "Improved frontend performance by 35% through code-splitting and lazy loading",
      "Mentored junior developers on best practices and code organisation",
    ],
  },
  {
    company: "Keen and Able Computers",
    role: "Junior Developer",
    duration: "Sep 2024 – Nov 2024",
    location: "On-site",
    current: false,
    bullets: [
      "Assisted in migrating legacy SAP ECC modules to SAP S/4HANA",
      "Developed ABAP enhancement spots and BAdI implementations",
      "Created custom Fiori apps for inventory and procurement workflows",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Soft Ambient Glow Blobs ─────────────────────── */}
      <div
        className="pointer-events-none absolute right-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(0, 230, 138, 0.45) 0%, transparent 70%)",
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
            My{" "}
            <span
              className="text-[#00E68A]"
              style={{ textShadow: "0 0 35px rgba(0,230,138,0.4)" }}
            >
              Professional
            </span>{" "}
            Journey
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A track record of delivering enterprise-grade software across SaaS, legal-tech, and SAP BTP domains.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0 max-w-3xl mx-auto">
          {/* Vertical line with gradient glow */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] timeline-line rounded-full shadow-[0_0_10px_rgba(0,230,138,0.3)]" />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12 pb-10 last:pb-0"
            >
              {/* Node dot */}
              <div
                className="absolute left-0 top-1.5 w-10 h-10 rounded-full flex items-center justify-center
                           border-2 border-[#00E68A] bg-[#0A0A0A] backdrop-blur-md"
                style={{
                  boxShadow: exp.current
                    ? "0 0 25px rgba(0,230,138,0.6), 0 0 50px rgba(0,230,138,0.25)"
                    : "0 0 12px rgba(0,230,138,0.2)",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: exp.current ? "#00E68A" : "rgba(0,230,138,0.5)",
                    boxShadow: exp.current ? "0 0 10px #00E68A" : "none",
                  }}
                />
              </div>

              {/* Glass Card */}
              <div className="dark-card p-6 ml-2 cursor-default group">
                {/* Top reflection line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg tracking-tight group-hover:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-[#00E68A] font-semibold text-sm mt-0.5">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-[#00E68A]" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00E68A]/10 border border-[#00E68A]/30 px-2.5 py-0.5 text-[10px] font-semibold text-[#00E68A] shadow-[0_0_10px_rgba(0,230,138,0.2)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E68A] animate-pulse" />
                        Current Role
                      </span>
                    )}
                  </div>
                </div>

                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00E68A] shrink-0 shadow-[0_0_6px_#00E68A]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
