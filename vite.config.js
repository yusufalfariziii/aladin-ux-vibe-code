import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from /aladin-ux-vibe-code/
  base: "/aladin-ux-vibe-code/"
});