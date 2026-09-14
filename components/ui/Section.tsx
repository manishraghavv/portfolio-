import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

/** Consistent vertical rhythm + max width for every page section. */
export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("section-shell py-20 sm:py-24 lg:py-28", className)}>
      {children}
    </section>
  );
}
