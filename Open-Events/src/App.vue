<template>
    <header>
      <Navbar2 />
    </header>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Login from "./components/Login/Login.vue";
import SignUp from "./components/Login/SignUp.vue";
import Statistics from "./components/Profile/Statistics.vue";
import Navbar2 from "./components/Navbar/Navbar2.vue";
import router from "./router";
router.push("/");
export default {
  name: "app",
  components: { Navbar2, Login, SignUp, Statistics },

  data: () => {
    return {
      component: "Navbar2",
    };
  },
};
</script>

<style>
body{
  font-family: 'montserrat', sans-serif;
}
header {
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: #224C84;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
