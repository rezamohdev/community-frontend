/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    screens: { sm: "375px", md: "768px", lg: "1024px", xl: "1280px" },
    extend: {
      colors: {
        postBackground: "rgb(249	249	249)",
        postForground: "rgb(255	255	255	)",
        primary: "#123E23",
        accent: "#F6C825",
        green: "#4FA161",
        blue: "#575AA4",
        pink: "#94498C",
        yellow: "#B6A362",
        white: "#FFFFFF",
        red: "#ff0000",
        formBackground: "#4d4f58",
        formBorder: "#83848a",
        grey: "#F0F0F0",
      },
      fontSize: {
        "card-title": "28px",
        "section-title": "32px",
      },
      fontFamily: {
        text: ["Inter", "Helvetica", "Arial", "sans"],
        title: ["Esteban", "cursive"],
      },
      maxWidth: {
        xlPageContent: "1200px",
        lgPageContent: "944px",
        mdPageContent: "728px",
        smPageContent: "320px",
      },
    },
  },
  plugins: [],
};
