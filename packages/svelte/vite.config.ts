import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@root-axis/design-system': '@root-axis/design-system/dist/ra-design-system.es.js',
    },
  },
  build: {
    rollupOptions: {
      external: ['@root-axis/design-system']
    }
  },
  
  optimizeDeps: {
    include: ['@root-axis/design-system']
  }
})
