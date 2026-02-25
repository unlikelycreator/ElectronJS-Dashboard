// vite.config.js   (replace entire content)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Optional: make sure assets from node_modules are served
  server: {
    fs: {
      allow: ['.', './node_modules'],
    },
  },
})