import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    hmr: {
      clientPort: 443,
      host: 'hackmann-heizoel.de',
    },
    allowedHosts: ['hackmann-heizoel.de', 'www.hackmann-heizoel.de'],
  },
  preview: {
    host: "::",
    port: 8080,
    strictPort: true,
    allowedHosts: ['hackmann-heizoel.de', 'www.hackmann-heizoel.de'],
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
