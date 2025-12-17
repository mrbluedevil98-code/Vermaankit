import AboutSection from "../AboutSection";
import { ThemeProvider } from "@/hooks/use-theme";
import AnimatedBackground from "../AnimatedBackground";

export default function AboutSectionExample() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <AboutSection />
      </div>
    </ThemeProvider>
  );
}
