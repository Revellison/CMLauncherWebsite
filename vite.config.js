import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    port: 3000,
    host: true,
  },
  // Добавляем конфигурацию для GitHub Pages с кастомным доменом
  define: {
    'process.env.VITE_BASE_URL': JSON.stringify('https://cmlauncher.ru'),
  }
})
