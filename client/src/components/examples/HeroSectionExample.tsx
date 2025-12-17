import HeroSection from "../HeroSection";
import { ThemeProvider } from "@/hooks/use-theme";
import AnimatedBackground from "../AnimatedBackground";

export default function HeroSectionExample() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <HeroSection />
      </div>
    </ThemeProvider>
  );
}
