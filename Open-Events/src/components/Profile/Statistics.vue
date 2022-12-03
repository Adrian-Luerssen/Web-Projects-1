<template>
  <div class="box">
        <article class="profile">
            <h1 id="title">Statistics</h1>
            <img class="image_panel" id="img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png">
            <input class="image_panel" type="file" id="profile_photo" accept="image/png, image/jpeg" >
        </article>
        <section class="information_panel">
          <article class="information">
            <h4 id="average_score_for_event" class="text">Average score given in events: </h4>
            <h4 id="number_of_comments" class="text">Number of comments: </h4>
            <h4 id="users_done_less_comments" class="text">Users with less comments: </h4>
            <h4 id = "num_events_joined" class="text">Number of events joined: </h4>
            <h4 id = "num_friends" class="text">Number of friends: </h4>
          </article>    
            <article class = "buttons">
                <button class = "log_out" v-on:click="$router.push({ name: 'Profile'})">Back to Profile</button>
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
    async getStats() {
      API.getStatistics(
        localStorage.getItem("USER_ID"),
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          //console.log(data);
          document.getElementById("average_score_for_event").innerHTML = "Average score given in events: " + data[0].avg_score;
          document.getElementById("number_of_comments").innerHTML = "Number of comments: " + data[0].num_comments;
          document.getElementById("users_done_less_comments").innerHTML = "Users with less comments: " + data[0].percentage_commenters_below + "%";
        });
      });
      API.getFriends(
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          document.getElementById("num_friends").innerHTML = "Number of friends" + data.length;
        });
      });
      API.getPastEvents(
        localStorage.getItem("USER_ID"),
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          console.log(data.length);
          document.getElementById("num_events_joined").innerHTML = "Number of events joined: " + data.length;
        });
      });
    },
  },
  beforeMount() {
    this.getStats();
  },
};



</script>
<style scoped>

.box{
    background: #E3A2BA;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    display:flex;
    flex-direction: column;
    height: auto;
}

.profile{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white; 
  width: 50%;
  margin-left: 25%;
  padding: 2vh 0vh;
}
#title{
  margin-top: 10%;
}
#img{
    width: 40vh;
}

.information_panel{
  display: flex;
  flex-direction: column;
  background-color: #BF6183;
  width: 100%;  
  height: 100vh;  
}
.information{
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


.buttons{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  
}
.log_out{
  background-color: #401826;
  border: solid #401826;
  color: white;
  width: 25vh;
  height: 7vh;
  white-space: nowrap;
  border-radius: 20px;
  font-size: large;
  
}
.log_out:hover {background-color: #63293d}


#average_score_for_event{
    margin-top: 10%;
    white-space: nowrap;
    grid-column: 1;
    grid-row: 1;    
}
#number_of_comments{
    margin-top: 10%;
    white-space: nowrap;
    grid-column: 1;
    grid-row: 2;
}
#users_done_less_comments{
    margin-top: 10%;
    white-space: nowrap;
    grid-column: 1;
    grid-row: 3;
    text-overflow : ellipsis;
}
#num_events_created{
    margin-top: 10%;
    white-space: nowrap;
    grid-column: 1;
    grid-row: 4;
}
#num_events_joined{
    margin-top: 10%;
    white-space: nowrap;
    grid-column: 1;
    grid-row: 5;
}
#num_friends{
    margin-top: 10%;
    white-space: nowrap;
    grid-column: 1;
    grid-row: 6;
}


@media only screen and (min-width: 767px) {

  .box{
    background: #E3A2BA;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    display:flex;
    flex-direction: row;
    height: 100vh;
}

.profile{
  display: flex;
  flex-direction: column;
    align-items: center;
    color: white; 
    width: 50%;
}
#title{
  margin-top: 10%;
}
#img{
    width: 300px;
    padding: 40px;
}

.information_panel{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #BF6183;
  width: 50%;  
  height: 100vh;  
}
.information{
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
.log_out{
  background-color: #401826;
  border: solid #401826;
  color: white;
  width: 30vh;
  height: 10vh;
  white-space: nowrap;
  border-radius: 20px;
  font-size: large;
  margin-bottom : 10%;
}
.log_out:hover {background-color: #63293d}

}
  


</style>