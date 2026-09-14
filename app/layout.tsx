import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manish Raghav — Fullstack Developer",
  description:
    "Fullstack Developer specializing in React, Next.js, Node.js, and SAP BTP enterprise solutions. Available for freelance, full-time, and consulting opportunities.",
  keywords: [
    "Fullstack Developer",
    "React",
    "Next.js",
    "Node.js",
    "SAP BTP",
    "SAP CAP",
    "TypeScript",
    "Manish Raghav",
  ],
  authors: [{ name: "Manish Raghav" }],
  openGraph: {
    title: "Manish Raghav — Fullstack Developer",
    description:
      "Fullstack Developer specializing in React, Next.js, Node.js, and SAP BTP enterprise solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-[#0A0A0A] text-slate-200 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
