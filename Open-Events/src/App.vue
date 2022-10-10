
<template>
    <div>
      <div v-for="post in posts" v-bind:key="post.id">
        <h2>{{ post.name }}</h2>
        <p>{{ post.last_name }}</p>
        <img src = {{post.image}} alt = "random image">
        <p>{{ post.id }}</p>
      </div>
    </div>
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
          /* define authorization token*/
          const token = "Bearer, eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTYwNywibmFtZSI6Ik1NTUlNTU0iLCJsYXN0X25hbWUiOiJtZW1lIiwiZW1haWwiOiJtbW1AZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwczovL2hpcHMuaGVhcnN0YXBwcy5jb20vaG1nLXByb2QuczMuYW1hem9uYXdzLmNvbS9pbWFnZXMvamFjay1zcGFycm93LTItMTYwMTMwNTE5Mi5qcGc_Y3JvcD0wLjk0ODQ0NDQ0NDQ0NDQ0NDR4dzoxeGg7Y2VudGVyLHRvcCZyZXNpemU9OTgwOioifQ.WBd7-OcpyCIN_RQM9pBrXkx0oayONNTkhXQy5EFTISw";
          /* define headers */
          const headers = {
            Authorization: token,
          };
          /* define url */
          let response = await fetch("http://puigmal.salle.url.edu/api/v2/users/search?s=mmm@gmail.com",
            {
              method: "GET",
              headers: headers,
            }
          );
          /* get data */
          this.posts = await response.json();
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    },
  
    created() {
      this.getData();
    },
  };
  </script>