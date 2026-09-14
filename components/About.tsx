import { BrainCircuit, Code2, GraduationCap, Layers, Rocket } from "lucide-react";
import { education, profile } from "@/lib/data";
import GlassCard from "./ui/GlassCard";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

/** Short capability cards shown under the intro paragraph. */
const highlights = [
  { label: "Frontend", value: "React & Next.js", icon: Code2 },
  { label: "Backend", value: "Node.js & Express", icon: Layers },
  { label: "Enterprise", value: "SAP BTP / CAP", icon: BrainCircuit },
  { label: "Delivery", value: "Testing & CI/CD", icon: Rocket },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Turning ideas into reliable products"
        description="A quick look at what I do, where I've studied, and how I approach building software."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* ---------------------------- Intro ---------------------------- */}
        <Reveal className="lg:col-span-3" direction="right">
          <GlassCard interactive className="h-full p-7 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
              Fullstack Developer based in {profile.location}
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              <p>
                I&apos;m a Fullstack Developer specialising in{" "}
                <span className="text-white">React, Next.js and Node.js</span>, with hands-on
                experience building enterprise-grade applications on{" "}
                <span className="text-white">SAP BTP using SAP CAP (CDS)</span>, OData services and
                PostgreSQL.
              </p>
              <p>
                Currently working at <span className="text-white">Waddaya Solutions</span>, I build
                cloud-native products end to end — from designing APIs and data models to shipping
                polished, responsive interfaces.
              </p>
              <p>
                I care about clean architecture, automated testing with Jest and Playwright, and
                observability through CI/CD pipelines and Grafana dashboards on Kubernetes.
              </p>
            </div>

            {/* Capability grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/40 to-cyan-500/40 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-wider text-slate-300">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-slate-100">
                      {value}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </Reveal>

        {/* -------------------------- Education -------------------------- */}
        <Reveal className="lg:col-span-2" direction="left" delay={0.12}>
          <div className="flex h-full flex-col gap-6">
            <GlassCard interactive className="flex-1 p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-violet-500/40 to-cyan-500/40 text-white shadow-glow">
                <GraduationCap size={22} />
              </span>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Education
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">
                {education.degree}
              </h3>
              <p className="mt-1.5 text-sm text-slate-300">{education.school}</p>

              <div className="mt-6 flex items-center gap-3">
                <span className="glass-pill !py-1 text-slate-200">
                  <span className="text-slate-300">Class of</span> {education.year}
                </span>
                <span className="glass-pill !py-1 text-slate-200">
                  <span className="text-slate-300">SGPA</span> {education.sgpa}
                </span>
              </div>
            </GlassCard>

            {/* A small "currently" card keeps the column balanced */}
            <GlassCard interactive className="p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200">
                Currently
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">
                Waddaya Solutions Pvt. Ltd.
              </h3>
              <p className="mt-1.5 text-sm text-slate-300">
                Fullstack Developer · Building ITSM & ERP products on SAP BTP.
              </p>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
