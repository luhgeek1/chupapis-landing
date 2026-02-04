import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/chupapis-landing/',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  }
})
