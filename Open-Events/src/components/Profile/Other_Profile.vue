<template>
  <div class="box">
    <button class="log_out" v-on:click="$router.go(-1)">Back</button>
    <article class="profile">
      <h1 id="title">Ronaldinho</h1>
      <img
        class="image_panel"
        id="img"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      />
    </article>
    <section class="information_panel">
      <article class="information">
        <h4 id="Name" class="text">Name:</h4>
        <!-- missing to add the actual value in here-->
        <h4 id="Last_name" class="text">Last Name:</h4>
        <!-- missing to add the actual value in here-->
        <h4 id="Number_of_friends" class="text">Friends:</h4>
        <!-- missing to add the actual value in here-->
        <h4 id="Events_joined" class="text">Events joined:</h4>
        <!-- missing to add the actual value in here-->
      </article>
    </section>
  </div>
</template>

<script>
import API from "../../API.js";
export default {
  data: () => {
    return {
      image: "",
    };
  },
  methods: {
    async getProfile() {
      let self = this;
      console.log();
      API.getProfile(
        window.location.href.split("/").pop(),
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          console.log(data);
          document.getElementById("title").innerHTML = data[0].name;
          document.getElementById("Name").innerHTML = "Name: " + data[0].name;
          document.getElementById("Last_name").innerHTML =
            "Last Name: " + data[0].last_name;
          document.getElementById("Number_of_friends").innerHTML =
            "Friends: " + data[0].friends;
          document.getElementById("img").src = data[0].image;
        });
      });

      API.getProfileFriends(
        window.location.href.split("/").pop(),
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          //console.log(data);
          document.getElementById("Number_of_friends").innerHTML =
            "Friends: " + data.length;
        });
      });

      API.getProfileEvents(
        window.location.href.split("/").pop(),
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          //console.log(data);
          document.getElementById("Events_joined").innerHTML =
            "Events Attended: " + data.length;
        });
      });
    },
  },
  beforeMount() {
    this.getProfile();
  },
};
</script>
<style scoped>
.box {
  background: #e3a2ba;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  height: auto;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 50%;
  margin-left: 25%;
  padding: 2vh 0vh;
}
#title {
  margin-top: 10%;
}
#img {
  width: 40vh;
}

.information_panel {
  display: flex;
  flex-direction: column;
  background-color: #bf6183;
  width: 100%;
  height: 100vh;
}
.information {
  margin-top: 15%;
  margin-left: 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 5%;
  row-gap: 20%;
  width: 40%;
  margin-bottom: 30%;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15%;
}

.log_out {
  background-color: #401826;
  border: solid #401826;
  color: white;
  width: 25vh;
  height: 7vh;
  white-space: nowrap;
  border-radius: 20px;
  font-size: large;
  margin-top: 3vh;
}
.log_out:hover {
  background-color: #63293d;
}

#Name {
  margin-top: 10%;
  white-space: nowrap;
  grid-column: 1;
  grid-row: 1;
}
#Last_name {
  margin-top: 10%;
  white-space: nowrap;
  grid-column: 1;
  grid-row: 2;
}
#Number_of_friends {
  margin-top: 10%;
  white-space: nowrap;
  grid-column: 1;
  grid-row: 3;
  text-overflow: ellipsis;
}
#Events_joined {
  margin-top: 10%;
  white-space: nowrap;
  grid-column: 1;
  grid-row: 4;
}
#Loaction {
  margin-top: 10%;
  white-space: nowrap;
  grid-column: 1;
  grid-row: 5;
}

@media only screen and (min-width: 767px) {
  .box {
    background: #e3a2ba;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    display: flex;
    flex-direction: row;
    height: 100vh;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    width: 50%;
  }
  #title {
    margin-top: 10%;
  }
  #img {
    width: 300px;
    padding: 40px;
  }

  .information_panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #bf6183;
    width: 50%;
    height: 100vh;
  }
  .information {
    margin-top: 15%;
    margin-left: 15%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    column-gap: 5%;
    row-gap: 20%;
    width: 40%;
    margin-bottom: 30%;
  }
  .log_out {
    background-color: #401826;
    border: solid #401826;
    color: white;
    width: 20vh;
    height: 7vh;
    white-space: nowrap;
    border-radius: 20px;
    font-size: large;
    margin-top: 2%;
    margin-left: 2%;
  }
  .log_out:hover {
    background-color: #63293d;
  }
}
</style>
