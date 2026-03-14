import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const Section = ScrollReveal;

const accentGradient = "linear-gradient(135deg, hsl(35 90% 55%), hsl(20 85% 55%))";

const eeExperience = [
  {
    role: "Graduate Engineer",
    company: "Cydene Energy Services",
    period: "June 2025 – Present",
    description: "Design and implementation of projects involving petrol-to-CNG conversion, electricity metering, and gas cylinder manufacturing.",
    tags: ["Energy Systems", "CNG", "Metering", "Manufacturing"],
  },
  {
    role: "Embedded Systems Intern",
    company: "Rajtronics Technologies",
    period: "Jan – June 2024",
    description: "Designed and programmed IoT-based solutions including home automation systems, Smart GPS Waste Bins, and Agricultural Irrigation Systems (AgricBot) integrating sensors, microcontrollers, and communication modules. Implemented circuit designs and PCB layouts.",
    tags: ["IoT", "Embedded Systems", "PCB Design", "Microcontrollers"],
  },
  {
    role: "Embedded Systems Intern",
    company: "Digitouch",
    period: "May – Aug 2023",
    description: "Programmed ATmega and PIC microcontrollers for IoT applications including smart waste management and irrigation control systems. Co-developed energy solutions including digital displays and programmable moving message boards.",
    tags: ["ATmega", "PIC", "IoT", "Digital Displays"],
  },
  {
    role: "Engineering Intern",
    company: "Rashad Link Limited",
    period: "Nov 2021 – 2022",
    description: "Performed maintenance and repair of industrial generators (Mikano series). Executed coil rewinding for motors and transformers. Conducted electrical installations and troubleshooting in commercial and industrial facilities.",
    tags: ["Generators", "Motors", "Transformers", "Installations"],
  },
  {
    role: "Project Intern",
    company: "Robotics and Artificial Intelligence, Nigeria",
    period: "Feb – April 2020",
    description: "Designed voice-recognition interface for automated restaurant food ordering system using natural language processing.",
    tags: ["Robotics", "NLP", "Voice Recognition", "Automation"],
  },
];

const technicalSkills = [
  {
    category: "Programming",
    skills: ["Python", "C/C++", "VHDL", "Fortran", "Java", "MATLAB"],
  },
  {
    category: "Simulation & Design",
    skills: ["Proteus", "KiCad", "Cadence Spectre", "Simulink", "SolidWorks"],
  },
  {
    category: "Numerical & Math",
    skills: ["MATLAB", "Mathematica", "Maple", "Coventorware", "FEMLAB"],
  },
  {
    category: "ML & Data Science",
    skills: ["Deep Learning", "Reinforcement Learning", "TensorFlow", "Neural Networks"],
  },
];

const iotProjects = [
  {
    title: "Smart GPS Waste Bin",
    description: "IoT-enabled waste management system with GPS tracking and fill-level monitoring for optimized collection routes.",
    icon: "🗑️",
  },
  {
    title: "AgricBot Irrigation System",
    description: "Automated agricultural irrigation system using soil moisture sensors, weather data, and microcontroller-based control.",
    icon: "🌱",
  },
  {
    title: "Home Automation System",
    description: "Complete IoT-based home automation with remote monitoring, sensor integration, and intelligent control modules.",
    icon: "🏠",
  },
  {
    title: "Smart Waste Management",
    description: "Microcontroller-based waste monitoring using ATmega and PIC platforms with real-time fill-level tracking.",
    icon: "♻️",
  },
  {
    title: "Voice-Controlled Food Ordering",
    description: "NLP-powered automated restaurant ordering system with voice recognition interface and robotics integration.",
    icon: "🤖",
  },
  {
    title: "Programmable Message Boards",
    description: "Digital display systems and moving message boards for energy solutions and information displays.",
    icon: "📟",
  },
];

const researchHighlight = {
  title: "Power Distribution Network Optimization",
  description: "Applied Genetic Algorithm-based multi-objective optimization for simultaneous network reconfiguration and distributed generation placement in 33kV Nigerian distribution networks and IEEE benchmark systems. Achieved substantial improvements in voltage stability and power loss reduction.",
  metrics: [
    { label: "Network Tested", value: "33kV" },
    { label: "Algorithm", value: "GA" },
    { label: "Focus", value: "Loss Reduction" },
    { label: "Validation", value: "IEEE Benchmarks" },
  ],
};

