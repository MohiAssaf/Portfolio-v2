/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
  theme: {
    extend: {
      colors: {
        navy: "#07111f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        green: "#64ffda",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "0.2", transform: "scale(0.5)" },
        },
        drift: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-2%, -2%)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        drift: "drift 20s linear infinite",
        "twinkle-drift":
          "twinkle 3s ease-in-out infinite, drift 20s linear infinite",
      },
    },
  },
  plugins: [],
};
