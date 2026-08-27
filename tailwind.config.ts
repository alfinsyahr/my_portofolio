import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        content: "1200px",
      },
      colors: {
        bg: "#FAFAFA",
        card: "#FFFFFF",
        ink: "#111827",
        muted: "#6B7280",
        border: "#E5E7EB",
        accent: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
        },
        success: "#22C55E",
      },
      fontFamily: {
        heading: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        image: "24px",
      },
      transitionTimingFunction: {
        smooth: "ease",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        "card-hover": "0 20px 40px -10px rgb(37 99 235 / 0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
