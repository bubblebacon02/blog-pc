import { createApp } from "vue";
import "./styles/index.css";
import App from "./App.vue";

import { createPinia } from "pinia";
import routers from "./routers";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(routers);
app.mount("#app");
