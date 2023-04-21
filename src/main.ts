import elementPlusIcons from "@/plugins/element-plus-icons";
import router from "@/router";
import store from "@/store";
import "@/style/import/index.sass";
import { createApp } from "vue";
import App from "./App.vue";
import 'animate.css';

createApp(App)
  .use(router)
  .use(store)
  .use(elementPlusIcons)
  .mount("#app");
