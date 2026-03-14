import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "30+", label: "Web & Mobile Projects" },
  { value: "$2M+", label: "Monthly Transactions" },
  { value: "15+", label: "Apps Shipped" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <p className="section-label">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              I'm here to help with{" "}
              <span className="gradient-text">your next project</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Senior Software Engineer with 6+ years of experience building scalable fintech and mobile platforms. Led the end-to-end development of a currency exchange system processing over $2M CAD monthly, and architected mobile apps facilitating $1M+ in secure financial transactions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I deliver high-performance systems using React, Django, and Golang, and have successfully managed cross-functional teams to launch production-ready fintech products on tight timelines — from responsive web apps to native mobile experiences and cloud infrastructure.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {["Web & Mobile Apps", "Scalable Systems", "Product Thinking", "High Quality"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-secondary-foreground">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.12}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label} direction="scale" className="glass-card p-6 text-center">
                <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
