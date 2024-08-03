import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from "vite-plugin-env-compatible"
import tailwindcss from "tailwindcss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});