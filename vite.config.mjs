import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default ({ mode }) => {
	// Load app-level env vars to node-level env vars.
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		plugins: [react()],
		optimizeDeps: {
			include: ["recoil"],
		},
		build: {
			chunkSizeWarningLimit: 1000,
			sourcemap: false,
			outDir: "dist",
		},
	});
};
