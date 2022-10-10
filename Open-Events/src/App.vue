<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup


</script>
<template>
    <h1> GELLOOOOO </h1>
    <!--call getData method on page load-->
    <button @click="getData">Get Data</button>
    
</template>


<script>
export default {
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async getData() {
      try {
        /*define auth token */
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTYwNywibmFtZSI6Ik1NTUlNTU0iLCJsYXN0X25hbWUiOiJtZW1lIiwiZW1haWwiOiJtbW1AZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwczovL2hpcHMuaGVhcnN0YXBwcy5jb20vaG1nLXByb2QuczMuYW1hem9uYXdzLmNvbS9pbWFnZXMvamFjay1zcGFycm93LTItMTYwMTMwNTE5Mi5qcGc_Y3JvcD0wLjk0ODQ0NDQ0NDQ0NDQ0NDR4dzoxeGg7Y2VudGVyLHRvcCZyZXNpemU9OTgwOioifQ.WBd7-OcpyCIN_RQM9pBrXkx0oayONNTkhXQy5EFTISw";
        /*define headers */
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        /*define url */
        const url = "http://puigmal.salle.url.edu/api/v2/users/search?s=mmm@gmail.com";
        /*fetch data */
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        /*convert to json */
        const data = await response.json();
        /*set posts to data */
        this.posts = data;
        // JSON responses are automatically parsed.
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    created() {
      this.getData();
    },
  },
};
</script>