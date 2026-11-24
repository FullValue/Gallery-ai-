import type { Config } from "tailwindcss";

/* DA de gallery-ai.fr : papier #FBFBFA, encre #141414, filets #1414141F, JetBrains Mono, logo en Permanent Marker. */
/* Les noms de jetons (violet, rose, bleu…) sont gardés pour ne pas réécrire chaque composant ;
   leurs valeurs sont celles du noir et blanc Gallery. */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Échelle « violet » conservée comme nom de jeton, mais remappée sur le noir et blanc de gallery-ai.fr
        violet: {
          50: "#FBFBFA",
          100: "#F2F2F0",
          200: "#E8E8E5",
          300: "#CFCFCB",
          400: "#8A8A86",
          500: "#141414",
          600: "#2B2B2B",
          700: "#141414",
          800: "#0A0A0A",
          900: "#000000",
        },
        ink: { DEFAULT: "#141414", soft: "#2B2B2B", muted: "#5E5E5E", faint: "#8A8A86" },
        rose: { 100: "#F2F2F0", 300: "#CFCFCB", 500: "#8A8A86", 600: "#5E5E5E" },
        bleu: { 100: "#F2F2F0", 500: "#2B2B2B", 600: "#141414" },
        jaune: { 100: "#F2F2F0", 300: "#E8E8E5", 500: "#FBFBFA", 700: "#2B2B2B" },
        menthe: { 100: "#E7F2EC", 500: "#2F7A55", 700: "#1F5A3D" },
        corail: { 100: "#F7E8E4", 500: "#B5462E", 700: "#8A3220" },
        ligne: "#E3E3E0",
      },
      fontFamily: {
        display: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
        sans: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
        reading: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
        marker: ["var(--font-marker)", "Permanent Marker", "cursive"],
      },
      borderRadius: { "4xl": "1.5rem", "5xl": "2rem" },
      boxShadow: {
        pill: "0 0 0 1px #1414141f",
        card: "0 0 0 1px #1414141f",
        lift: "0 0 0 1px #1414143d, 0 18px 40px -24px #14141440",
        button: "none",
      },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "none" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "scale-in": { from: { opacity: "0", transform: "scale(.96)" }, to: { opacity: "1", transform: "none" } },
        float: { "0%,100%": { transform: "translateY(0) rotate(0)" }, "50%": { transform: "translateY(-14px) rotate(3deg)" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
        "pop": { "0%": { transform: "scale(.6)", opacity: "0" }, "60%": { transform: "scale(1.12)", opacity: "1" }, "100%": { transform: "scale(1)" } },
      },
      animation: {
        "fade-up": "fade-up .5s cubic-bezier(.2,.7,.2,1) both",
        "fade-in": "fade-in .4s ease both",
        "scale-in": "scale-in .25s cubic-bezier(.2,.7,.2,1) both",
        float: "float 7s ease-in-out infinite",
        pop: "pop .5s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
