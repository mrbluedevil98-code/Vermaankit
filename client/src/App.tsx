import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/hooks/use-theme";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageReloadIndicator from "@/components/PageReloadIndicator";
import LoadingAnimation from "@/components/LoadingAnimation";
import { Star } from "lucide-react";

function RatingSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-1 items-center">
            {[0, 1, 2, 3].map((i) => (
              <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            ))}
            <div className="relative w-6 h-6">
              <Star className="absolute inset-0 w-6 h-6 text-yellow-500" />
              <div className="absolute inset-0 w-[70%] overflow-hidden">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold text-foreground">4.7 / 5.0 Rating</span>
        </div>
        <p className="text-muted-foreground text-center">Trusted by creators worldwide for premium thumbnail designs.</p>
      </div>
    </section>
  );
}

function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <LoadingAnimation onFinish={() => setIsLoaded(true)} />
      <AnimatedBackground />
      <Navbar />
      <motion.main 
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroSection />
        <PortfolioGrid />
        <AboutSection />
        <ContactSection />
        <RatingSection />
        <Footer />
      </motion.main>
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-muted-foreground">Page not found</p>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <PageReloadIndicator />
          <div className="min-h-screen">
            <Router />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
