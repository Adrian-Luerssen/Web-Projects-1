<template>
  <section class="box">
    <component
      v-bind:is="component"
      v-on:switch-to-specificEvent="component = 'SpecificEvent'"
    ></component>
    <section class="panel_upcoming_events">
      <h3 class="title_panel">Upcoming Events</h3>
      <v-list>
        <v-list-item v-for="item in upcomingEvents" :key="item.event" two-line>
          <article class="event_box">
            <h4 class="title">{{ item.name }}</h4>
            <h4 class="date">{{ displayDate(item.eventStart_date) }}</h4>
            <button
              class="more_info_button"
              v-on:click="
                $router.push({ name: 'SpecificEvent', params: { id: item.id } })
              "
            >
              More info
            </button>
          </article>
        </v-list-item>
      </v-list>
    </section>
    <section class="panel_past_events">
      <h3 class="title_panel">Past Events</h3>
      <v-list>
        <v-list-item v-for="item in pastEvents" :key="item.event" two-line>
          <article class="event_box">
            <h4 class="title">{{ item.name }}</h4>
            <h4 class="date">{{ displayDate(item.eventStart_date) }}</h4>
            <button
              class="more_info_button"
              v-on:click="
                $router.push({ name: 'SpecificEvent', params: { id: item.id } })
              "
            >
              More info
            </button>
          </article>
        </v-list-item>
      </v-list>
    </section>
    <section class="panel_personal_events">
      <h3 class="title_panel">Your Events</h3>
      <v-list>
        <v-list-item v-for="item in myEvents" :key="item.event" two-line>
          <article class="event_box">
            <h4 class="title">{{ item.name }}</h4>
            <h4 class="date">{{ displayDate(item.eventStart_date) }}</h4>
            <button
              class="edit_info_button"
              v-on:click="
                $router.push({ name: 'EditEvent', params: { id: item.id } })
              "
            >
              Edit info
            </button>
          </article>
        </v-list-item>
      </v-list>
    </section>
  </section>
</template>

<script>
import SpecificEvent from "./SpecificEvent.vue";
import API from "../../API.js";

