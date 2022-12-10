import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), process?.env?.ODR ? viteSingleFile() : null],
  optimizeDeps: {
    include: ["recoil"],
  },

  build: {
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    outDir: process?.env?.ODR ? "odr-dist" : "dist",
  },
});
