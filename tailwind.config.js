/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0089cd",
          green: "#a6ce39",
          dark: "#0b3a52",
          ink: "#1c2733",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1200px",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 58, 82, 0.18)",
        glass:
          "inset 0 1px 0 0 rgba(255,255,255,0.65), inset 0 -1px 0 0 rgba(255,255,255,0.12), 0 16px 50px -20px rgba(11,58,82,0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-150%) skewX(-12deg)" },
          "100%": { transform: "translateX(250%) skewX(-12deg)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "drift-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(7vw, 6vh) scale(1.18)" },
          "66%": { transform: "translate(-5vw, 9vh) scale(0.9)" },
        },
        "drift-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "30%": { transform: "translate(-8vw, 7vh) scale(1.1)" },
          "70%": { transform: "translate(6vw, -6vh) scale(0.92)" },
        },
        "drift-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "40%": { transform: "translate(6vw, -8vh) scale(1.2)" },
          "75%": { transform: "translate(-7vw, -4vh) scale(0.95)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
        "scale-in": "scale-in 0.5s ease-out both",
        float: "float 6s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "drift-1": "drift-1 22s ease-in-out infinite",
        "drift-2": "drift-2 26s ease-in-out infinite",
        "drift-3": "drift-3 30s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
