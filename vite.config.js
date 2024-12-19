import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "./public/index.html", // Entry point
    },
    outDir: "dist", // Output directory
  },
});
