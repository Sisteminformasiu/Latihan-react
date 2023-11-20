import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Opsi ini akan mengonfigurasi format output ke ESM
    rollupOptions: {
      output: {
        format: "esm",
      },
    },
  },
});
