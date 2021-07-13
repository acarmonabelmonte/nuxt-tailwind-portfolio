module.exports = {
  purge: [
    './src/pages/**/*.{html,js}',
     './src/components/**/*.{html,js}',
     './src/layouts/**/*.{html,js}',
     './src/index.html',
  ],
  mode: 'jit',
  darkMode: "class",
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },

  theme: {
    extend: {},
  },
  plugins: [],
}
