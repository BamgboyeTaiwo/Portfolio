import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const skillCategories = [
  {
    title: "Frontend & Web",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Vue.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", level: 95 },
      { name: "Flutter / Dart", level: 82 },
      { name: "iOS & Android Deploy", level: 90 },
      { name: "Mobile UI/UX", level: 86 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / NestJS", level: 93 },
      { name: "Django / Python", level: 88 },
      { name: "Golang", level: 78 },
      { name: "Laravel / PHP", level: 75 },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Docker / K8s", level: 85 },
      { name: "AWS / Firebase", level: 88 },
      { name: "PostgreSQL / MySQL", level: 92 },
      { name: "CI/CD Pipelines", level: 88 },
    ],
  },
];

const SkillBar = ({ skill, inView, delay }: { skill: { name: string; level: number }; inView: boolean; delay: number }) => (
  <div>
    <div className="flex justify-between text-sm mb-2">
      <span className="text-secondary-foreground">{skill.name}</span>
      <span className="text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${skill.level}%` } : {}}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg, hsl(160 84% 39%), hsl(180 70% 50%))" }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const barsRef = useRef(null);
  const barsInView = useInView(barsRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" className="mb-16">
          <p className="section-label">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Engineering <span className="gradient-text">Skills</span>
          </h2>
        </ScrollReveal>

        <div ref={barsRef}>
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {skillCategories.map((category, ci) => (
            <StaggerItem key={category.title} direction="up" className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} inView={barsInView} delay={ci * 0.15 + si * 0.1} />
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
