"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, GraduationCap, Award } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Waddaya Solutions Pvt. Ltd.",
    role: "Fullstack Developer",
    duration: "Sep 2025 – Present",
    location: "Ghaziabad, India",
    current: true,
    bullets: [
      "Working on full-stack development projects involving modern web technologies and enterprise solutions.",
      "Writing automated tests using Jest (unit) and Playwright (E2E) to ensure reliability of enterprise service workflows.",
    ],
  },
  {
    company: "Ramaera Legal Infotech Pvt. Ltd.",
    role: "Associate Software Developer Trainee",
    duration: "Nov 2024 – May 2025",
    location: "Noida, India",
    current: false,
    bullets: [
      "Developed office management software using React and Node.js, improving task efficiency by 45% and team collaboration by 30%.",
      "Worked on an e-commerce system using Nest.js, Prisma, and PostgreSQL, enhancing order processing by 40% through API and data optimization.",
    ],
  },
  {
    company: "Keen and Able Computers Pvt. Ltd.",
    role: "Linux Intern",
    duration: "Sep 2024 – Nov 2024",
    location: "Noida, India",
    current: false,
    bullets: [
      "Tested Spring Boot and Quarkus applications using Apache JMeter for performance, throughput, and latency analysis.",
      "Contributed to tuning backend scalability and load handling for enterprise systems.",
    ],
  },
];

const EDUCATION = {
  institution: "Ajay Kumar Garg Engineering College",
  degree: "B.Tech in Information Technology",
  duration: "2024",
  sgpa: "7.12",
  location: "Ghaziabad, India",
};

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
            Enterprise software development, full-stack application engineering, and academic background.
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
              className="relative pl-12 pb-10"
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

          {/* ── Education Timeline Entry ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-12"
          >
            {/* Education Node Dot */}
            <div
              className="absolute left-0 top-1.5 w-10 h-10 rounded-full flex items-center justify-center
                         border-2 border-[#00E68A]/70 bg-[#0A0A0A] backdrop-blur-md shadow-[0_0_15px_rgba(0,230,138,0.3)]"
            >
              <GraduationCap className="w-4 h-4 text-[#00E68A]" />
            </div>

            {/* Education Glass Card */}
            <div className="dark-card p-6 ml-2 cursor-default group border border-white/10 hover:border-[#00E68A]/40">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00E68A]/10 border border-[#00E68A]/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#00E68A] mb-1.5">
                    Education
                  </span>
                  <h3 className="text-white font-bold text-lg tracking-tight group-hover:text-white">
                    {EDUCATION.institution}
                  </h3>
                  <p className="text-[#00E68A] font-semibold text-sm mt-0.5">{EDUCATION.degree}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-[#00E68A]" />
                    {EDUCATION.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    {EDUCATION.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className="inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 text-xs text-slate-300">
                  <Award className="w-3.5 h-3.5 text-[#00E68A]" />
                  <span>SGPA: <strong className="text-white font-bold">{EDUCATION.sgpa}</strong></span>
                </div>
                <span className="text-xs text-slate-400">B.Tech in Information Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
