import { createApp } from "vue";
import "./styles/index.css";
import App from "./App.vue";

import { createPinia } from "pinia";
import routers from "./routers";

// 全局注册组件
import { registerApp } from "@/global";


const pinia = createPinia();

const app = createApp(App);
registerApp(app);
app.use(pinia);
app.use(routers);
app.mount("#app");
