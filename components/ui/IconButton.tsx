import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "light" | "dark" | "glass";

type IconButtonProps = {
  /** Accessible name — also used as the tooltip. */
  label: string;
  href: string;
  icon: LucideIcon;
  /** "light" for the off-white hero panel, "glass" for the dark sections. */
  tone?: Tone;
  size?: number;
  className?: string;
};

const tones: Record<Tone, string> = {
  // Light gray chip on the off-white panel; inverts to black on hover.
  light:
    "border-black/[0.06] bg-[#E4E4E0] text-[#0a0a0c] shadow-[0_10px_26px_-14px_rgba(0,0,0,0.55)] hover:bg-[#0a0a0c] hover:text-white hover:shadow-[0_18px_36px_-16px_rgba(0,0,0,0.7)]",
  dark:
    "border-white/15 bg-[#0a0a0c] text-white shadow-elevated hover:bg-white hover:text-[#0a0a0c]",
  glass:
    "border-white/10 bg-white/[0.06] text-slate-100 backdrop-blur-xl hover:bg-white/[0.14] hover:text-white",
};

/** Circular icon link. Scales up and inverts its colours on hover. */
export default function IconButton({
  label,
  href,
  icon: Icon,
  tone = "light",
  size = 18,
  className,
}: IconButtonProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border",
        "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 active:scale-95",
        tones[tone],
        className,
      )}
    >
      <Icon size={size} className="transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}
