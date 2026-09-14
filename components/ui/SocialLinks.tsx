import { Github, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react";
import { profile } from "@/lib/data";
import { cn } from "@/lib/cn";

/** Maps the serialisable icon keys in `lib/data.ts` to lucide components. */
const icons: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  phone: Phone,
};

const links = [
  { label: "LinkedIn", href: profile.linkedin, icon: icons.linkedin, external: true },
  { label: "GitHub", href: profile.github, icon: icons.github, external: true },
  { label: "Email", href: profile.emailHref, icon: icons.mail, external: false },
  { label: "Phone", href: profile.phoneHref, icon: icons.phone, external: false },
];

type SocialLinksProps = {
  className?: string;
  /** Rendered icon size in pixels. */
  size?: number;
  /** Restrict the list to a subset of labels, e.g. ["LinkedIn", "GitHub"]. */
  only?: string[];
};

/** Row of frosted-glass circular social buttons. */
export default function SocialLinks({ className, size = 18, only }: SocialLinksProps) {
  const visible = only ? links.filter((link) => only.includes(link.label)) : links;

  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {visible.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-100 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-violet-500 hover:via-fuchsia-500 hover:to-cyan-500 hover:text-white hover:shadow-glow"
          >
            <Icon
              size={size}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
