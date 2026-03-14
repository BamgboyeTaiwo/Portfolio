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
                <p className="text-xs text-primary font-medium">📈 {project.impact}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProjectsSection;
