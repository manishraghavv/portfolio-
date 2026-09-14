"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`
          flex items-center justify-between w-full max-w-5xl
          px-3 py-2 rounded-full border transition-all duration-500
          ${
            scrolled
              ? "bg-[#0c0c0c]/80 border-white/15 backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,0,0,0.65),0_0_20px_rgba(0,230,138,0.08),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
              : "bg-[#111111]/50 border-white/10 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.06)]"
          }
        `}
      >
        {/* ── Left: Profile ───────────────────────────────── */}
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-3 hover:opacity-95 transition-opacity shrink-0 group"
        >
          <div
            className="relative w-10 h-10 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00E68A, #00b86d)",
              padding: "2px",
              boxShadow: "0 0 12px rgba(0, 230, 138, 0.35)",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <Image
                src="/mr.png"
                alt="Manish Raghav"
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-white font-bold text-sm leading-tight tracking-tight group-hover:text-[#00E68A] transition-colors">
              Manish Raghav
            </p>
            <p className="text-slate-400 text-xs leading-tight">Fullstack Developer</p>
          </div>
        </button>

        {/* ── Center: Nav links ────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-2 py-1 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="relative px-4 py-1.5 text-sm text-slate-300 rounded-full transition-colors duration-200 hover:text-white group"
              >
                {link.label}
                <span
                  className={`
                    absolute bottom-1 left-4 right-4 h-0.5 rounded-full
                    bg-[#00E68A] transition-all duration-300
                    ${
                      activeLink === link.href
                        ? "opacity-100 scale-x-100 shadow-[0_0_8px_#00E68A]"
                        : "opacity-0 scale-x-0 group-hover:opacity-80 group-hover:scale-x-100"
                    }
                  `}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* ── Right: CTA button ────────────────────────────── */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNav("#contact")}
            className="hidden sm:flex btn-green items-center gap-2.5 !py-2 !px-4 text-xs tracking-tight"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white shrink-0 shadow-sm">
              <ArrowRight className="w-3 h-3 text-[#0A0A0A]" />
            </span>
            <span className="font-bold">Start a Project</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full border border-white/10 bg-white/[0.05] text-slate-300 hover:text-white hover:border-[#00E68A] transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile menu ──────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[72px] left-4 right-4 rounded-2xl border border-white/15 bg-[#121212]/95 backdrop-blur-2xl p-4 flex flex-col gap-1 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(0,230,138,0.1)]"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 rounded-xl text-slate-300 hover:text-[#00E68A] hover:bg-[#00E68A]/10 transition-all text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-2 btn-green flex items-center justify-center gap-2 w-full !py-3 text-sm font-bold"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white shrink-0">
                <ArrowRight className="w-3 h-3 text-[#0A0A0A]" />
              </span>
              Start a Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
