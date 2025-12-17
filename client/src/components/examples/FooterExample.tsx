import Footer from "../Footer";
import { ThemeProvider } from "@/hooks/use-theme";
import AnimatedBackground from "../AnimatedBackground";

export default function FooterExample() {
  return (
    <ThemeProvider>
      <div className="relative min-h-[400px]">
        <AnimatedBackground />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
