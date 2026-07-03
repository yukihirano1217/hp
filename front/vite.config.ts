import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hp/',
  build: {
    outDir: 'dist', // 明示的に dist を指定
  },
})
