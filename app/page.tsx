import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] relative selection:bg-[#00E68A]/30 selection:text-white">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Timeline />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Availability />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
