import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f3f4f6", // Soft gray
        card: "#ffffff",
        primary: {
          DEFAULT: "#0f766e", // Teal-600
          hover: "#0d9488", // Teal-500
          light: "#ccfbf1", // Teal-50
        },
        text: {
          main: "#111827", // Gray-900
          muted: "#4b5563", // Gray-600
          light: "#9ca3af", // Gray-400
        },
        border: "#e5e7eb", // Gray-200
        error: "#ef4444",
        success: "#10b981",
        warning: "#f59e0b",
      },
    },
  },
  plugins: [],
};
export default config;
