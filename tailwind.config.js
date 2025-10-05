/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        green: "#64ffda",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
