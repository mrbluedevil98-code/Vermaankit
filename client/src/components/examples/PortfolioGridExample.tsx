import PortfolioGrid from "../PortfolioGrid";
import { ThemeProvider } from "@/hooks/use-theme";
import AnimatedBackground from "../AnimatedBackground";

export default function PortfolioGridExample() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <PortfolioGrid />
      </div>
    </ThemeProvider>
  );
}
