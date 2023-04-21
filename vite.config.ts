import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

import path from "path";

// https://cn.vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./types"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/style/pre/index.scss';`,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      include: [/\.vue$/],
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
