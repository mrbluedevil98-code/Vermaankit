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
          className={`px-4 sm:px-6 py-3 rounded-2xl backdrop-blur-2xl transition-all duration-500 ${
            isScrolled
              ? "bg-gradient-to-br from-white/85 to-white/75 dark:from-slate-900/85 dark:to-slate-900/75 shadow-2xl shadow-black/10 dark:shadow-black/30 border border-white/60 dark:border-white/15"
              : "bg-gradient-to-br from-white/65 to-white/55 dark:from-slate-900/65 dark:to-slate-900/55 border border-white/40 dark:border-white/10"
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
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              data-testid="link-logo"
            >
              <motion.div 
                className="relative"
                whileHover={{ rotate: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" 
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
                <img 
                  src={logoImage} 
                  alt="Ankit Rikrevo" 
                  className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-white/50 dark:ring-white/20 transition-all duration-300 group-hover:ring-red-500/50" 
                />
              </motion.div>
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item.href.slice(1)
                      ? "bg-white/40 dark:bg-white/15 text-foreground shadow-lg shadow-red-500/20 dark:shadow-red-600/10 border border-white/40 dark:border-white/20"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {activeSection !== item.href.slice(1) && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-red-500/15 to-orange-500/15 rounded-lg"
                      initial={{ opacity: 0, x: -100 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                  )}
                  <span className="relative z-10 block">{item.label}</span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <Button
                  size="sm"
                  onClick={() => scrollToSection("#contact")}
                  className="hidden sm:flex bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/60 text-xs sm:text-sm font-semibold transition-all duration-300 relative overflow-hidden group"
                  data-testid="button-hire-me-nav"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.5 }}
                    className="w-3.5 h-3.5 mr-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </motion.div>
                  <motion.span
                    whileHover={{ letterSpacing: "0.05em" }}
                    transition={{ duration: 0.3 }}
                  >
                    Hire Me
                  </motion.span>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/15 rounded-xl hover:bg-white/50 dark:hover:bg-white/15 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  data-testid="button-mobile-menu"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                  </motion.div>
                </Button>
              </motion.div>
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
                    <motion.button
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all relative overflow-hidden group ${
                        activeSection === item.href.slice(1)
                          ? "bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-500"
                          : "text-foreground hover:bg-white/50 dark:hover:bg-white/5"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                    >
                      <motion.span 
                        className="relative z-10 inline-block"
                        whileHover={{ letterSpacing: "0.02em" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.label}
                      </motion.span>
                    </motion.button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <Button
                      onClick={() => scrollToSection("#contact")}
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/60 transition-all duration-300 relative overflow-hidden group"
                      data-testid="button-hire-me-mobile"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 600, damping: 15, duration: 0.5 }}
                        className="inline-block"
                      >
                        <Sparkles className="w-4 h-4 mr-2 inline" />
                      </motion.div>
                      <motion.span
                        whileHover={{ letterSpacing: "0.05em" }}
                        transition={{ duration: 0.3 }}
                      >
                        Hire Me
                      </motion.span>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
