import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050712",
        panel: "rgba(15, 23, 42, 0.72)",
        cyanGlow: "#22d3ee",
        blueGlow: "#60a5fa",
        violetGlow: "#a78bfa",
        success: "#34d399",
        warning: "#fbbf24"
      },
      boxShadow: {
        glow: "0 0 32px rgba(34, 211, 238, 0.18)",
        violet: "0 0 32px rgba(167, 139, 250, 0.16)",
        float: "0 28px 70px rgba(0, 0, 0, 0.46), 0 12px 28px rgba(15, 23, 42, 0.42)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -1px 0 rgba(255, 255, 255, 0.05)",
        pill: "0 10px 24px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.18)"
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-240px 0" },
          "100%": { backgroundPosition: "240px 0" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        shimmer: "shimmer 1.8s ease-in-out infinite",
        pulseLine: "pulseLine 1.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
