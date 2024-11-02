export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-m": "fadeM 0.5s ease-out forwards",
        "bounce-right": "bounceRight 0.3s ease-out forwards",
        "bounce-left": "bounceLeft 0.3s ease-out forwards",
      },
      keyframes: {
        bounceRight: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(8px)" },
          "100%": { transform: "translateX(0px)" },
        },
        bounceLeft: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-8px)" },
          "100%": { transform: "translateX(0px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeM: {
          "0%": { opacity: "0" }, // початкова прозорість 0
          "100%": { opacity: "1" }, // кінцева прозорість 1
        },
      },
      colors: {
        alto: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#dddddd",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
        shark: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#171717",
        },
      },
    },
  },
  plugins: [],
};
