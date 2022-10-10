<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { RouterLink } from 'vue-router';


</script>

<template>
    <RouterLink to="/"></RouterLink>
  <h1>OPEN EVENTS</h1>
  <div>
    <input id = "emailField" type="email" placeholder="email" v-model="email">
  </div>
  <div>
    <input id = "passwordField" type="password" placeholder="password" v-model="password">
  </div>
  <div>
    <button id="loginButton" to=./components/home.vue class="btn btn-primary" @click="login" >Login</button>
    <router-link to="/Home" tag="loginButton">foo</router-link>
  </div>
  <div>
    <span id = "loginError"></span>
  </div>
</template>


<script>
  methods: {
    login() {
      const email = document.getElementById('emailField').value;
      const password = document.getElementById('passwordField').value;
      router.push({ name: 'Home' });
    },
  },

</script>







<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>