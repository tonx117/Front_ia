import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias para la carpeta src
      "@public": path.resolve(__dirname, "public"), // Alias para la carpeta public
    },
  },
});
