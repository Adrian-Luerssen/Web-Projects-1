<template>
    <div id="app" v-if = loginVisibility>
        <Navbar/>
    </div>
    <Login/>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';
import Login from './Login/Login.vue';


const Comp = {
    template: '<div v-if = loginVisibility><Navbar/></div>'
}

var loginVisibility;
export default {
    name: 'App',
    components: { Navbar, Login },
    data: () => ({
        components: [Comp]
    }),
    methods: () => ({
        add() {
        loginVisibility =true;
        this.components.push(Comp)
        },
    }),
};
</script>