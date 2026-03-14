import { motion } from "framer-motion";
import profileImg from "@/assets/heroimg.jpg";

const techBadges = ["React", "React Native", "Node.js", "TypeScript", "Next.js", "Flutter", "Django", "PostgreSQL", "AWS"];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="section-label">Hello, I'm Taiwo</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Fullstack Web & Mobile Engineer Building{" "}
              <span className="gradient-text">Scalable Products</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              6+ years building production fintech platforms, SaaS products, and mobile apps — from idea to app store and beyond. Currently processing $2M+ monthly.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {techBadges.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-200 hover:shadow-lg"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-200"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-border">
                <img src={profileImg} alt="Taiwo Bamgboye" className="w-full h-full object-cover" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/3 glass-card px-4 py-3"
              >
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="text-2xl font-bold text-primary">6+</p>
                <p className="text-xs text-muted-foreground">Years</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-1/4 glass-card px-4 py-3"
              >
                <p className="text-xs text-muted-foreground">Projects</p>
                <p className="text-2xl font-bold text-primary">30+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
