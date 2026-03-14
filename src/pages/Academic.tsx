import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import profileImg from "@/assets/heroimg.jpg";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const Section = ScrollReveal;

const research = [
  {
    title: "Hybrid Optimization of Distribution Networks",
    subtitle: "Feeder Reconfiguration & DG Siting Using Metaheuristic Algorithms",
    lab: "PEMD Research Group, University of Ibadan",
    period: "June 2024 — April 2025",
    advisors: "Prof A.S.O. Ogunjuyigbe & Prof T. R. Ayodele",
    description: "Developed a Genetic Algorithm-based multi-objective optimization framework for simultaneous network reconfiguration and distributed generation placement, yielding substantial improvements in voltage profiles and loss minimization across 33kV distribution networks and IEEE benchmark systems.",
    tags: ["Genetic Algorithms", "MATLAB", "Power Systems", "Optimization"],
  },
];

const publications = [
  {
    title: "Optimal Sizing and Placement of Distributed Generation in Radial Distribution Networks Using Genetic Algorithms with Application to Nigerian Feeders",
    authors: "Bamgboye T., Ogunjuyigbe A.S.O, Ayodele T. R.",
    journal: "In prep for Applied Energy",
    status: "In Preparation",
  },
  {
    title: "Knowledge, Attitude and Practice of Nurses in South West Nigeria Towards Adverse Drug Reaction Reporting: A Multicenter Cross-Sectional Study",
    authors: "Eniola A. Oladele, Israel T. Olanipekun, Taiwo Bamgboye, et al.",
    journal: "West African Journal of Pharmacy",
    status: "In Review",
  },
];

const awards = [
  { title: "Dean's Award for First Class Graduates", year: "2025" },
  { title: "Overall Best Student in Power Electronics & Current Trends Technologies", year: "2025" },
  { title: "Department Award for Outstanding Performance (B.Sc Hons)", year: "2025" },
  { title: "NNPC/SEPLAT JV National Undergraduate Scholarship", year: "2021" },
  { title: "Dean's Honours List, Faculty of Technology", year: "2018–2025" },
  { title: "Fellow, Campus Lab Employability Accelerator Programme", year: "2021" },
];

const teaching = [
  {
    role: "Academic Tutor/Mentor",
    org: "Dept. of E&E Engineering, University of Ibadan",
    period: "July 2024 – May 2025",
    description: "Provided one-on-one coaching and mentorship in Mathematics and Power Systems courses.",
  },
  {
    role: "PASS Academic Mentor",
    org: "Peer Assisted Study Sessions, University of Ibadan",
    period: "2023 – 2024",
    description: "Led peer-assisted tutorials for 100-level students, resulting in 75%+ improvement in student performance.",
  },
  {
    role: "Volunteer Tutor",
    org: "Heroes and Heroines Initiative",
    period: "2022 – 2024",
    description: "Taught Mathematics and Physics to 1,000+ students in underserved secondary schools across Ibadan.",
  },
  {
    role: "Instructor",
    org: "TechQuest STEM Academy (Oyo State Program)",
    period: "2023",
    description: "Taught introductory programming to 300+ Computer Science teachers, enhancing digital literacy in public education.",
  },
];

const organizations = [
  "Graduate Member, Nigerian Society of Engineers (2025–present)",
  "Student Member, Institute of Electrical & Electronic Engineering (2019–present)",
  "Member, Junior Chamber International Nigeria, University of Ibadan (2022–present)",
];

const researchInterests = [
  "Power System Operations",
  "Energy Systems",
  "Power System Optimization",
  "Control Systems",
  "Power Grid Monitoring",
  "Infrastructure Resilience",
  "ML in Power & Energy",
];

