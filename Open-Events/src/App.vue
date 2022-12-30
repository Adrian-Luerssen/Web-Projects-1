<template>
  <component
    v-bind:is="component"
    v-on:switch-to-signUp="component = 'SignUp'"
    v-on:switch-to-Login="component = 'Login'"
    v-on:switch-to-navbar="component = 'Navigation'"
    v-on:switch-to-statistics="component = 'Statistics'"
  ></component>
</template>

<script>
import Navigation from "./components/Navbar/Navigation.vue";
import Login from "./components/Login/Login.vue";
import SignUp from "./components/Login/SignUp.vue";
import Statistics from "./components/Profile/Statistics.vue";
import router from "./router";
export default {
  name: "App",
  components: { Navigation, Login, SignUp, Statistics },

  data: () => {
    return {
      component: "Login",
    };
  },
  beforeMount() {
    this.$router.push("/");
  },
};
</script>

<style>
body {
  background-color: #4C566A;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
}

* {
  margin: 0;
  width: auto;
  height: auto;
}
h1 {
  font-size: 3em;
  line-height: 1.5;
}

h2 {
  font-size: 2.5em;
  line-height: 1;
}
h3 {
  font-size: 1.7em;
  line-height: 0.8;
}

h4 {
  font-size: 1em;
  line-height: 0.5;
}
h5 {
  font-size: 0.7em;
  line-height: 0.3;
}
</style>
