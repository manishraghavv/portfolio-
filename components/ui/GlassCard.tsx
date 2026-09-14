import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  /** Adds lift + glow hover treatment. */
  interactive?: boolean;
  /** Renders a different element (e.g. "article", "li"). */
  as?: ElementType;
};

/**
 * Core frosted-glass surface: translucent background, 1px low-opacity border,
 * backdrop blur and a soft shadow. Content sits above the sheen overlay.
 */
export default function GlassCard({
  children,
  className,
  interactive = false,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "glass p-6",
        interactive && "glass-interactive",
        className,
      )}
    >
      {/* z-10 keeps text crisp and above the ::after sheen layer */}
      <div className="relative z-10 h-full">{children}</div>
    </Tag>
  );
}
