<template>
    <section class="table_panel">
      <!-- chat section where only in mobile is the image that goes to chat-->
      
        <img class="goChat" src="https://cdn-icons-png.flaticon.com/512/134/134914.png?w=360" @click="$router.push({name: 'ChatList'})"/>
      <!-- search box -->
      <section class="search_box">
        <input type="text" v-model="search" class="search_message" id="search_message" placeholder="Search..." />
        <section class="buttons_section">
          <button class="search_button" v-on:click="changeData()">Search</button>
          <select class="filters" name="filters" id="filters_id">
            <option value="">--Select filter--</option>
            <option value="event_creator_rating">Event creator rating</option>
            <option value="by_name">Search by name</option>
            <option value="by_location">Search by location</option>
            <option value="by_date">Search by date</option>
          </select>
        </section>
      </section>
      <!-- events -->
      <section class="events_section">
        <div v-for="item in filteredElements" :key="item.id" two-line>
          <article class="event_box" v-on:click="$router.push({ name:'SpecificEvent', params:{id: item.id}})">
            <div class="image_box">
              <img
                class="image_events"
                src="https://fotografias.antena3.com/clipping/cmsimages02/2022/09/13/4E016859-5F7C-46D3-92AB-E79CA8345834/mercedes-benz-fashion-week-madrid-2022-semana-moda-madrid_98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=low&format=webply"
              />
            </div>
            <b class="title">{{ item.name }}</b>
            <p class="description">{{ item.description }}</p>
            <b class="date">{{ displayDate(item.date)}}</b>
            <b class="location">{{ item.location }}</b>
          </article>
        </div>
    </section>
    </section>
</template>

