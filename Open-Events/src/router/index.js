import { createRouter, createWebHistory } from 'vue-router';
import Events from '../components/Events/Events.vue';
import CreateEvent from '../components/Events/Create_Event.vue';
import Profile from '../components/Profile/Profile.vue';
import UpcomingEvents from '../components/Profile/UpcomingEvents.vue';
import Friends from '../components/Profile/Friends.vue';
import SpecificEvent from '../components/Events/SpecificEvent.vue';
import Chat from '../components/Profile/Chat.vue';
/* define routes as objects*/
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Events
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
    },
    {
        path: '/Friends',
        name: 'Friends',
        component: Friends
    },
    {
        path: '/SpecificEvent/:id',
        name: 'SpecificEvent',
        component: SpecificEvent
    },
    
    {
        path: '/Chat/:id',
        name: 'Chat',
        component: Chat
    }
];

/* create router */
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;