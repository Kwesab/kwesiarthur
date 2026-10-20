import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Target modern browsers — keeps bundle smaller
    target: "es2020",
    // Warn when any single chunk exceeds 600 KB
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor code into a separate cacheable chunk
        manualChunks: {
          react:  ["react", "react-dom"],
          motion: ["motion"],
        },
      },
    },
  },

  // Ensure clean asset paths for deployment sub-paths if needed
  base: "/",
});
