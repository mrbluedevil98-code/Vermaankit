import Navbar from "../Navbar";
import { ThemeProvider } from "@/hooks/use-theme";

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <div className="min-h-[200px] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 relative">
        <Navbar />
        <div className="pt-24 text-center text-muted-foreground">
          Scroll to see navbar transition
        </div>
      </div>
    </ThemeProvider>
  );
}
