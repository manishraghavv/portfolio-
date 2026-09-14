"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const CONTACT_INFO = [
    {
      icon: Mail,
      label: "Email",
      value: "manishraghav657@gmail.com",
      href: "mailto:manishraghav657@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9717102203",
      href: "tel:+919717102203",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, India",
      href: null,
    },
  ];

  const SOCIALS = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/manish-925246194",
      hoverClass: "hover:bg-blue-600/20 hover:border-blue-500/40 hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/manishraghavv",
      hoverClass: "hover:bg-[#00E68A]/10 hover:border-[#00E68A]/40 hover:text-[#00E68A]",
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Soft Ambient Glow Blobs ─────────────────────── */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 w-[550px] h-[550px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(0, 230, 138, 0.4) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-0 bottom-1/4 w-[400px] h-[400px] opacity-10"
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
            Let&apos;s{" "}
            <span
              className="text-[#00E68A]"
              style={{ textShadow: "0 0 35px rgba(0,230,138,0.4)" }}
            >
              Connect
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Have an enterprise project idea, job opportunity, or technical challenge? Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* ── Contact form (3/5) ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 dark-card p-6 sm:p-8 relative"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <h3 className="text-white font-bold text-xl tracking-tight mb-6">Send an Inquiry</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    className="dark-input"
                    type="text"
                    name="name"
                    placeholder="Manish Raghav"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                    Work Email
                  </label>
                  <input
                    className="dark-input"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1.5 font-medium">
                  Project Details
                </label>
                <textarea
                  className="dark-input resize-none"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project scope, tech requirements, and timeline..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-green flex items-center justify-center gap-2 w-full !py-3.5 text-sm font-bold tracking-tight disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
                    <span>Processing Inquiry…</span>
                  </>
                ) : status === "sent" ? (
                  "Inquiry Transmitted Successfully ✓"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Enterprise Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* ── Contact info (2/5) ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Info card */}
            <div className="dark-card p-6 sm:p-7 flex flex-col gap-6 flex-1 relative">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <h3 className="text-white font-bold text-xl tracking-tight">Direct Channels</h3>

              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_0_15px_rgba(0,230,138,0.1)]"
                    >
                      <item.icon className="w-4 h-4 text-[#00E68A]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-slate-200 hover:text-[#00E68A] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-200">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div className="pt-5 border-t border-white/[0.08]">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Professional Profiles</p>
                <div className="flex gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`
                        w-11 h-11 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md
                        flex items-center justify-center text-slate-300
                        transition-all duration-300 ${social.hoverClass} shadow-[0_4px_15px_rgba(0,0,0,0.5)]
                      `}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Response time card */}
            <div className="dark-card p-5 flex items-center gap-4 relative">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div
                className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center text-xl border border-[#00E68A]/30 bg-[#00E68A]/10 text-[#00E68A] shadow-[0_0_15px_rgba(0,230,138,0.15)]"
              >
                ⚡
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-tight">Enterprise SLA Response</p>
                <p className="text-slate-400 text-xs mt-0.5">Typically within 24 business hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
