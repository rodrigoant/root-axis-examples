import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      external: ['@root-axis/design-system']
    }
  },
  optimizeDeps: {
    include: ['@root-axis/design-system']
  }
})
