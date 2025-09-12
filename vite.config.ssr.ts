import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    outDir: 'dist/server', // ✅ Where prerender.js looks
    rollupOptions: {
      input: path.resolve(__dirname, 'src/entry-server.tsx')
    },
    emptyOutDir: false // ✅ Prevents wiping out dist/index.html
  },
  ssr: {
    external: ['react-helmet-async']
  }
})
