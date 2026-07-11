import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // SPA fallback: serve index.html for any unknown route
    historyApiFallback: true,
  },
})
