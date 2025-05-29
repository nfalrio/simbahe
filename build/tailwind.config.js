module.exports = {
  content: [
    "./build/index.html",
    "./build/**/*.{html,js,css}", // Adjust this path to match your project structure
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
