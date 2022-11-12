<template>
  <div class="box">
        <article class="profile">
            <h1 id="title">Statistics</h1>
            <img class="image_panel" id="img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png">
            <input class="image_panel" type="file" id="profile_photo" accept="image/png, image/jpeg" >
        </article>
        <section class="information_panel">
          <article class="information">
            <h4 id="average_score_for_event" class="text">
              Average score given in events: 23455</h4>
              <!-- missing to add the actual value in here-->
            <h4 id="number_of_comments" class="text">
                Number of comments: 21342</h4>
                <!-- missing to add the actual value in here-->
            <h4 id="more_users_done_more_comments" class="text">
                Users with more comments: 8933</h4>
                <!-- missing to add the actual value in here-->
            <h4 id = "num_events_created" class="text">
                Number of events created: 1234</h4>
                <!-- missing to add the actual value in here-->
            <h4 id = "num_events_joined" class="text">
                Number of events joined: 1234</h4>
                <!-- missing to add the actual value in here-->
            <h4 id = "num_friends" class="text">
                Number of friends: 1234</h4>
                <!-- missing to add the actual value in here-->
          </article>    
            <article class = "buttons">
                <button class = "log_out" v-on:click="$router.push({ name: 'Profile'})">Back to Profile</button>
            </article>
        </section>
  </div>
</template>

<script>


</script>
<style scoped>
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

.buttons{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15%;
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
#more_users_done_more_comments{
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


@media only screen and (max-width: 767px) {
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
.log_out{
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
.log_out:hover {background-color: #63293d}
}

</style>