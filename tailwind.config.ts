import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: tailwindcss(),
};
