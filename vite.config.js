// vite.config.js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        projet1: resolve(__dirname, "pages/arcanes_tarot.html"),
        projet2: resolve(__dirname, "pages/carte_touristique.html"),
      },
    },
  },
});