import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "One of the most talented engineers I've worked with. Taiwo consistently delivers high-quality, scalable solutions that exceed expectations.",
    name: "Sarah Chen",
    role: "CTO, FinEdge Technologies",
  },
  {
    quote: "Taiwo transformed our platform architecture and improved performance by 10x. His deep understanding of both frontend and backend is rare.",
    name: "Michael Adekunle",
    role: "Founder, Wakanda CRM",
  },
  {
    quote: "Exceptional problem solver with a keen eye for design. Taiwo delivers production-ready code at an impressive speed without sacrificing quality.",
    name: "Jessica Okafor",
    role: "Product Manager, Scale Inc",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up" className="mb-16">
          <p className="section-label">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            What people <span className="gradient-text">say</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name} direction="scale" className="glass-card p-6">
              <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-primary">{t.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
