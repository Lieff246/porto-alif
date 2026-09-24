import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollReveal from "@/components/ScrollReveal";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <div className="relative min-h-screen technical-grid-bg text-zinc-900 flex flex-col justify-between selection:bg-zinc-900 selection:text-white">
      {/* Cinematic Multilingual Intro Curtain Preloader */}
      <Preloader />

      {/* Interactive Mouse Hover Spotlight & Custom Follower */}
      <CursorSpotlight />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <ScrollReveal>
          <FocusAreas />
        </ScrollReveal>
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>
        <ScrollReveal>
          <TechStack />
        </ScrollReveal>
      </main>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
