import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://varys-tcopd6ap3a-uc.a.run.app',
        changeOrigin: true,
      },
    },
  },
})
