import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    base: command === 'build' && import.meta.env.VITE_DEPLOY_ENV === 'github' 
      ? '/react-hw-01/' 
      : '/',
    build: {
      outDir: 'dist'
    }
  }
})
