import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { featuredProjects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="left" className="mb-16">
          <p className="section-label">My Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Some of my <span className="gradient-text">distinguished works</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
          {featuredProjects.map((project) => (
            <StaggerItem key={project.title} direction="scale" className="glass-card group overflow-hidden hover:border-primary/30 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-[10px]">{tag}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <p className="text-xs text-primary font-medium">📈 {project.impact}</p>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      View
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProjectsSection;
