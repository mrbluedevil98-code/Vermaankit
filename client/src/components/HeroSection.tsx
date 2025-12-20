import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Youtube, TrendingUp, Eye, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";
import profileImage from "@assets/LOGO_1766171581846.png";

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "loop" as const,
    },
  },
};

const stats = [
  { icon: Youtube, value: "500+", label: "Thumbnails", color: "text-red-500" },
  { icon: TrendingUp, value: "40%", label: "Avg CTR Boost", color: "text-green-500" },
  { icon: Eye, value: "10M+", label: "Views Generated", color: "text-blue-500" },
];

export default function HeroSection() {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-2xl opacity-20" />
            <div>
              <GlassCard className="p-3" variant="strong" animate={false}>
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Ankit Rikrevo - YouTube Thumbnail Designer"
                    className="w-52 h-52 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-2xl object-cover"
                    data-testid="img-profile"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
                </div>
              </GlassCard>
            </div>
            
            <motion.div
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4"
              variants={floatingVariants}
              animate="animate"
            >
              <GlassCard className="px-3 py-2" variant="strong" animate={false}>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground">Available Now</span>
                </div>
              </GlassCard>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              <GlassCard className="px-3 py-2" variant="strong" animate={false}>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground">5.0 Rating</span>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-8 sm:-right-12 hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <GlassCard className="px-3 py-2" variant="strong" animate={false}>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-red-500 fill-red-500" />
                  <span className="text-xs font-semibold text-foreground">YouTube Pro</span>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          >
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
                <Sparkles className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-foreground">YouTube Thumbnail Expert</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground leading-[1.1]">
              <span className="block">Thumbnails that</span>
              <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Get Clicks
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-6 sm:mb-8 mx-auto lg:mx-0 leading-relaxed">
              I design scroll-stopping YouTube thumbnails that boost your CTR and grow your channel. 
              Let's make your videos <span className="text-foreground font-medium">impossible to ignore</span>.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 cursor-default hover:bg-white/60 dark:hover:bg-white/10 transition-colors duration-200"
                >
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground hidden sm:inline">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <motion.div 
                className="w-full sm:w-auto"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToWork}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 rounded-xl shadow-xl shadow-red-500/25 hover:shadow-red-500/40 text-base font-semibold"
                  data-testid="button-view-work"
                >
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  View My Work
                </Button>
              </motion.div>
              <motion.div 
                className="w-full sm:w-auto"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToContact}
                  className="w-full rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-lg border-white/50 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/10 text-base font-semibold"
                  data-testid="button-get-in-touch"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-12 lg:mt-20">
          <button
            onClick={scrollToWork}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            data-testid="button-scroll-down"
          >
            <span className="text-sm font-medium group-hover:text-red-500 transition-colors">Scroll to explore</span>
            <div className="p-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 group-hover:border-red-500/30 transition-colors">
              <ArrowDown className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
