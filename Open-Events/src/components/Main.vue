<template>
    <div id="app" key= {{this.loginVisibility}} v-if = this.loginVisibility>
        <Navbar/>
    </div>
    <Login/>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';
import Login from './Login/Login.vue';

var loginVisibility;
export default {
    name: 'App',
    components: { Navbar, Login },
    data: () => ({
        loginVisibility: true
    }),
    functions: {
        loginSetVisibilityNavbar: function(){
            this.loginVisibility = true;
            console.log(this.loginVisibility);
            console.log('ha entrado en loginSetVisibilityNavbar');
        }
    }
};
</script>