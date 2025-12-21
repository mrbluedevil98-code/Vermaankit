import type { Config } from "tailwindcss";
import defaultConfig from "../tailwind.config";

export default {
  ...defaultConfig,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
} as Config;