const Academic = () => {
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
          <span className="text-sm font-mono text-blue-400 tracking-wider uppercase hidden sm:block">Academic</span>
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <button onClick={() => navigate("/software")} className="text-xs text-muted-foreground hover:text-primary transition-colors">Software</button>
            <button onClick={() => navigate("/electrical")} className="text-xs text-muted-foreground hover:text-primary transition-colors">Electrical</button>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-mono text-blue-400 tracking-widest uppercase mb-4">Academic Profile</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Taiwo <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(220 80% 60%), hsl(270 70% 65%))" }}>Bamgboye</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              B.Sc. Electrical & Electronic Engineering — <span className="text-foreground font-medium">First Class Honours (Summa Cum Laude)</span><br />
              University of Ibadan, Nigeria · Class of 2025
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {researchInterests.map((interest) => (
                <span key={interest} className="px-3 py-1.5 text-xs font-medium rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">
                  {interest}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:bamgboyetaiwo9@gmail.com" className="px-6 py-3 rounded-full bg-blue-500 text-background font-medium text-sm hover:opacity-90 transition-opacity">
                Contact for Collaboration
              </a>
              <a href="#publications" className="px-6 py-3 rounded-full border border-blue-500/40 text-blue-400 font-medium text-sm hover:bg-blue-500/10 transition-colors">
                View Publications
              </a>
              <a
                href="/Taiwo_Academic_CV.pdf"
                download
                className="px-6 py-3 rounded-full border border-blue-500/40 text-blue-400 font-medium text-sm hover:bg-blue-500/10 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="glow-line" style={{ background: "linear-gradient(90deg, transparent, hsl(220 80% 60% / 0.5), transparent)" }} />

      {/* Education */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(220 80% 60%)" }}>Education</p>
            <h2 className="text-3xl font-bold mb-10">Academic <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(220 80% 60%), hsl(270 70% 65%))" }}>Background</span></h2>
          </Section>
          <Section className="glass-card p-8 max-w-3xl">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">University of Ibadan</h3>
                <p className="text-blue-400 font-medium mb-1">B.Sc. Electrical & Electronic Engineering</p>
                <p className="text-sm text-muted-foreground mb-3">2019 — 2025 · First Class Honours (Summa Cum Laude)</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-secondary-foreground">Thesis:</strong> Hybrid optimization of distribution networks: Feeder reconfiguration and distributed generation siting using metaheuristic algorithms for power loss reduction and voltage stability.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      <div className="glow-line" style={{ background: "linear-gradient(90deg, transparent, hsl(220 80% 60% / 0.5), transparent)" }} />

      {/* Research */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(220 80% 60%)" }}>Research</p>
            <h2 className="text-3xl font-bold mb-10">Research <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(220 80% 60%), hsl(270 70% 65%))" }}>Experience</span></h2>
          </Section>
          {research.map((r) => (
            <Section key={r.title} className="glass-card p-8 max-w-4xl mb-6">
              <span className="text-xs font-mono text-blue-400">{r.period}</span>
              <h3 className="text-lg font-bold mt-2 mb-1">{r.title}</h3>
              <p className="text-sm text-blue-400/80 mb-1">{r.subtitle}</p>
              <p className="text-xs text-muted-foreground mb-1">{r.lab} · Advisors: {r.advisors}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-4">{r.description}</p>
              <div className="flex flex-wrap gap-2">
                {r.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-medium rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">{tag}</span>
                ))}
              </div>
            </Section>
          ))}
        </div>
      </section>

      <div className="glow-line" style={{ background: "linear-gradient(90deg, transparent, hsl(220 80% 60% / 0.5), transparent)" }} />

      {/* Publications */}
      <section id="publications" className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(220 80% 60%)" }}>Publications</p>
            <h2 className="text-3xl font-bold mb-10">Manuscripts & <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(220 80% 60%), hsl(270 70% 65%))" }}>Papers</span></h2>
          </Section>
          <div className="space-y-4 max-w-4xl">
            {publications.map((pub, i) => (
              <Section key={i} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${pub.status === "In Review" ? "bg-amber-500/10 text-amber-400 border border-amber-500/30" : "bg-blue-500/10 text-blue-400 border border-blue-500/30"}`}>
                      {pub.status}
                    </span>
                    <h3 className="text-sm font-semibold mt-2 mb-1 leading-relaxed">{pub.title}</h3>
                    <p className="text-xs text-muted-foreground">{pub.authors}</p>
                    <p className="text-xs text-blue-400/70 mt-1">{pub.journal}</p>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" style={{ background: "linear-gradient(90deg, transparent, hsl(220 80% 60% / 0.5), transparent)" }} />

      {/* Awards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(220 80% 60%)" }}>Recognition</p>
            <h2 className="text-3xl font-bold mb-10">Honours & <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(220 80% 60%), hsl(270 70% 65%))" }}>Awards</span></h2>
          </Section>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl" staggerDelay={0.1}>
            {awards.map((award, i) => (
              <StaggerItem key={i} direction="scale" className="glass-card p-5 group hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-snug">{award.title}</p>
                    <p className="text-xs text-blue-400/70 font-mono mt-1">{award.year}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="glow-line" style={{ background: "linear-gradient(90deg, transparent, hsl(220 80% 60% / 0.5), transparent)" }} />

      {/* Teaching */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(220 80% 60%)" }}>Teaching</p>
            <h2 className="text-3xl font-bold mb-10">Teaching & <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(220 80% 60%), hsl(270 70% 65%))" }}>Mentorship</span></h2>
          </Section>
          <div className="space-y-4 max-w-4xl">
            {teaching.map((t, i) => (
              <Section key={i} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold">{t.role}</h3>
                    <p className="text-xs text-blue-400/80">{t.org} · {t.period}</p>
                    <p className="text-sm text-muted-foreground mt-2">{t.description}</p>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Volunteering */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(220 80% 60%)" }}>Leadership</p>
            <h2 className="text-3xl font-bold mb-10">Leadership & <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(220 80% 60%), hsl(270 70% 65%))" }}>Volunteering</span></h2>
          </Section>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {[
              {
                role: "Electoral Commissioner",
                org: "Students' Union, University of Ibadan",
                period: "July 2024 – May 2025",
                description: "Coordinated free and transparent student elections; organized voter education campaigns increasing procedural awareness across campus.",
                icon: "🗳️",
              },
              {
                role: "Speaker & Constitutional Reformer",
                org: "SEEES SRC, University of Ibadan",
                period: "July 2024 – May 2025",
                description: "Recommended constitutional reforms introducing new governance roles; organized legislative visits to Oyo State and Lagos State Houses of Assembly for 50+ students; launched gender inclusivity initiatives.",
                icon: "🎤",
              },
              {
                role: "General Secretary",
                org: "Society of Electrical & Electronic Engineering Students (SEEES)",
                period: "Nov 2022 – July 2023",
                description: "Managed organizational communications and social media, increasing engagement by 40%. Drafted press releases and represented the organization at campus events.",
                icon: "📋",
              },
              {
                role: "Frontend Team Lead",
                org: "Google Developer Groups on Campus (GDGC), UI",
                period: "Jan – Aug 2023",
                description: "Led frontend development in React.js and HTML5, mentored junior developers, and organized coding workshops that boosted campus tech engagement.",
                icon: "💻",
              },
              {
                role: "Technical Mentor (Mobile Track)",
                org: "Skillpaddy",
                period: "2024 – Present",
                description: "Mentoring aspiring developers in React Native and Flutter, supporting mobile app projects and helping trainees transition into tech roles.",
                icon: "🧑‍🏫",
              },
              {
                role: "Instructor",
                org: "TechQuest STEM Academy (Oyo State)",
                period: "2023",
                description: "Taught introductory programming to 300+ Computer Science teachers across Oyo State, enhancing digital literacy in public education.",
                icon: "🎓",
              },
            ].map((item, i) => (
              <Section key={i} className="glass-card p-6 group hover:border-blue-500/30 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold">{item.role}</h3>
                    <p className="text-xs text-blue-400/80 mb-1">{item.org}</p>
                    <p className="text-[10px] font-mono text-muted-foreground mb-2">{item.period}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line" style={{ background: "linear-gradient(90deg, transparent, hsl(220 80% 60% / 0.5), transparent)" }} />

      {/* Professional Organizations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Section>
            <p className="section-label" style={{ color: "hsl(220 80% 60%)" }}>Affiliations</p>
            <h2 className="text-3xl font-bold mb-10">Professional <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, hsl(220 80% 60%), hsl(270 70% 65%))" }}>Organizations</span></h2>
          </Section>
          <div className="space-y-3 max-w-3xl">
            {organizations.map((org, i) => (
              <Section key={i} className="glass-card px-6 py-4">
                <p className="text-sm text-secondary-foreground">{org}</p>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="gradient-text font-semibold">Taiwo</span> Bamgboye
          </p>
          <a href="mailto:bamgboyetaiwo9@gmail.com" className="text-xs text-muted-foreground hover:text-blue-400 transition-colors">bamgboyetaiwo9@gmail.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Academic;
