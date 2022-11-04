import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import Events from '../components/Events/Events.vue';
import CreateEvent from '../components/Events/Create_Event.vue';
import Profile from '../components/Profile/Profile.vue'
import UpcomingEvents from '../components/Profile/UpcomingEvents.vue'

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
    },
    {
        path: '/CreateEvent',
        name: 'CreateEvent',
        component: CreateEvent
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/UpcomingEvents',
        name: 'UpcomingEvents',
        component: UpcomingEvents
    }

];

/* create router */
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;