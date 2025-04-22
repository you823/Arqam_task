import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/https://yourusername.github.io/your-repo-name/', // Add this for GitHub Pages
  build: {
    outDir: 'dist', // Vite's default build directory
  }
})
