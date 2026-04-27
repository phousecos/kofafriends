import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "kofa-green": "#1F6F4A",
        "kofa-green-deep": "#15533A",
        "kofa-gold": "#D4A24C",
        "kofa-ink": "#0E1110",
        "kofa-warm": "#F4EFE6",
        "kofa-stone": "#3F3A33",
        "kofa-mist": "#EAE3D6",
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
