import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
    outDir: 'dist/server', // 👈 required so prerender.js can import it
    rollupOptions: {
      input: path.resolve(__dirname, 'src/entry-server.tsx')
    },
    emptyOutDir: false // ✅ prevents deleting dist/index.html
  },
  ssr: {
    external: ['react-helmet-async'] // Avoid bundling this
  }
})
