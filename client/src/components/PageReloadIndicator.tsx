import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PageReloadIndicator() {
  const [isReloading, setIsReloading] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsReloading(true);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={isReloading ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 z-[9999] origin-left"
      style={{ backfaceVisibility: "hidden" }}
    />
  );
}
