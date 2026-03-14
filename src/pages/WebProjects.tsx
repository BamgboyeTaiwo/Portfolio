import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { webProjects } from "@/data/projects";

const WebProjects = () => {
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
            <p className="section-label">Web Development</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Web <span className="gradient-text">Applications</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Production-grade web platforms built with modern frameworks — from fintech dashboards processing millions to enterprise CRM systems, logistics platforms, and marketplaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <StaggerContainer className="flex flex-col gap-16" staggerDelay={0.15}>
            {webProjects.map((project, index) => (
              <StaggerItem key={project.title} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="glass-card overflow-hidden grid lg:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className={`relative overflow-hidden ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={675}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/40" />
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

                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        📈 {project.impact}
                      </div>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                        >
                          View Live
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                      )}
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

export default WebProjects;
