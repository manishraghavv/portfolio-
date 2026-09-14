import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Center-aligns the heading block (default) or pins it left. */
  align?: "center" | "left";
  className?: string;
};

/** Shared heading block: small glass eyebrow chip + gradient title + subtitle. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={cn(centered && "text-center", "mb-12 sm:mb-16", className)}>
      <span className="glass-pill mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
        {eyebrow}
      </span>

      {/* Base layer already applies font-display + extrabold to headings */}
      <h2 className="text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        <span className="text-gradient text-gradient-glow">{title}</span>
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
