import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'
import obfuscatorPlugin from 'rollup-plugin-obfuscator';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.NODE_ENV === 'production' && obfuscatorPlugin({
      compact: true,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      debugProtection: true,
      debugProtectionInterval: true,
      disableConsoleOutput: true,
    }),
  ],
  build: {
    sourcemap: false, // Disable source maps in production
  },
  server: {
    port: 5175,
    https: false,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false, // Set to false to accept self-signed certificates
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});