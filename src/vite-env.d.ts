/// <reference types="vite/client" />

declare module "nprogress";
// declare module "crypto-js";
// declare module "@/cos";
// declare module "spark-md5";
// declare module "element-plus/dist/locale/zh-cn.mjs";

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
