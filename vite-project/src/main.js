import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
// element3需要分别引入库和样式
import element3 from "element3";
import "element3/lib/theme-chalk/index.css";
// 引入全局样式
import "styles/index.scss";

createApp(App)
.use(element3)
.use(store)
.use(router)
.mount('#app')
