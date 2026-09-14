"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

interface PricingCardProps {
  badge?: string;
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  index?: number;
}

function PricingCard({
  badge,
  title,
  description,
  features,
  highlighted = false,
  index = 0,
}: PricingCardProps) {
  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={`
        group relative flex flex-col justify-between
        rounded-[2rem] md:rounded-[32px]
        transition-all duration-500
        ${highlighted ? "lg:scale-105 z-10" : "z-0"}
      `}
    >
      {/* ── Ambient Radial Hover Glow (fades in behind card on hover) ── */}
      <div
        className={`
          pointer-events-none absolute -inset-4 rounded-[2.5rem] opacity-0 group-hover:opacity-100
          transition-opacity duration-500 blur-2xl -z-10
          ${highlighted ? "bg-[#00E68A]/25" : "bg-[#00E68A]/15"}
        `}
      />

      {/* ── Card Shell (Gradient Border for Featured, Frosted Glass for Standard) ── */}
      <div
        className={`
          relative w-full h-full flex flex-col justify-between
          rounded-[2rem] md:rounded-[32px] overflow-hidden
          p-8 md:p-10 backdrop-blur-2xl transition-colors duration-500
          ${
            highlighted
              ? "p-[1.5px] bg-gradient-to-b from-[#00E68A] via-[#22D3EE]/60 to-[#00E68A]/30"
              : "border border-white/10 bg-[#121212]/75 hover:border-[#00E68A]/45 hover:bg-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
          }
        `}
      >
        {/* ── Inner Body for the Featured Card (to preserve crisp gradient border) ── */}
        <motion.div
          animate={
            highlighted
              ? {
                  boxShadow: [
                    "0 20px 50px rgba(0,0,0,0.8), 0 0 25px rgba(0,230,138,0.2), inset 0 1px 0 rgba(255,255,255,0.25)",
                    "0 25px 60px rgba(0,0,0,0.85), 0 0 45px rgba(0,230,138,0.4), inset 0 1px 0 rgba(255,255,255,0.35)",
                    "0 20px 50px rgba(0,0,0,0.8), 0 0 25px rgba(0,230,138,0.2), inset 0 1px 0 rgba(255,255,255,0.25)",
                  ],
                }
              : {}
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`
            w-full h-full flex flex-col justify-between
            ${
              highlighted
                ? "rounded-[calc(2rem-1.5px)] md:rounded-[calc(32px-1.5px)] bg-[#0d1c15]/90 p-8 md:p-10 backdrop-blur-2xl"
                : ""
            }
          `}
        >
          {/* Top glass reflection highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* ── Top Section: Badge & Header ── */}
          <div>
            {badge && (
              <div className="mb-6 -mt-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#00E68A]/50 bg-[#00E68A]/15 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-[#00E68A] shadow-[0_0_20px_rgba(0,230,138,0.3)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E68A] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E68A] shadow-[0_0_8px_#00E68A]" />
                  </span>
                  <span>{badge}</span>
                </span>
              </div>
            )}

            <h3 className="text-white font-extrabold text-2xl tracking-tight group-hover:text-white transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* ── Soft Gradient Divider ── */}
          <div className="w-full h-px my-7 bg-gradient-to-r from-transparent via-[#00E68A]/25 to-transparent" />

          {/* ── Feature Checklist with Staggered Pop Animation ── */}
          <ul className="flex flex-col gap-3.5 flex-1 mb-8">
            {features.map((feature, j) => (
              <li key={feature} className="flex items-center gap-3.5 text-sm text-slate-300">
                {/* Circular Glass Checkmark Badge with Pop Animation */}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 22,
                    delay: index * 0.15 + j * 0.08 + 0.15,
                  }}
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border border-[#00E68A]/35 bg-[#00E68A]/10 text-[#00E68A] shadow-[0_0_12px_rgba(0,230,138,0.18)]"
                >
                  <Check className="w-3.5 h-3.5 text-[#00E68A] stroke-[2.5]" />
                </motion.span>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>

          {/* ── Fully Rounded "Get in Touch" Pill Button with Micro-Interaction ── */}
          <motion.button
            onClick={handleContact}
            whileTap={{ scale: 0.95 }}
            className={`
              group/btn relative w-full flex items-center justify-center gap-2.5
              rounded-full py-4 px-6 text-sm font-bold tracking-tight
              overflow-hidden transition-all duration-300
              ${
                highlighted
                  ? "btn-green shadow-[0_0_30px_rgba(0,230,138,0.4)] hover:shadow-[0_0_40px_rgba(0,230,138,0.6)]"
                  : "border border-white/15 bg-white/[0.04] text-white hover:border-[#00E68A]/45 hover:bg-[#00E68A]/10 hover:text-[#00E68A] hover:shadow-[0_0_25px_rgba(0,230,138,0.2)] backdrop-blur-md"
              }
            `}
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

const COLLABORATION_TYPES = [
  {
    title: "Freelance Project",
    description:
      "Got a specific project in mind? I take on focused freelance engagements — from building a product MVP to adding new features to an existing app.",
    features: [
      "Fixed-scope or sprint-based deliverables",
      "SAP BTP & modern web architecture",
      "Continuous CI/CD deployment",
      "Complete code ownership & documentation",
    ],
    highlighted: false,
  },
  {
    badge: "Available Now",
    title: "Full-time Opportunity",
    description:
      "Open to full-time roles at product companies, SaaS startups, or enterprise teams where I can own features end-to-end and grow long-term.",
    features: [
      "On-site, hybrid, or remote availability",
      "React, Next.js, Node.js & SAP BTP stack",
      "Enterprise systems & SaaS scale experience",
      "Immediate onboarding capability",
    ],
    highlighted: true,
  },
  {
    title: "Consulting / Contract",
    description:
      "Need a technical expert to audit, architect, or unblock your team? I offer short-term consulting engagements for SAP BTP and web platform challenges.",
    features: [
      "Architecture, performance & security audit",
      "SAP BTP migration roadmap strategy",
      "Team upskilling & technical guidance",
      "Flexible advisory or retainer model",
    ],
    highlighted: false,
  },
];

export default function Availability() {
  return (
    <section id="availability" className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Soft Ambient Glow Blobs ─────────────────────── */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(0, 230, 138, 0.45) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-10 bottom-10 w-[400px] h-[400px] opacity-10"
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
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Transparent{" "}
            <span
              className="text-[#00E68A]"
              style={{ textShadow: "0 0 35px rgba(0,230,138,0.4)" }}
            >
              Collaboration
            </span>{" "}
            for Every Project
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a dedicated team member, a focused freelancer, or a specialist consultant — here&apos;s how we can work together.
          </p>
        </motion.div>

        {/* ── 3-Column Responsive Grid with Centered Staggered Alignment ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto px-2">
          {COLLABORATION_TYPES.map((item, i) => (
            <PricingCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
