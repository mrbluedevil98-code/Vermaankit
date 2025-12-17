import ContactSection from "../ContactSection";
import { ThemeProvider } from "@/hooks/use-theme";
import AnimatedBackground from "../AnimatedBackground";
import { Toaster } from "@/components/ui/toaster";

export default function ContactSectionExample() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <ContactSection />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
