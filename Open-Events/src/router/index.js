import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import Events from '../components/Events/Events.vue';

const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Events',
        name: 'Events',
        component: Events
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
