import ScrollReveal from "@/components/ScrollReveal";

const experiences = [
  {
    role: "Senior Mobile Engineer",
    company: "Cydene Energy Services",
    period: "July 2024 — Present",
    description: "Launched fintech mobile app processing $1M+ in transactions using React Native and .NET, achieving 99.9% uptime. Led cross-functional team of 5 engineers across 8 product initiatives. Optimized API performance resulting in 30% app speed improvement.",
    tags: ["React Native", ".NET", "Fintech", "Team Lead"],
  },
  {
    role: "Full-stack Developer",
    company: "Cowris Technologies Ltd",
    period: "Feb 2023 — Aug 2024",
    description: "Developed currency exchange platform handling $2M CAD monthly transactions serving 1,000+ active users. Built internal CRM, ERP, and P2P payment systems. Engineered React Native mobile app boosting user engagement by 18%.",
    tags: ["React", "Node.js", "MySQL", "React Native"],
  },
  {
    role: "Full-stack Developer",
    company: "Grandida LLC (Contract)",
    period: "Sept 2023 — Dec 2024",
    description: "Architected full-stack artisan marketplace platform including web app, mobile app, and admin panel. Collaborated on fintech system architecture and established GDPR-compliant security protocols with zero breaches.",
    tags: ["React", "React Native", "Node.js", "GDPR"],
  },
  {
    role: "Full-stack Developer",
    company: "African Founders",
    period: "Dec 2021 — Jul 2023",
    description: "Built multi-purpose mobile app with React Native and Firebase, increasing user engagement by 12%. Implemented real-time data sync improving performance by 35%. Designed CRM system with Django and PostgreSQL.",
    tags: ["React Native", "Firebase", "Django", "PostgreSQL"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="right" className="mb-16">
          <p className="section-label">Career</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ScrollReveal
                key={exp.company}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.1}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-10 md:pl-0`}>
                  <div className="glass-card p-6">
                    <span className="text-xs text-primary font-mono">{exp.period}</span>
                    <h3 className="text-lg font-semibold mt-1">{exp.role}</h3>
                    <p className="text-sm text-primary mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tech-badge text-[10px]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
