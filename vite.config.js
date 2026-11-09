import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const sharedWebRoot = fileURLToPath(new URL('../jc_mall_web/src', import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@shared': sharedWebRoot,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5175,
    strictPort: true,
    fs: {
      allow: [projectRoot, fileURLToPath(new URL('..', import.meta.url))],
    },
    proxy: {
      '/api': {
        target: process.env.VITE_PROXY_TARGET || 'http://localhost:3000',
        changeOrigin: true,
      },
      '/uploads': {
        target: process.env.VITE_PROXY_TARGET || 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
