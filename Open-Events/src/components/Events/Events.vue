<template>
  <header class="header_events">
    <h2 class="app_title">Open Events</h2>
    <img src="https://cdn-icons-png.flaticon.com/512/4406/4406119.png" 
    class="chat_btn" v-on:click="$router.push({ name: 'ChatList'})"/>
  </header> 
    <section class="table_panel">
      <!-- search box -->
      <section class="search_box">
        <input type="text" class="search_message" placeholder="Search..." />
        <section class="buttons_section">
          <button class="search_button" v-on:click="searchEvents()">Search</button>
          <select class="filters" name="filters" id="filters_id">
            <option value="">--Select filter--</option>
            <option value="event_creator_rating">Event creator rating</option>
            <option value="by_name">Search by name</option>
            <option value="by_location">Search by location</option>
            <option value="by_date">Search by date</option>
          </select>
        </section>
      </section>
      <v-list>
        <v-list-item v-for="item in events" :key="item.id" two-line>
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
        </v-list-item>
      </v-list>
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
  methods: {
    async loadAllEvents() {
      let self = this;
      console.log("loadAllEvents");
      let res = API.getAllEvents(localStorage.getItem("API_TOKEN"));
      res.then(function (response) {
        response.json().then(function (data) {
          self.events = data;
          console.log(self.events);
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
    changeData(filter) {
      let self = this;
      self.filter = filter;
      if (filter == "event_creator_rating") {
        self.getEventsByRating();
      } else if (filter == "by_name") {
        self.getEventsByName();
      } else if (filter == "by_location") {
        self.getEventsByLocation();
      } else if (filter == "by_date") {
        self.getEventsByDate();
      } else {
        console.log("Error");
      }
    },
    async getEventsByRating() {
      let self = this;
      console.log("loadEventsByRating");
      let res = API.getEventsByRating(localStorage.getItem("API_TOKEN"), self.events);
      res.then(function (response) {
        response.json().then(function (data) {
          self.events = data;
          console.log(self.events);
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

computed: {
  function filteredElements() {
    return this.elements.filter((p) => {
      // return true if the product should be visible

      // in this example we just check if the search string
      // is a substring of the event name (case insensitive)
      return p.event.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
    });
  }
}
</script>
<style scoped>
.search_box {
  width: 100%;
  height: 15vh;
  background-color: #bf6183;
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
  width: 90%;
  height: 5vh;
}

.search_button {
  width: 20vh;
  height: 4vh;
  border-radius: 10px;
  border: 1px solid #e3a2ba;
  background: #e3a2ba;
  color: white;
  font-size: 2vh;
  font-weight: bold;
  margin-left: 3%;
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
  border: 1px solid #e3a2ba;
  background: #e3a2ba;
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
  background-color: #66293e;
  height: 15%;
  padding: 10px 10px;
  width: 85%;
  border: solid#E3A2BA;
  gap: 2vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 3vh 10vh;
  overflow: auto;
}
.image_events {
  display: none;
  grid-column: 1;
  grid-row: 2;
}
.title {
  display: flex;
  justify-content: flex-start;
  grid-column: 2;
  grid-row: 1;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: medium;
}
.description {
  grid-column: 2;
  grid-row: 2;
  color: rgb(255, 213, 241);
  text-align: center;
  font-size: small;
  justify-content: right;
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
}

@media only screen and (min-width: 767px) {
  .header_events {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #bf6183;
    width: 100%;
    height: 10vh;
  }

  .chat_btn {
    width: 7vh;
    height: 7vh;
    white-space: nowrap;
    font-size: large;
    margin-right: 2%;
  }

  .app_title{
    font-size: 4vh;
    font-weight: bold;
    margin-left: 2%;
  }

  .filters {
    width: 20vh;
    height: 4vh;
    border-radius: 10px;
    border: 1px solid #e3a2ba;
    background: #e3a2ba;
    color: white;
    font-size: 2vh;
    font-weight: bold;
    margin-left: 3%;
  }
  .search_box {
    width: 100%;
    height: 15vh;
    background-color: #bf6183;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    display: flex;
  }

  .buttons_section {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    display: flex;
  }

  .filter_search_dropdown {
    width: 10vh;
    height: 5vh;
    align-self: flex-start;
    background-color: #d7dbdd;
  }

  .search_message {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d7dbdd;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 30%;
    height: 5vh;
  }

  .search_button {
    width: 20vh;
    height: 4vh;
    border-radius: 10px;
    border: 1px solid #e3a2ba;
    background: #e3a2ba;
    color: white;
    font-size: 2vh;
    font-weight: bold;
    margin-left: 3%;
  }

  .table_panel {
    height:100%;
    width:100%;
    flex-direction: column;
    align-items: center;
    background-color: #e3a2ba;
  }
  .event_box {
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 25%;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 25px;
    background-color: #66293e;
    height: 23vh;
    padding: 10px 10px;
    width: auto;
    max-width: 70vh;
    border: solid#E3A2BA;
    gap: 2vh;
    display: grid;
    grid-template-columns: 15vh 45vh;
    grid-template-rows: 3vh 10vh;
    overflow: auto;
  }
  .image_box {
    width: 40%;
    height: 30%;
    border-radius: 25px;
    grid-column: 1;
    grid-row:2;
    margin-left: 5%;
  }
  .image_events {
    width: 10vh;
    height: 10vh;
    border-radius: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
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
    color: rgb(255, 213, 241);
    text-align: center;
    font-size: medium;
    justify-content: right;
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
