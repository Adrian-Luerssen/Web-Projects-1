import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import Events from '../components/Events/Events.vue';
import CreateEvent from '../components/Events/Create_Event.vue';

/* define routes as objects*/
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
    },
    {
        path: '/CreateEvent',
        name: 'CreateEvent',
        component: CreateEvent
    }
];

/* create router */
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;