const Electrical = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back
          </button>
          <span className="text-sm font-mono text-amber-400 tracking-wider uppercase hidden sm:block">Electrical Engineering</span>
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <button onClick={() => navigate("/software")} className="text-xs text-muted-foreground hover:text-primary transition-colors">Software</button>
            <button onClick={() => navigate("/academic")} className="text-xs text-muted-foreground hover:text-primary transition-colors">Academic</button>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-mono text-amber-400 tracking-widest uppercase mb-4">Electrical Engineering</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              From <span className="bg-clip-text text-transparent" style={{ backgroundImage: accentGradient }}>Circuits</span> to{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: accentGradient }}>Systems</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Hands-on experience in embedded systems, IoT solutions, power systems, PCB design, and industrial electrical engineering — from lab bench to field deployment.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Embedded Systems", "IoT", "Power Systems", "PCB Design", "Industrial Engineering"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="glow-line" style={{ background: "linear-gradient(90deg, transparent, hsl(35 90% 55% / 0.5), transparent)" }} />

      {/* Research Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(35 90% 55%)" }}>Research</p>
            <h2 className="text-3xl font-bold mb-10">Power Systems <span className="bg-clip-text text-transparent" style={{ backgroundImage: accentGradient }}>Research</span></h2>
          </Section>
          <Section className="glass-card p-8 max-w-4xl">
            <h3 className="text-lg font-bold mb-3">{researchHighlight.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{researchHighlight.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {researchHighlight.metrics.map((m) => (
                <div key={m.label} className="text-center p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                  <p className="text-lg font-bold bg-clip-text text-transparent" style={{ backgroundImage: accentGradient }}>{m.value}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <div className="glow-line" style={{ background: "linear-gradient(90deg, transparent, hsl(35 90% 55% / 0.5), transparent)" }} />

      {/* IoT & Embedded Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(35 90% 55%)" }}>Projects</p>
            <h2 className="text-3xl font-bold mb-10">IoT & Embedded <span className="bg-clip-text text-transparent" style={{ backgroundImage: accentGradient }}>Projects</span></h2>
          </Section>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl" staggerDelay={0.1}>
            {iotProjects.map((project, i) => (
              <StaggerItem key={i} direction="scale" className="glass-card p-6 group hover:border-amber-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{project.icon}</span>
                <h3 className="text-sm font-semibold mb-2">{project.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="glow-line" style={{ background: "linear-gradient(90deg, transparent, hsl(35 90% 55% / 0.5), transparent)" }} />

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(35 90% 55%)" }}>Experience</p>
            <h2 className="text-3xl font-bold mb-10">Engineering <span className="bg-clip-text text-transparent" style={{ backgroundImage: accentGradient }}>Career</span></h2>
          </Section>
          <div className="relative max-w-3xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-amber-500/20" />
            <div className="space-y-8">
              {eeExperience.map((exp, i) => (
                <Section key={i} className="relative pl-12">
                  <div className="absolute left-2.5 w-3 h-3 rounded-full bg-amber-500 mt-1.5" />
                  <div className="glass-card p-6">
                    <span className="text-xs font-mono text-amber-400">{exp.period}</span>
                    <h3 className="text-base font-semibold mt-1">{exp.role}</h3>
                    <p className="text-sm text-amber-400/80 mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-[10px] font-medium rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line" style={{ background: "linear-gradient(90deg, transparent, hsl(35 90% 55% / 0.5), transparent)" }} />

      {/* Technical Skills */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(35 90% 55%)" }}>Technical</p>
            <h2 className="text-3xl font-bold mb-10">Engineering <span className="bg-clip-text text-transparent" style={{ backgroundImage: accentGradient }}>Tools</span></h2>
          </Section>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl" staggerDelay={0.1}>
            {technicalSkills.map((cat, i) => (
              <StaggerItem key={i} direction="up" className="glass-card p-6">
                <h3 className="text-sm font-semibold text-amber-400 mb-4">{cat.category}</h3>
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                      <span className="text-sm text-secondary-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="gradient-text font-semibold">Taiwo</span> Bamgboye
          </p>
          <a href="mailto:bamgboyetaiwo9@gmail.com" className="text-xs text-muted-foreground hover:text-amber-400 transition-colors">bamgboyetaiwo9@gmail.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Electrical;
