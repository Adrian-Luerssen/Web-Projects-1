import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
app.use(bottomNavigationVue);
