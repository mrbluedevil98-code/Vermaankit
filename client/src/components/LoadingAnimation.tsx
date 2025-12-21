import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoImage from "@assets/LOGO_1766171581846.png";

export default function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo with animated glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-2xl opacity-60 scale-125" />
          <img
            src={logoImage}
            alt="Loading"
            className="relative w-20 h-20 rounded-full object-cover ring-4 ring-white dark:ring-slate-800 shadow-xl"
          />
        </motion.div>

        {/* Text */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
          >
            Ankit
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm text-muted-foreground mt-1"
          >
            Thumbnail Designer
          </motion.p>
        </div>

        {/* Animated loading bar */}
        <div className="w-32 h-1 bg-white/20 dark:bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: -128 }}
            animate={{ x: 128 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"
          />
        </div>

        {/* Animated dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
              }}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