<script>
import API from "../../API.js";
export default {
  data: () => ({
    events: [],
    search: "",
    filter: "",
  }),
  computed: {
    filteredElements: function () {
      return this.events.filter(element => {
          return element.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    async loadAllEvents() {
      let self = this;
      console.log("loadAllEvents");
      let res = API.getAllEvents(localStorage.getItem("API_TOKEN"));
      res.then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          self.events = data;
        });
      });
    },
    
    displayDate(date) {
      let dateObj = new Date(date);
      let month = dateObj.getUTCMonth() + 1;
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();
      return day + "/" + month + "/" + year;
    },
    changeData() {
      let self = this;
      let filter = document.getElementById("filters_id").value;
      console.log(filter);
      if (filter == "event_creator_rating") {
        self.getEventsByRating();
      } else if (filter == "by_name") {
        self.getEventsByName();
      } else if (filter == "by_location") {
        self.getEventsByLocation();
      } else if (filter == "by_date") {
        self.getEventsByDate();
      } else {
        this.loadAllEvents();
      }
    },
    async getEventsByRating() {
      console.log("LOADEventsByRating");
      let self = this;
      let filter = document.getElementById("search_message").value;
      
      let res = API.getEventsByRating(localStorage.getItem("API_TOKEN"), filter);
      res.then(function (response) {
        response.json().then(function (data) {
          self.events = data;
        });
      });
    },
    async getEventsByName() {
      let self = this;
      let filter = document.getElementById("search_message").value;
      
      let res = API.getEventsByName(localStorage.getItem("API_TOKEN"), filter);
      res.then(function (response) {
        response.json().then(function (data) {
          self.events = data;
        });
      });
    },
    async getEventsByLocation() {
      let self = this;
      let filter = document.getElementById("search_message").value;
      
      let res = API.getEventsByLocation(localStorage.getItem("API_TOKEN"), filter);
      res.then(function (response) {
        response.json().then(function (data) {
          self.events = data;
        });
      });
    },

    async getEventsByDate() {
      let self = this;
      let filter = document.getElementById("search_message").value;
      
      let res = API.getEventsByDate(localStorage.getItem("API_TOKEN"), filter);
      res.then(function (response) {
        response.json().then(function (data) {
          self.events = data;
        });
      });
    },


    searchEvents() {
      let self = this;
      console.log("search");
      let filter = document.getElementById("filters_id").value;
      this.changeData(filter);
    },

  },
  beforeMount() {
      this.loadAllEvents();
      //this.loadYourEvents();
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

.goChat {
  width: 15%;
  height: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: right;
}

.search_box {
  padding-top: 10%;
  width: 100%;
  height: 100%;
  background-color: #005B88;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
}

.search_message {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d7dbdd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
}

.search_button {
  width: 20vh;
  height: 4vh;
  border-radius: 10px;
  background: #3B4252;
  border: 1px solid white;
  color: white;
  font-size: 2vh;
  font-weight: bold;
  margin-left: 3%;
}

.events_section {
    grid-column: 2;
    background-color: #4C566A;
    height: 100vh;
    overflow-y: scroll;
  }

.buttons_section {
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  margin-top: 2%;
}

.filters {
  width: 20vh;
  height: 4vh;
  border-radius: 10px;
  border: 1px solid white;
  background: #3B4252;
  color: white;
  font-size: 2vh;
  font-weight: bold;
  margin-left: 3%;
}
.event_box {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;
  margin-right: 5%;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 25px;
  background-color: #3B4252;
  height: 30vh;
  padding: 10px 10px;
  width: 80%;
  border: solid#005B88;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 60% 20%;
  overflow: auto;
}
.image_events {
    margin-top: 10%;
    margin-left: 10%;
    grid-template-columns: 1;
    grid-template-rows: 2;
    width: 13vh;
    height: 13vh;
    border-radius: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}
.title {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  grid-column: 1;
  grid-row: 1;
  color: white;
  font-weight: bold;
  font-size: medium;
}
.description {
  grid-column: 2;
  grid-row: 2;
  color: rgb(255, 213, 241);
  text-align: center;
  font-size: small;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.date {
  display: flex;
  justify-content: flex-end;
  color: #fff;
  grid-column: 2;
  grid-row: 1;
}

.location{ 
  color: #fff;
  grid-column: 2;
  grid-row: 3;
  font-size: small;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

@media only screen and (min-width: 767px) {

  .goChat {
    width: 0%;
    height: 0%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: right;
    margin-right: 1%;
  }
  .table_panel {
    min-height: 100vh;
    overflow: hidden; 
    width: 100%;
    display: grid;
    grid-template-columns: 30% 70%;
    background-color: #4C566A;
  }

  .events_section {
    grid-column: 2;
    background-color: #4C566A;
    height: 100vh;
    overflow-y: scroll;
  }
  .filters {
    width: 100%;
    height: 5vh;
    border-radius: 10px;
    border: 2px solid black;
    background: #434C5E;
    color: white;
    font-size: 2vh;
    font-weight: bold;
    margin-left: 3%;
  }
  .search_box {
    grid-column: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #434C5E;
    padding-top: 10%;
  }

  .buttons_section {
    flex-direction: column;
    display: flex;
    width: 30%;
    height: 12vh;
    justify-content: space-between;
    margin-top: 0;
  }


  .search_message {
    background-color: #d7dbdd;
    border-radius: 10px;
    width: 60%;
    height: 5vh;
  }

  .search_button {
    width: 100%;
    height: 5vh;
    border-radius: 10px;
    background: #434C5E;
  }



  .event_box {
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 25px;
    background-color: #3B4252;
    height: auto;
    width: 80%;
    border: solid#005B88;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 20% 60% 20%;
    justify-items: center;
    align-items: center;
    overflow: hidden;
  }
  .image_box {
    width: 40%;
    height: 30%;
    border-radius: 25px;
    grid-column: 1;
    grid-row:2;
    margin-top: 10%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: center;
  }
  .image_events {
    width: 10vh;
    height: 10vh;
    border-radius: 80%;
    border-style: solid;
    border-color: #005B88;  
  }
  .title {
    grid-column: 2;
    grid-row: 1;
    color: white;
    display: match-parent;
    justify-content: center;
    font-weight: bold;
    text-align: center;
    font-size: large;
  }
  .description {
    grid-column: 2;
    grid-row: 2;
    color: #005B88;
    font-size: medium;
    overflow: hidden;
  }
  .date {
    color: white;
    font-weight: bold;
    width: match-parent;
    height: match-parent;
    display: match-parent;
    justify-content: flex-start;
    grid-column: 1;
    grid-row: 1;
    font-size: small;
  }
}

</style>
