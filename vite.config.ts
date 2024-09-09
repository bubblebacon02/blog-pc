import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 此处是element-plus的按需引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入自定义的样式文件进行覆盖
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
      less: {
        additionalData: `@import '@/styles/mixis.less'; @import '@/styles/var.less';`,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
