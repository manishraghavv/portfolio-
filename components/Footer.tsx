"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const QUICK_LINKS = [
  { label: "About", href: "#hero" },
  { label: "Skills & Services", href: "#skills" },
  { label: "Experience & Education", href: "#experience" },
  { label: "Featured Projects", href: "#projects" },
  { label: "Ways to Work", href: "#availability" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0A0A] pt-16 pb-12 md:pt-20 md:pb-14 overflow-hidden border-t border-transparent">
      {/* ── Top Border with Soft Green Gradient Fade ─────── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E68A]/30 to-transparent" />

      {/* ── Subtle Ambient Glow Blob in Background ──────── */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[650px] h-[250px] opacity-10 blur-[130px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 230, 138, 0.6) 0%, rgba(34, 211, 238, 0.3) 60%, transparent 80%)",
        }}
      />

      <div className="section-container relative z-10">
        {/* ── Multi-Column Enterprise Footer Grid ─────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-12 md:pb-16">
          {/* ── Column 1: Brand & Bio (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="relative w-10 h-10 rounded-full shrink-0 p-0.5"
                style={{
                  background: "linear-gradient(135deg, #00E68A, #00b86d)",
                  boxShadow: "0 0 12px rgba(0, 230, 138, 0.35)",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <Image
                    src="/mr.jpeg"
                    alt="Manish Raghav"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <span className="text-white font-extrabold text-lg tracking-tight">
                  Manish Raghav
                </span>
                <p className="text-[#00E68A] text-xs font-semibold">
                  Fullstack &amp; SAP BTP Developer
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mt-1">
              Fullstack Developer building scalable web apps and enterprise solutions 
              using React, Next.js, Node.js, and SAP BTP technologies.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#00E68A]" />
              <span>Noida, India • Available for Global Opportunities</span>
            </div>
          </div>

          {/* ── Column 2: Quick Links (3 cols) ── */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-1">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-slate-400 hover:text-[#00E68A] hover:translate-x-1 transition-all duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Get in Touch Mini CTA (4 cols) ── */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <p className="text-xs font-bold uppercase tracking-widest text-white/90 mb-1">
              Get in Touch
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:manishraghav657@gmail.com"
                className="group flex items-center gap-3 text-sm text-slate-300 hover:text-[#00E68A] transition-colors"
              >
                <span className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center text-slate-400 group-hover:text-[#00E68A] group-hover:border-[#00E68A]/40 group-hover:bg-[#00E68A]/10 transition-all">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span className="truncate">manishraghav657@gmail.com</span>
              </a>

              <a
                href="tel:+919717102203"
                className="group flex items-center gap-3 text-sm text-slate-300 hover:text-[#00E68A] transition-colors"
              >
                <span className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center text-slate-400 group-hover:text-[#00E68A] group-hover:border-[#00E68A]/40 group-hover:bg-[#00E68A]/10 transition-all">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span>+91-9717102203</span>
              </a>
            </div>

            {/* Social Badges */}
            <div className="pt-2">
              <p className="text-xs text-slate-500 mb-2.5 font-medium">Professional Networks</p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com/in/manish-925246194"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md
                             flex items-center justify-center text-slate-300
                             hover:text-[#00E68A] hover:border-[#00E68A]/40 hover:bg-[#00E68A]/15
                             hover:shadow-[0_0_15px_rgba(0,230,138,0.25)] transition-all duration-300 shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/manishraghavv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md
                             flex items-center justify-center text-slate-300
                             hover:text-[#00E68A] hover:border-[#00E68A]/40 hover:bg-[#00E68A]/15
                             hover:shadow-[0_0_15px_rgba(0,230,138,0.25)] transition-all duration-300 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Thin Section Divider ────────────────────────── */}
        <div className="w-full h-px bg-white/[0.08]" />

        {/* ── Bottom Bar ──────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            © {year}{" "}
            <span className="text-white font-semibold tracking-tight">Manish Raghav</span>.
            Crafted with{" "}
            <span className="text-[#00E68A] font-medium">Next.js 14</span> &amp;{" "}
            <span className="text-[#00E68A] font-medium">Tailwind CSS</span>.
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={handleScrollTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-4 py-2 text-xs font-semibold text-slate-300 hover:text-[#00E68A] hover:border-[#00E68A]/40 hover:bg-[#00E68A]/10 hover:shadow-[0_0_15px_rgba(0,230,138,0.2)] transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00E68A]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
