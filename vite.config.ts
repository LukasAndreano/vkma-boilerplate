import { defineConfig, loadEnv } from "vite";

import path from "path";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import svgr from "@honkhonk/vite-plugin-svgr";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), svgr(), process?.env?.ODR ? viteSingleFile() : null],
    resolve: { alias: { src: path.resolve("src/") } },
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
