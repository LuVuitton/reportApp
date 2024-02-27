import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://luvuitton.github.io/reportApp",
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
