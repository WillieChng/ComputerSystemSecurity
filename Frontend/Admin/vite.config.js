import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import obfuscatorPlugin from 'rollup-plugin-obfuscator';

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
  server: {
    port: 5176,
  }
})
