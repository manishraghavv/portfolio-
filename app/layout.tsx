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
  title: "Manish Raghav — Fullstack Developer | Noida, India",
  description:
    "Fullstack Developer based in Noida, India specializing in React.js, Next.js, Node.js, and SAP BTP (SAP CAP, CDS) enterprise solutions. Contact: manishraghav657@gmail.com | +91-9717102203.",
  keywords: [
    "Manish Raghav",
    "Fullstack Developer",
    "Noida India",
    "React.js",
    "Next.js",
    "Node.js",
    "SAP BTP",
    "SAP CAP",
    "PostgreSQL",
    "Jest",
    "Playwright",
  ],
  authors: [{ name: "Manish Raghav", url: "https://github.com/manishraghavv" }],
  creator: "Manish Raghav",
  openGraph: {
    title: "Manish Raghav — Fullstack Developer",
    description:
      "Fullstack Developer based in Noida, India specializing in React.js, Next.js, Node.js, and SAP BTP enterprise solutions.",
    type: "website",
    url: "https://github.com/manishraghavv",
    siteName: "Manish Raghav Portfolio",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manish Raghav",
    jobTitle: "Fullstack Developer",
    telephone: "+91-9717102203",
    email: "mailto:manishraghav657@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Ajay Kumar Garg Engineering College",
    },
    sameAs: [
      "https://linkedin.com/in/manish-925246194",
      "https://github.com/manishraghavv",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-slate-200 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
