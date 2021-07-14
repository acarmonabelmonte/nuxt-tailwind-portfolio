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
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },

  theme: {
    darkSelector: '.dark-mode'
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
