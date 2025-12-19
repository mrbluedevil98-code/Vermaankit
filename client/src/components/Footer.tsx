import { motion } from "framer-motion";
import { Heart, Youtube, ArrowUp, Sparkles } from "lucide-react";
import { SiLinkedin, SiFiverr, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/LOGO_1766171581846.png";

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com/@ankitrikrevo", label: "YouTube", color: "hover:text-red-500" },
  { icon: SiInstagram, href: "https://instagram.com/ankitrikrevo", label: "Instagram", color: "hover:text-pink-500" },
  { icon: SiFiverr, href: "https://fiverr.com/ankitrikrevo", label: "Fiverr", color: "hover:text-green-500" },
  { icon: SiLinkedin, href: "https://linkedin.com/in/ankitrikrevo", label: "LinkedIn", color: "hover:text-blue-500" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative"
      >
        <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-white/10 p-6 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
            <div className="md:col-span-1">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="flex items-center gap-3 mb-4 group"
                data-testid="link-footer-logo"
                aria-label="Go to homepage"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                  <img 
                    src={logoImage} 
                    alt="Ankit Rikrevo" 
                    className="relative w-12 h-12 rounded-full object-cover ring-2 ring-white/50 dark:ring-white/20"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-foreground block">
                    Ankit<span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">.</span>
                  </span>
                  <span className="text-xs text-muted-foreground">Thumbnail Designer</span>
                </div>
              </a>
              <p className="text-sm text-muted-foreground max-w-xs mb-4">
                Creating scroll-stopping thumbnails that get your videos the clicks they deserve.
              </p>
              <Button
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl shadow-lg shadow-red-500/20"
                data-testid="button-footer-cta"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Work With Me
              </Button>
            </div>

            <div className="md:col-span-1">
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="grid grid-cols-2 gap-2" aria-label="Footer navigation">
                {footerLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-red-500 transition-colors text-left py-1 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="md:col-span-1">
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex gap-2 mb-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 text-foreground/70 ${link.color} transition-all hover-elevate focus:outline-none focus:ring-2 focus:ring-red-500/50`}
                    data-testid={`link-footer-social-${link.label.toLowerCase()}`}
                    aria-label={`Follow on ${link.label}`}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <a 
                href="mailto:ankitrikrevo@gmail.com" 
                className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
              >
                ankitrikrevo@gmail.com
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-white/20 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" aria-hidden="true" />
              <span>for YouTube creators</span>
              <span className="mx-2 hidden sm:inline">|</span>
              <span className="w-full sm:w-auto text-center">{new Date().getFullYear()} Ankit Rikrevo. All rights reserved.</span>
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="rounded-xl bg-white/30 dark:bg-white/5 hover:bg-white/50 dark:hover:bg-white/10"
              data-testid="button-scroll-top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 mr-1.5" aria-hidden="true" />
              Back to top
            </Button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
