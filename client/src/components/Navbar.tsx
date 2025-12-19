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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? "w-[95%] max-w-4xl" : "w-[90%] max-w-5xl"
        }`}
      >
        <div
          className={`px-4 sm:px-6 py-3 rounded-2xl backdrop-blur-xl transition-all duration-500 ${
            isScrolled
              ? "bg-white/80 dark:bg-slate-900/80 shadow-xl shadow-black/5 dark:shadow-black/20 border border-white/50 dark:border-white/10"
              : "bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/5"
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-2 sm:gap-3 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              data-testid="link-logo"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <img 
                  src={logoImage} 
                  alt="Ankit Rikrevo" 
                  className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-white/50 dark:ring-white/20" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-tight">
                  Ankit<span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">.</span>
                </span>
                <span className="text-[10px] text-muted-foreground hidden sm:block leading-none">Thumbnail Designer</span>
              </div>
            </motion.a>

            <div className="hidden md:flex items-center gap-1 bg-white/30 dark:bg-white/5 rounded-xl p-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "bg-white dark:bg-white/10 text-foreground shadow-md"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/50 dark:hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <Button
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="hidden sm:flex bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl shadow-lg shadow-red-500/20 text-xs sm:text-sm"
                data-testid="button-hire-me-nav"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Hire Me
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-24 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/50 dark:border-white/10 shadow-2xl p-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        activeSection === item.href.slice(1)
                          ? "bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-500"
                          : "text-foreground hover:bg-white/50 dark:hover:bg-white/5"
                      }`}
                      data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-2"
                >
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl"
                    data-testid="button-hire-me-mobile"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Hire Me
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
