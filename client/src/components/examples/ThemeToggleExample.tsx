import ThemeToggle from "../ThemeToggle";
import { ThemeProvider } from "@/hooks/use-theme";

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex items-center justify-center rounded-lg">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
