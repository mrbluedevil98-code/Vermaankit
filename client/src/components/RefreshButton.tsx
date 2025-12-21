import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RefreshButton() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    
    // Smooth refresh animation
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Clear cache and reload
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
    }
    
    window.location.reload();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="relative text-muted-foreground hover:text-foreground transition-colors"
        data-testid="button-refresh"
        aria-label="Refresh page"
      >
        <motion.div
          animate={isRefreshing ? { rotate: 360 } : { rotate: 0 }}
          transition={isRefreshing ? { duration: 0.8, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
        >
          <RotateCcw className="w-5 h-5" />
        </motion.div>
      </Button>
    </motion.div>
  );
}
