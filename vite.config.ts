import VitePluginLinaria from '@linaria/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginLinaria(),
  ],
  base: 'https://MeganxLi.github.io/coffee-guide',
})
