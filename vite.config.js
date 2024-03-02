import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['react-bootstrap'], // Exclude problematic dependencies if necessary
  },
  server: {
    proxy: {
      '/api': {
        target:
          process.env.NODE_ENV === 'production'
            ? `http://0.0.0.0:${process.env.PORT}`
            : 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
