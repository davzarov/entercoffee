/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Lato",
    },
    container: {
      padding: {
        DEFAULT: "10px",
        // lg: '0',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        body: "#e5e5e5",
        dark: "#311a0c",
        grey: {
          DEFAULT: "#777876",
          100: "#e4e4e3",
        },
        accent: {
          DEFAULT: "#c6a383",
          hover: "#8d6d56",
        },
      },
      backgroundImage: {
        pattern: "url('img/body-bg-pattern.png')",
        hero: "url('img/hero/bg.png')",
        menu: "url('img/menu/bg.png')",
        testimonial: "url('img/testimonial/bg.png')",
        newsletter: "url('img/newsletter/bg.png')",
        footer: "url('img/footer/bg.png')",
      },
      keyframes: {
        blur: {
          "0%": { filter: "blur(0px)" },
          "100%": { filter: "blur(5px)" },
        },
      },
      animation: {
        blur: "blur 1.5s 1s infinite linear alternate",
      },
    },
  },
  plugins: [],
};
