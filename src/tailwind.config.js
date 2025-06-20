module.exports = {
  content: [
    "./src/index.html",
    "./src/lapangan-bulanan.html",
    "./build/**/*.{html,css,js}", // Adjust this path to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
