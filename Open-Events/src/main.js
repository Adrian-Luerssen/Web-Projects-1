import { createApp } from 'vue'
import App from './App.vue'
import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createRouter, createWebHistory } from 'vue-router'
import router from "./router/index.js"

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");