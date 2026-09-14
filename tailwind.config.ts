import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        green: {
          accent: "#00E68A",
          dark: "#00b86d",
          light: "#33edaa",
          glow: "rgba(0,230,138,0.35)",
        },
        surface: {
          base: "#0A0A0A",
          elevated: "#111111",
          card: "#161616",
          border: "#242424",
          glass: "rgba(255, 255, 255, 0.035)",
          "glass-card": "rgba(18, 18, 18, 0.75)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "green-glow": "radial-gradient(circle, rgba(0,230,138,0.25) 0%, transparent 70%)",
        "cyan-glow": "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)",
        "enterprise-grid":
          "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        "green-glow": "0 0 30px rgba(0,230,138,0.25), 0 0 60px rgba(0,230,138,0.12)",
        "green-glow-sm": "0 0 15px rgba(0,230,138,0.2)",
        "green-glow-lg": "0 0 45px rgba(0,230,138,0.35), 0 0 90px rgba(0,230,138,0.15)",
        "glass-panel":
          "0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
        "glass-glow":
          "0 12px 40px -10px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(0, 230, 138, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
        "glass-button":
          "0 0 20px rgba(0, 230, 138, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 4.5s ease-in-out infinite",
        "float-2": "float-2 6s ease-in-out infinite",
        "float-3": "float-3 4s ease-in-out infinite",
        "spin-slow": "spin-slow 16s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        shine: "shine 2.5s infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
