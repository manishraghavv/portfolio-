import {
  AppWindow,
  Boxes,
  Bug,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ============================================================
   Profile
   ============================================================ */
export const profile = {
  name: "Manish Raghav",
  location: "Noida, India",
  tagline:
    "Building scalable web apps and enterprise solutions with modern JavaScript & SAP technologies.",
  email: "manishraghav657@gmail.com",
  phone: "+91-9717102203",
  emailHref: "mailto:manishraghav657@gmail.com",
  phoneHref: "tel:+919717102203",
  linkedin: "https://linkedin.com/in/manish-925246194",
  github: "https://github.com/manishraghavv",
};

/** Roles cycled by the hero typing animation. */
export const roles = [
  "Fullstack Developer",
  "React & Next.js Developer",
  "SAP BTP Developer",
  "Node.js Backend Engineer",
];

/* ============================================================
   Navigation
   ============================================================ */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" as const },
  { label: "GitHub", href: profile.github, icon: "github" as const },
  { label: "Email", href: profile.emailHref, icon: "mail" as const },
  { label: "Phone", href: profile.phoneHref, icon: "phone" as const },
];

/* ============================================================
   Education / highlights
   ============================================================ */
export const education = {
  degree: "B.Tech in Information Technology",
  school: "Ajay Kumar Garg Engineering College",
  year: "2024",
  sgpa: "7.12",
  icon: GraduationCap as LucideIcon,
};

/* ============================================================
   Skills grouped by category
   ============================================================ */
export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  /** Tailwind gradient stops used for the icon chip + hover glow. */
  accent: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: Code2,
    accent: "from-violet-500 to-fuchsia-500",
    skills: ["JavaScript", "Node.js", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    icon: AppWindow,
    accent: "from-cyan-400 to-blue-500",
    skills: ["React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    accent: "from-emerald-400 to-teal-500",
    skills: ["Node.js", "Express.js", "SAP CAP (CDS)", "RESTful / OData Services"],
  },
  {
    category: "Database",
    icon: Database,
    accent: "from-amber-400 to-orange-500",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "SAP BTP Tools",
    icon: Cloud,
    accent: "from-sky-400 to-indigo-500",
    skills: [
      "SAP Business Application Studio",
      "SAP Cloud Connector",
      "SAP CAP",
    ],
  },
  {
    category: "DevOps",
    icon: GitBranch,
    accent: "from-rose-400 to-pink-500",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Kubernetes", "Grafana"],
  },
  {
    category: "Testing",
    icon: Bug,
    accent: "from-lime-400 to-green-500",
    skills: ["Jest", "Playwright"],
  },
  {
    category: "Tools",
    icon: Wrench,
    accent: "from-purple-400 to-violet-500",
    skills: ["Postman", "VS Code", "Linux"],
  },
];

/* ============================================================
   Experience timeline
   ============================================================ */
export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  accent: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: "Waddaya Solutions Pvt. Ltd.",
    role: "Fullstack Developer",
    period: "Sep 2025 – Present",
    location: "Ghaziabad",
    accent: "from-violet-500 to-cyan-400",
    points: [
      "Working on full-stack development projects involving modern web technologies and enterprise solutions.",
      "Writing automated tests using Jest (unit) and Playwright (E2E).",
    ],
  },
  {
    company: "Ramaera Legal Infotech Pvt. Ltd.",
    role: "Associate Software Developer Trainee",
    period: "Nov 2024 – May 2025",
    location: "Noida",
    accent: "from-blue-500 to-emerald-400",
    points: [
      "Developed office management software using React and Node.js, improving task efficiency by 45% and collaboration by 30%.",
      "Worked on an e-commerce system using Nest.js, Prisma and PostgreSQL, improving order processing by 40%.",
    ],
  },
  {
    company: "Keen and Able Computers Pvt. Ltd.",
    role: "Linux Intern",
    period: "Sep 2024 – Nov 2024",
    location: "Noida",
    accent: "from-amber-400 to-rose-500",
    points: [
      "Tested Spring Boot and Quarkus applications using Apache JMeter.",
      "Contributed to backend scalability and load handling tuning.",
    ],
  },
];

/* ============================================================
   Projects
   ============================================================ */
export type Project = {
  title: string;
  description: string;
  stack: string[];
  /** Icon name resolved inside the Projects component. */
  icon: "cloud" | "database" | "boxes" | "monitor";
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Waddaya ITSM",
    description:
      "Cloud-native ITSM application on SAP BTP with an automated testing pipeline and Grafana monitoring running on Kubernetes.",
    stack: ["Next.js", "SAP CAP", "Node.js", "PostgreSQL", "Jest", "Playwright"],
    icon: "cloud",
    accent: "from-violet-500 via-fuchsia-500 to-cyan-400",
  },
  {
    title: "SAP ECC to S/4HANA Migration & Modernization",
    description:
      "Data migration pipelines and middleware bridging SAP NetWeaver RFC with REST APIs for a large-scale modernization program.",
    stack: ["Python", "FastAPI", "SAP NetWeaver", "SAP HANA"],
    icon: "database",
    accent: "from-cyan-400 via-blue-500 to-indigo-500",
  },
  {
    title: "MDM ERP",
    description:
      "Master Data Management ERP platform delivering centralized data governance, validation workflows and audit trails.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    icon: "boxes",
    accent: "from-emerald-400 via-teal-500 to-cyan-400",
  },
  {
    title: "ITSM Portal",
    description:
      "IT Service Management portal handling ticketing, incident management and SLA tracking with role-based access.",
    stack: ["Next.js", "Node.js", "Express.js", "PostgreSQL"],
    icon: "monitor",
    accent: "from-amber-400 via-orange-500 to-rose-500",
  },
];

/** Icon lookup consumed by the Projects section. */
export const projectIcons = { cloud: Cloud, database: Database, boxes: Boxes, monitor: AppWindow };
