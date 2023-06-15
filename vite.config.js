import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
});
