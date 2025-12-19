import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "subtle" | "strong";
  animate?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className,
  variant = "default",
  animate = true,
  delay = 0,
}: GlassCardProps) {
  const variants = {
    default: "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/8 hover:border-white/30 dark:hover:border-white/15 transition-all duration-300",
    subtle: "bg-white/5 dark:bg-white/3 backdrop-blur-lg border border-white/10 dark:border-white/5 hover:bg-white/10 dark:hover:bg-white/5 hover:border-white/15 dark:hover:border-white/10 transition-all duration-300",
    strong: "bg-white/20 dark:bg-white/10 backdrop-blur-2xl border border-white/30 dark:border-white/15 hover:bg-white/25 dark:hover:bg-white/15 hover:border-white/40 dark:hover:border-white/20 transition-all duration-300",
  };

  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-2xl shadow-xl",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  );
}