export default {
  name: "UpcomingEvents",
  components: { SpecificEvent },
  data: () => ({
    upcomingEvents: [],
    pastEvents: [],
    myEvents: [],
  }),
  methods: {
    async loadUpcomingEvents() {
      let self = this;
      console.log("loadUpcomingEvents");
      let res = API.getAttendedEvents(
        localStorage.getItem("USER_ID"),
        localStorage.getItem("API_TOKEN")
      );
      res.then(function (response) {
        response.json().then(function (data) {
          for (let i = 0; i < data.length; i++) {
            if (new Date(data[i].eventStart_date) < new Date()) {
              self.pastEvents.push(data[i]);
            } else {
              self.upcomingEvents.push(data[i]);
            }
          }
          console.log(self.upcomingEvents);
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
    async loadmyEvents() {
      let self = this;
      let res = API.getProfileEvents(
        localStorage.getItem("USER_ID"),
        localStorage.getItem("API_TOKEN")
      );
      res.then(function (response) {
        response.json().then(function (data) {
          self.myEvents = data;
        });
      });
    },
  },
  beforeMount() {
    this.loadUpcomingEvents();
    this.loadmyEvents();
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
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1em 1em;
}
.panel_past_events {
  align-self: center;
  background-color: #3B4252;
  border: solid #005B88;
  border-width: 3px;
  font-size: medium;
  border-radius: 5px;
  width: 100%;
  height: 30vh;
  margin-left: 10%;
  margin-right: 10%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.panel_personal_events {
  align-self: center;
  background-color: #3B4252;
  border: solid #005B88;
  border-width: 3px;
  border-radius: 5px;
  width: 100%;
  height: 30vh;
  margin-left: 25%;
  margin-right: 25%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.panel_upcoming_events {
  align-self: center;
  background-color: #3B4252;
  border: solid #005B88;
  border-width: 3px;
  border-radius: 5px;
  width: 100%;
  height: 30vh;
  margin-left: 10%;
  margin-right: 10%;
  overflow: scroll;
}
.event_box {
  margin-bottom: 5%;
  margin-left: 15%;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 25px;
  background-color: #0c71a4;
  height: 7vh;
  width: 65%;
  border: solid #005B88;
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 10px 5px;
  color: #401826;
  display: grid;
  grid-template-columns: 7vh 7vh 7vh 7vh;
  grid-template-rows: 3.5vh 2.5vh;
  position: relative;
}

.more_info_button {
  background-color: #401826;
  color: white;
  width: 10vh;
  height: 5vh;
  white-space: nowrap;
  padding: 2px 5px;
  border-radius: 20px;
  position: absolute;
  right: 5%;
  bottom: 25%;
}
.more_info_button:hover {
  background-color: #63293d;
}
.edit_info_button {
  background-color: #3a3b3c;
  color: white;
  width: 10vh;
  height: 5vh;
  white-space: nowrap;
  padding: 2px 5px;
  border-radius: 20px;
  position: absolute;
  right: 5%;
  bottom: 25%;
}
.edit_info_button:hover {
  background-color: #646464;
}
.title {
  color: white;
  font-weight: bold;
  padding: 0px 5px;
  grid-column: 1 / 3;
  grid-row: 1;
}
.date {
  color: white;
  padding: 0px 5px;
  grid-column: 1 / 3;
  grid-row: 2;
}
.title_panel {
  margin-top: -5%;
}

@media only screen and (min-width: 768px) {
  .box {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #3B4252;
    overflow-y: scroll;
  }
  .panel_past_events {
    align-self: center;
    background-color: #262a35;
    border: solid #005B88;
    border-width: thick;
    border-radius: 5px;
    width: 70vh;
    height: 70vh;
    margin-left: 5%;
    margin-right: 5%;
    overflow-y: scroll;
  }
  .panel_personal_events {
    align-self: center;
    background-color: #262a35;
    border: solid #005B88;
    border-width: thick;
    border-radius: 5px;
    width: 70vh;
    height: 70vh;
    margin-right: 5%;
    margin-left: 0%;
    overflow-y: scroll;
  }
  .panel_upcoming_events {
    align-self: center;
    background-color: #262a35;
    border: solid #005B88;
    border-width: thick;
    border-radius: 5px;
    width: 70vh;
    height: 70vh;
    margin-left: 5%;
    margin-right: 0%;
    overflow-y: scroll;
  }

  .event_box {
    margin-bottom: 5%;
    margin-left: 15%;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 25px;
    background-color: #0c71a4;
    height: 10vh;
    width: 70%;
    border: solid #005B88;
    display: flex;
    flex-direction: row;
    align-items: left;
    padding: 10px 10px;
    color: #401826;
    display: grid;
    grid-template-columns: 10vh 10vh 10vh 10vh;
    grid-template-rows: 5vh 4vh;
    position: relative;
  }

  .more_info_button {
    background-color: #401826;
    color: white;
    width: 10vh;
    height: 5vh;
    white-space: nowrap;
    padding: 2px 5px;
    border-radius: 20px;
    grid-column: 2;
    margin-top: 30%;
  }
  .more_info_button:hover {
    background-color: #63293d;
  }

  .edit_info_button {
    background-color: #3a3b3c;
    color: white;
    width: 10vh;
    height: 5vh;
    white-space: nowrap;
    padding: 2px 5px;
    border-radius: 20px;
    grid-column: 2;
    margin-top: 30%;
  }
  .edit_info_button:hover {
    background-color: #646464;
  }
  .title {
    white-space: nowrap;
    color: white;
    font-weight: bold;
    padding: 0px 5px;
    grid-column: 1;
    grid-row: 1;
  }
  .date {
    color: white;
    padding: 12px 5px;
    grid-column: 1;
    grid-row: 2;
  }

  .title_panel_personal {
    color: white;
    font-weight: bold;
    padding: 0px 5px;
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .title_panel_past {
    color: white;
    font-weight: bold;
    padding: 0px 5px;
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .title_panel_upcoming {
    color: white;
    font-weight: bold;
    padding: 0px 5px;
    grid-column: 1 / 3;
    grid-row: 1;
  }
}
.title_panel {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  padding: 30px 10px;
}

.buttons {
  width: 70vh;
  height: 70vh;
  margin-top: 10%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
}
.statistics_button {
  background-color: #401826;
  border: solid #401826;
  color: white;
  width: 30vh;
  height: 10vh;
  white-space: nowrap;
  padding: 2px 5px;
  border-radius: 20px;
  font-size: large;
  margin-top: 3vh;
  margin-left: 15vh;
}
.statistics_button:hover {
  background-color: #63293d;
}

.manage_account_button {
  background-color: #401826;
  border: solid #401826;
  color: white;
  width: 30vh;
  height: 10vh;
  white-space: nowrap;
  padding: 2px 5px;
  border-radius: 20px;
  font-size: large;
  margin-top: 5vh;
  margin-left: 15vh;
}
.manage_account_button:hover {
  background-color: #63293d;
}
</style>
