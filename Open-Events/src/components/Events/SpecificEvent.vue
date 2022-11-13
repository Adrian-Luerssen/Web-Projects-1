<template>
  <div class="box">
    <button class="log_out" v-on:click="$router.go(-1)">Back</button>
    <article class="profile">
      <h1 id="title">{{event}}</h1>
      <img
        class="image_panel"
        id="img"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      />
      <section class = "description_box">
        <h4 id="Description">{{description}}</h4>
      </section>
    </article>
    <section class="information_panel">
      <article class="information">
        <!-- missing to add the actual value in here-->
        <h4 id="Number_of_participants" class="text">Number of participants: 10</h4>
        <!-- missing to add the actual value in here-->
        <h4 id="Capacity" class="text">Capacity: 100</h4>
        <!-- missing to add the actual value in here-->
        <h4 id="Loaction" class="text">Location: Barcelona</h4>
        <!-- missing to add the actual value in here-->
        <section class="rating">
        <h4 id="Rating">Rating: </h4>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
    </section>
      </article>
      <section class="buttons">
        <button class="log_out" v-on:click="joinEvent">Join</button>
      </section>
      <!-- rating system -->
      
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
      event: "Oktoberfest",
      description:
        "The Oktoberfest is the world's largest Volksfest, featuring a beer festival and a travelling funfair.",
      img: "https://www.thebeertimes.com/wp-content/uploads/2017/09/Oktoberfest-Munich.jpg",
      date: "2021-09-18",
    
      
  }),
};

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
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

  .rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }
  #title {
    margin-top: 10%;
  }
  #img {
    width: 40vh;
  }

  .description_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin-top: 10%;
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
    width: 15vh;
    height: 7vh;
    white-space: nowrap;
    border-radius: 20px;
    font-size: large;
    margin-top: 3vh;
    margin-left: 3vh;
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
#Description {
  margin-top: 10%;
  line-height: 1.5;
}
#Number_of_participants {
  margin-top: 10%;
  white-space: nowrap;
  grid-column: 1;
  grid-row: 3;
  text-overflow: ellipsis;
}
#Capacity {
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
