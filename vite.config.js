import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
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
};
