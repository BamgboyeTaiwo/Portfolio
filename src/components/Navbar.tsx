import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  {
    label: "Projects",
    href: "#projects",
    dropdown: [
      { label: "Web Projects", href: "/software/web" },
      { label: "Mobile Projects", href: "/software/mobile" },
    ],
  },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();
  const location = useLocation();

  const isSoftwarePage = location.pathname === "/software" || location.pathname.startsWith("/software/");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (!isSoftwarePage) {
        navigate("/software");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 400);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  const handleDropdownEnter = (label: string) => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(null), 150);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="text-xl font-bold">
          <span className="gradient-text">Taiwo</span>
          <span className="text-foreground">Bamgboye</span>
        </button>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && handleDropdownEnter(link.label)}
              onMouseLeave={() => link.dropdown && handleDropdownLeave()}
            >
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                {link.label}
                {link.dropdown && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform duration-200 ${dropdownOpen === link.label ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </button>

              {/* Desktop dropdown */}
              <AnimatePresence>
                {link.dropdown && dropdownOpen === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg border border-border bg-card/95 backdrop-blur-xl shadow-lg overflow-hidden"
                  >
                    {link.dropdown.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => {
                          navigate(item.href);
                          setDropdownOpen(null);
                        }}
                        className="w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="text-sm px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
        >
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => {
                    if (link.dropdown) {
                      setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label);
                    } else {
                      handleNavClick(link.href);
                      setMobileOpen(false);
                    }
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 w-full text-left"
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-200 ${mobileDropdownOpen === link.label ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </button>
                {link.dropdown && mobileDropdownOpen === link.label && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <button
                      onClick={() => {
                        handleNavClick(link.href);
                        setMobileOpen(false);
                        setMobileDropdownOpen(null);
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                    >
                      All Projects
                    </button>
                    {link.dropdown.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => {
                          navigate(item.href);
                          setMobileOpen(false);
                          setMobileDropdownOpen(null);
                        }}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
                setMobileOpen(false);
              }}
              className="text-sm px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-center"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
