import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: "entry-server.tsx",
    outDir: "dist/server",
    rollupOptions: {
      input: "entry-server.tsx"
    }
  }
});
