import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Unocss from "unocss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        {
          "lodash-es": ["debounce"],
        },
      ],
      dts: true,
      dirs: ["./src/utils", "./src/hooks"],
      vueTemplate: true,
    }),
    Unocss(),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
})
