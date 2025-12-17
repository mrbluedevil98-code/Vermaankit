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
    default: "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10",
    subtle: "bg-white/5 dark:bg-white/3 backdrop-blur-lg border border-white/10 dark:border-white/5",
    strong: "bg-white/20 dark:bg-white/10 backdrop-blur-2xl border border-white/30 dark:border-white/15",
  };

  const content = (
    <div
      className={cn(
        "rounded-2xl shadow-xl",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  );
}
