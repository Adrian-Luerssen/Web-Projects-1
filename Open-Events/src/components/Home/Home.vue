
<template>
    <div class="home">
        <h1>Home</h1>
        <h2 id = temp v-on:click="tmp()">text</h2>
        
    </div>
</template>

<script>
import mainFunctions from '../main.vue';

export default {
  name: 'Create_Event',
  components: {
    mainFunctions,
  },
  data() {
    return {
      login_sign: true,
    };
  },
  methods: {
    tmp() {
      //document.getElementById('temp').innerHTML = app.apiToken;
    }
  },
};
</script>