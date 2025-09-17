import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    root: 'user-panel',
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'user-panel'),
      },
    },
    build: {
      outDir: '../dist-user',
    },
    server: {
      port: 5173,
      open: true,
    },
  }
})
