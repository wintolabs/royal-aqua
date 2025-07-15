// tailwind.config.ts
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1572ff",
          foreground: "#ffffff",
          50: "#e5f1ff",
          100: "#c9dfff",
          200: "#9bc0ff",
          300: "#6ca1ff",
          400: "#3e82ff",
          500: "#1572ff",
          600: "#125ee0",
          700: "#0e48b1",
          800: "#093282",
          900: "#041c54",
        },
        accent: "#00b5ad",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
