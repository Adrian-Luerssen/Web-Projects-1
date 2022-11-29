import { createApp } from 'vue'
import App from './App.vue'
import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "./router/index.js"
import axios from 'axios';





/* define vue */
const app = createApp(App);
app.use(bottomNavigationVue);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.globalProperties.$axios = axios;
app.mount('#app');
