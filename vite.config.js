import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-plugin-vue-svg'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
  ],
  resolve: {
    alias: {
    '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    cssPreprocessOptions: {
      scss: {
        additionalData: '@import "./src/styles/_variables.scss";'
      }
    }
  },
})
