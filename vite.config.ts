import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src', 'renderer') }
    ],
  },
  root: './src/renderer',
  server: {
    open: false,
    port: 3000,
  },
  plugins: [vue()]
})
