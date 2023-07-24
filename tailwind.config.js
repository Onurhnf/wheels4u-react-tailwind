/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      height: {
        screen: "100dvh",
      },
      dropShadow: {
        my: "0 5px 5px rgba(0, 0, 0, 0.4)",
        my2: "0 5px 5px rgba(0, 0, 0, 0.5)",
      },
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
        "sidebar-collapsed": "64px auto", //for collapsed sidebar layout
      },
    },
  },
  plugins: [],
};
