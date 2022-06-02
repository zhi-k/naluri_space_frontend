import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), WindiCSS()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
