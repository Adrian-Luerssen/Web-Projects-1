
<template>
    <div class="home">
        <h1>Home</h1>
        <h2 id = temp v-on:click="tmp()">text</h2>
        
    </div>
</template>

<script>

export default {
  name: 'Create_Event',
  components: {
    
  },
  data() {
    return {
      login_sign: true,
    };
  },
  methods: {
    tmp() {
      document.getElementById('temp').innerHTML = localStorage.getItem('ApiToken');
    }
  },
};
</script>