import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "kofa-green": "#437731",
        "kofa-green-deep": "#33591F",
        "kofa-gold": "#D4A24C",
        "kofa-ink": "#0E1110",
        "kofa-warm": "#FFFFFF",
        "kofa-stone": "#3F3A33",
        "kofa-mist": "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
