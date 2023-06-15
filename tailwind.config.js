/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // important: true,
  theme: {
    fontFamily: {
      da_c: "Poppins",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      backgroundColor: {
        main: "#17181a",
      },
      textColor: {
        custom: "#7284A8",
      },
      spacing: {
        line: "2px",
      },
    },
  },
  plugins: [],
};
