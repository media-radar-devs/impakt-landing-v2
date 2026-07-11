import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vite's dev server serves index.html for unknown routes by default (appType: 'spa')
})
