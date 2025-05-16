import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss(),],

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: resolve(__dirname, 'src/Pages/about/index.html')
      }
    }
  }
})
