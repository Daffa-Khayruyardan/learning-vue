import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        reactive: "reactive.html",
        ref: "ref.html",
        computed: "computed.html",
        style: "style.html",
        conditional: "conditional.html",
        inputBinding: "inputbinding.html",
        watchers: "watchers.html",
        modals: "modals.html",
        components: "components.html",
      }
    }
  }
})
