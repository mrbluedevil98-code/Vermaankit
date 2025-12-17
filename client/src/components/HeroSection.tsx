import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Youtube, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";
import profileImage from "@assets/logo_1766005991563.jpeg";

export default function HeroSection() {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse-glow" />
            <GlassCard className="p-2" variant="strong" animate={false}>
              <img
                src={profileImage}
                alt="YouTube Thumbnail Designer"
                className="w-48 h-48 md:w-64 md:h-64 rounded-xl object-cover"
                data-testid="img-profile"
              />
            </GlassCard>
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <GlassCard className="px-3 py-1.5" variant="strong" animate={false}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-foreground">Available</span>
                </div>
              </GlassCard>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <GlassCard className="px-3 py-1.5" variant="strong" animate={false}>
                <div className="flex items-center gap-1.5">
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-medium text-foreground">500+ Thumbnails</span>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <GlassCard className="px-4 py-2" animate={false}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-foreground/80">YouTube Thumbnail Designer</span>
                </div>
              </GlassCard>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground leading-tight">
              <span className="block">Thumbnails that</span>
              <span className="block bg-gradient-to-r from-red-500 via-rose-500 to-red-600 dark:from-red-400 dark:via-rose-400 dark:to-red-500 bg-clip-text text-transparent">
                Get Clicks
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mb-6 sm:mb-8 mx-auto lg:mx-0 leading-relaxed">
              I design scroll-stopping YouTube thumbnails that boost your CTR and grow your channel. 
              Let's make your videos impossible to ignore.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-xs sm:text-sm text-muted-foreground">Avg. 40% CTR increase</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                <span className="text-xs sm:text-sm text-muted-foreground">10M+ Views generated</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <Button
                size="lg"
                onClick={scrollToWork}
                className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 sm:px-8 rounded-xl shadow-lg shadow-red-500/25"
                data-testid="button-view-work"
              >
                View My Thumbnails
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-lg border-white/30 dark:border-white/10"
                data-testid="button-get-in-touch"
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16 lg:mt-24"
        >
          <motion.button
            onClick={scrollToWork}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            data-testid="button-scroll-down"
          >
            <span className="text-sm font-medium">See my work</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
