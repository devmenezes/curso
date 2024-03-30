/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  safelist: [
    "w-6",
    "w-8",
    "w-12",
    "w-14",
    "w-16",
    "h-6",
    "h-8",
    "h-12",
    "h-14",
    "h-16",
  ],
  plugins: [],
  darkMode: "selector",
};