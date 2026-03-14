const techs = [
  "Node.js", "TypeScript", "React", "React Native", "Next.js", "Flutter", "PostgreSQL", "Docker", "AWS", "GraphQL", "Redis",
  "Node.js", "TypeScript", "React", "React Native", "Next.js", "Flutter", "PostgreSQL", "Docker", "AWS", "GraphQL", "Redis",
];

const TechBar = () => {
  return (
    <section className="py-8 border-y border-border/50 overflow-hidden">
      <div className="flex animate-scroll-x" style={{ width: "max-content" }}>
        {techs.map((tech, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-muted-foreground whitespace-nowrap">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechBar;
