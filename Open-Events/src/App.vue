<template>
  <component
    v-bind:is="component"
    v-on:switch-to-signUp="component = 'SignUp'"
    v-on:switch-to-Login="component = 'Login'"
    v-on:switch-to-navbar="component = 'Navbar'"
  ></component>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Login from "./components/Login/Login.vue";
import SignUp from "./components/Login/SignUp.vue";
import router from "./router";
router.push("/");
export default {
  name: "App",
  components: { Navbar, Login, SignUp },

  data: () => {
    return {
      component: "Login",
    };
  },
};
</script>

<style>
body {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(
    to right,
    #e3a2ba 0%,
    #e3a2ba 33%,
    #bf6183 33%,
    #bf6183 66%,
    #e3a2ba 66%,
    #e3a2ba 100%
  );
  box-sizing: border-box;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
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
