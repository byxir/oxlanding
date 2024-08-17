/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,astro}",
    "./components/**/*.{ts,tsx,astro}",
    "./app/**/*.{ts,tsx,astro}",
    "./src/**/*.{ts,tsx,astro}",
  ],
  prefix: "",
  theme: {
    container: {},
    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        campton: "campton",
      },
      borderRadius: {
        xg: "20px",
      },
      boxShadow: {
        blend: "inset 0 0px 200px 100px rgba(0, 0, 0, 1)",
      },
      maxWidth: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        blurBase: "rgba(172, 204, 218, 0.07)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
