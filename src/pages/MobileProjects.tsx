import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { mobileProjects } from "@/data/projects";

const MobileProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate("/software")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Software
            </button>
            <p className="section-label">Mobile Development</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Mobile <span className="gradient-text">Applications</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Cross-platform mobile apps built with React Native — from fintech solutions processing millions to consumer marketplace apps, real estate platforms, and sustainability tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <StaggerContainer className="flex flex-col gap-16" staggerDelay={0.15}>
            {mobileProjects.map((project, index) => (
              <StaggerItem key={project.title} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="glass-card overflow-hidden grid lg:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className={`relative overflow-hidden flex items-center justify-center bg-secondary/30 p-8 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="w-auto h-72 lg:h-96 object-contain rounded-2xl shadow-lg"
                    />
                  </div>

                  {/* Content side */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-badge text-[10px]">{tag}</span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-2">{project.title}</h2>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">
                      {project.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-5">{project.description}</p>

                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-primary mt-0.5">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
                      📈 {project.impact}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileProjects;
