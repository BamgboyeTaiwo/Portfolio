import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechBar from "@/components/TechBar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TechBar />
      <AboutSection />
      <div className="glow-line" />
      <ProjectsSection />
      <div className="glow-line" />
      <SkillsSection />
      <div className="glow-line" />
      <ExperienceSection />
      <TestimonialsSection />
      <div className="glow-line" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
