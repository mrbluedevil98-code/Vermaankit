import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import logoImage from "@assets/LOGO_1766171581846.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      setIsScrolled(window.scrollY > 50);
      
      scrollTimeout = setTimeout(() => {
        const sections = navItems.map(item => item.href.slice(1));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }, 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-200 will-change-[width] ${
          isScrolled ? "w-[95%] max-w-4xl" : "w-[90%] max-w-5xl"
        }`}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div
          className={`px-4 sm:px-6 py-3 rounded-2xl backdrop-blur-2xl transition-all duration-200 will-change-colors ${
            isScrolled
              ? "bg-gradient-to-br from-white/85 to-white/75 dark:from-slate-900/85 dark:to-slate-900/75 shadow-lg shadow-black/5 dark:shadow-black/20 border border-white/60 dark:border-white/15"
              : "bg-gradient-to-br from-white/65 to-white/55 dark:from-slate-900/65 dark:to-slate-900/55 border border-white/40 dark:border-white/10"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="flex items-center gap-2 sm:gap-3 group"
              data-testid="link-logo"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                <img 
                  src={logoImage} 
                  alt="Ankit Rikrevo" 
                  className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-white/50 dark:ring-white/20 transition-all duration-300 group-hover:ring-red-500/50" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text">
                  Ankit<span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">.</span>
                </span>
                <span className="text-[10px] text-muted-foreground hidden sm:block leading-none opacity-75 group-hover:opacity-100 transition-opacity duration-300">Thumbnail Designer</span>
              </div>
            </motion.a>

            <div className="hidden md:flex items-center gap-0.5 bg-gradient-to-r from-white/20 to-white/10 dark:from-white/5 dark:to-white/3 rounded-xl p-1 backdrop-blur-md border border-white/20 dark:border-white/10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ backgroundColor: activeSection === item.href.slice(1) ? undefined : "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item.href.slice(1)
                      ? "bg-white/40 dark:bg-white/15 text-foreground shadow-md shadow-red-500/10 dark:shadow-red-600/5 border border-white/40 dark:border-white/20"
                      : "text-foreground/70 hover:text-foreground dark:hover:bg-white/5"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
                  )}
                  <span className="relative z-10 block">{item.label}</span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <Button
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="hidden sm:flex bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl shadow-lg shadow-red-500/20 text-xs sm:text-sm font-semibold"
                data-testid="button-hire-me-nav"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Hire Me
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/15 rounded-xl hover:bg-white/50 dark:hover:bg-white/15 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              className="fixed top-24 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-white/10 shadow-2xl p-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all relative overflow-hidden group ${
                      activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-500"
                        : "text-foreground hover:bg-white/50 dark:hover:bg-white/5"
                    }`}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                  >
                    <span className="relative z-10 inline-block">
                      {item.label}
                    </span>
                  </button>
                ))}
                <div className="pt-2">
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-semibold shadow-lg shadow-red-500/20"
                    data-testid="button-hire-me-mobile"
                  >
                    <Sparkles className="w-4 h-4 mr-2 inline" />
                    Hire Me
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
