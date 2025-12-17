import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SiLinkedin, SiDribbble, SiGithub, SiX } from "react-icons/si";

const socialLinks = [
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiDribbble, href: "#", label: "Dribbble" },
  { icon: SiGithub, href: "#", label: "GitHub" },
  { icon: SiX, href: "#", label: "X" },
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

  return (
    <footer className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-white/10 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="text-2xl font-bold tracking-tight text-foreground"
                data-testid="link-footer-logo"
              >
                Alex<span className="text-primary">.</span>
              </a>
              <p className="text-muted-foreground mt-2 max-w-xs">
                Creating beautiful digital experiences one pixel at a time.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                  className="p-2.5 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 text-foreground/70 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
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
              <span>by Alex Rivera</span>
              <span className="mx-2">|</span>
              <span>{new Date().getFullYear()} All rights reserved.</span>
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
