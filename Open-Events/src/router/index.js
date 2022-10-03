import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import Events from '../components/Events/Events.vue';

/* define routes as objects*/
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Events',
        name: 'Events',
        component: Events
    }
];

/* create router */
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;