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
    default: "bg-white/15 dark:bg-white/5 backdrop-blur-lg border border-white/25 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/8 hover:border-white/35 dark:hover:border-white/15 transition-all duration-200",
    subtle: "bg-white/8 dark:bg-white/3 backdrop-blur-md border border-white/15 dark:border-white/5 hover:bg-white/12 dark:hover:bg-white/5 hover:border-white/20 dark:hover:border-white/10 transition-all duration-200",
    strong: "bg-white/25 dark:bg-white/10 backdrop-blur-xl border border-white/35 dark:border-white/15 hover:bg-white/30 dark:hover:bg-white/15 hover:border-white/45 dark:hover:border-white/20 transition-all duration-200",
  };

  const content = (
    <div
      className={cn(
        "rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group",
        variants[variant],
        className
      )}
      style={{ backfaceVisibility: "hidden" }}
    >
      {children}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: [0.23, 1, 0.32, 1] }}
      style={{ backfaceVisibility: "hidden" }}
    >
      {content}
    </motion.div>
  );
}
