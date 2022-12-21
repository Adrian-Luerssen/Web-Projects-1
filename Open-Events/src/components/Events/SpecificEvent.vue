<template>
  <div class="box">
    <button class="log_out" v-on:click="$router.go(-1)">Back</button>
    <article class="profile">
      <h1 id="title">{{ event }}</h1>
      <img
        class="image_panel"
        id="img"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      />
      <section class="description_box">
        <h4 id="Description">{{ description }}</h4>
      </section>
    </article>
    <section class="information_panel">
      <article class="information">
        <!-- missing to add the actual value in here-->
        <h4 id="Number_of_participants" class="text">
          Number of participants: {{ attendants }}
        </h4>
        <!-- missing to add the actual value in here-->
        <h4 id="Capacity" class="text">Capacity: {{ capacity }}</h4>
        <!-- missing to add the actual value in here-->
        <h4 id="Loaction" class="text">Location: {{ location }}</h4>
        <!-- missing to add the actual value in here-->
        <section class="rating">
          <h4 id="Rating">Rating:</h4>
          <div id= "stars" class="stars">
            
          </div>
        </section>
        <section class="user_rating">
          <input
            class="rating_value"
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
          />
          <button class="submit_rating">Submit</button>
        </section>
      </article>
      <section class="buttons">
        <button class="log_out" v-on:click="joinEvent">{{ joinText }}</button>
        <button class="log_out" v-on:click="shareEvent">Share</button>
      </section>
      <!-- rating system -->
    </section>
  </div>
</template>

<script>
import API from "../../API.js";
export default {
  data: () => ({
    event: "",
    description: "",
    img: "",
    date: "",
    event_id: 1,
    capacity: 0,
    location: "",
    rating: 0,
    attendants: 0,
    is_attending: false,
    joinText: "Join",
  }),
  methods: {
    joinEvent() {
      let self = this;
      if (this.is_attending) {
        API.leaveEvent(
          window.location.href.split("/").pop(),
          localStorage.getItem("API_TOKEN")
        ).then((response) => {
          console.log(response);
          self.is_attending = false;
          self.joinText = "Join";
          alert("You have left the event!");
          self.updateEvent();
        });
      } else {
        API.joinEvent(
          window.location.href.split("/").pop(),
          localStorage.getItem("API_TOKEN")
        ).then((response) => {
          console.log(response);
          self.is_attending = true;
          self.joinText = "Leave";
          alert("You have joined the event!");
          self.updateEvent();
        });
      }
    },
    shareEvent() {
      alert("You have shared the event!");
    },
    updateEvent() {
      let self = this;
      API.getEvent(
        window.location.href.split("/").pop(),
        localStorage.getItem("API_TOKEN")
      ).then((response) => {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          self.event = data[0].name;
          self.description = data[0].description;
          self.img = data[0].image;
          self.date = data[0].date;
          self.capacity = data[0].n_participators;
          self.location = data[0].location;
        });
      });

      API.getEventAssistances(
        window.location.href.split("/").pop(),
        localStorage.getItem("API_TOKEN")
      ).then((response) => {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          self.attendants = data.length;
          let numPunctuation = 0;
          for (let i = 0; i < data.length; i++) {
            //console.log(data[i].id, "  ", localStorage.getItem("USER_ID"));
            if (data[i].id == localStorage.getItem("USER_ID")) {
              self.is_attending = true;
              self.joinText = "Leave";
              //console.log("is attending");
            }
            if (data[i].puntuation != null) {
              self.rating += data[i].puntuation;
              numPunctuation++;
            }
          }
          if (numPunctuation != 0) {
            self.rating = self.rating / numPunctuation;
            self.rating = self.rating/2;
          }
          console.log("rating: ",self.rating);
          //based on rating change class of stars to match
          var ratingElement = document.getElementById("stars");

          // Calculate the number of full stars
          var fullStars = Math.floor(self.rating);
          // clear stars
          ratingElement.innerHTML = "";
          // Create the full stars
          for (var i = 0; i < fullStars; i++) {
            var starElement = document.createElement("i");
            starElement.className = "fa fa-star";
            starElement.classList.add("checked");
            starElement.style.color = "orange";
            ratingElement.appendChild(starElement);
          }

          // Calculate if there should be a half star
          if (self.rating - fullStars >= 0.5) {
            var halfStarElement = document.createElement("i");
            halfStarElement.className = "fa fa-star-half-alt";
            halfStarElement.style.color = "orange";
            ratingElement.appendChild(halfStarElement);
            fullStars++;
          }
          //add empty stars for the rest
          for (var i = 0; i < 5 - fullStars; i++) {
            var starElement = document.createElement("i");
            starElement.className = "far fa-star";
            starElement.style.color = "orange";

            ratingElement.appendChild(starElement);
          }
        });
      });
    },
  },
  beforeMount() {
    this.updateEvent();
  },
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
.checked {
  color: orange;
}
.rating {
  grid-row: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.user_rating {
  grid-row: 2;
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
  flex-direction: row;
  justify-content: space-evenly;
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
