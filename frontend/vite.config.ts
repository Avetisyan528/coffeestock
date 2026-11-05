import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative assets work on both GitHub Pages project paths and custom domains.
  base: "./",
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  build: {
    rollupOptions: {
      // Unlinked internal pages served at /research/ and /placeholders/.
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        research: fileURLToPath(new URL("./research/index.html", import.meta.url)),
        placeholders: fileURLToPath(new URL("./placeholders/index.html", import.meta.url)),
      },
    },
  },
});
