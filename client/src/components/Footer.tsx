import { motion } from "framer-motion";
import { Heart, Youtube } from "lucide-react";
import { SiLinkedin, SiFiverr, SiX } from "react-icons/si";

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: SiX, href: "#", label: "X" },
  { icon: SiFiverr, href: "#", label: "Fiverr" },
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 dark:border-white/10 p-6 sm:p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2"
                data-testid="link-footer-logo"
              >
                <Youtube className="w-6 h-6 text-red-500" />
                ThumbnailPro
              </a>
              <p className="text-muted-foreground mt-2 max-w-xs">
                Scroll-stopping thumbnails that get your videos the clicks they deserve.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-red-500 dark:hover:text-red-400 transition-colors"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2.5 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 text-foreground/70 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                  data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 dark:border-white/5">
            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for YouTube creators</span>
              <span className="mx-2">|</span>
              <span>{new Date().getFullYear()} All rights reserved.</span>
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
