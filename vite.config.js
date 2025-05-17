import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/', // Ensure this matches your GitHub repo name
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          framer: ['framer-motion'],
          vendor: ['react-router-dom', 'react-syntax-highlighter'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    sourcemap: false,
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  }
})git push origin --delete gh-pages