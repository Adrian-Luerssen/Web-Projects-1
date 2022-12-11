<template>
  <div class="box">
    <section class="left_information">
      <button class="log_out" v-on:click="$router.go(-1)">Back</button>
      <article class="titlePanel">
        <h2>Update event</h2>
        <img
          id="img"
          src="https://thegoldenbutler.com/wp-content/uploads/2017/05/events-768x482.jpg"
        />
      </article>
      <article class="description">
        <h4>Title of the event</h4>
        <input
          class="input"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          minlength="4"
        />
        <h4>Description</h4>

        <textarea
          type="text"
          class="input"
          id="description"
          name="description"
          cols="40"
          rows="10"
          placeholder="Enter a short description of the event to inform teh users about the key point"
        ></textarea>
      </article>
    </section>
    <section class="right_information">
      <article class="events_questionaire">
        <h4 id="start_date_text">Start date of the event:</h4>
        <input
          id="start_date_input"
          type="date"
          name="date"
          placeholder="Start date"
          class="dd/mm/yyyy"
        />
        <h4 id="end_date_text">End date of the event:</h4>
        <input
          id="end_date_input"
          type="date"
          name="date"
          placeholder="End date"
          class="dd/mm/yyyy"
        />
        <h4 id="attendance_text">Max number of attendants:</h4>
        <input
          id="attendance_input"
          type="number"
          name="number"
          placeholder="Max attendants"
        />
        <h4 id="categories_text">Categories:</h4>
        <input
          id="categories_input"
          type="text"
          name="type"
          placeholder="Type"
        />
        <h4 id="location_text">Location of the event:</h4>
        <input
          id="location_input"
          type="address"
          name="type"
          placeholder="Address"
          class="address"
          ref="address"
        />
        <button id="publish_button" type="button" @click="updateEvent()">
          Update Event
        </button>
      </article>
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
  }),
  methods: {
    async updateEvent() {
      let self = this;
      console.log(window.location.href.split("/").pop());
      if (this.checkInputs()) {
        let response = API.updateEvent(
          document.getElementById("title").value,
          "default",
          document.getElementById("location_input").value.split(",")[0],
          self.longitude,
          self.latitude,
          document.getElementById("description").value,
          document.getElementById("start_date_input").value,
          document.getElementById("end_date_input").value,
          document.getElementById("attendance_input").value,
          document.getElementById("categories_input").value,
          window.location.href.split("/").pop(),
          localStorage.getItem("API_TOKEN")
        );
      }
    },
    displayDate(date) {
      let dateObj = new Date(date);
      let month = dateObj.getUTCMonth() + 1;
      let day = dateObj.getUTCDate();
      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;
      let year = dateObj.getUTCFullYear();
      return year + "-" + month + "-" + day;
    },
    checkInputs: function () {
      let title = document.getElementById("title").value;
      let address = document.getElementById("location_input").value;
      let description = document.getElementById("description").value;
      let start = document.getElementById("start_date_input").value;
      let end = document.getElementById("end_date_input").value;
      let number = document.getElementById("attendance_input").value;
      let type = document.getElementById("categories_input").value;
      if (
        title == "" ||
        address == "" ||
        description == "" ||
        start == "" ||
        end == "" ||
        number == "" ||
        type == ""
      ) {
        alert("Please fill all the fields");
        return false;
      }

      if (address.split(",")[0] == "" || address.split(",")[1] == "") {
        alert("Please fill the address correctly");
        return false;
      }

      if (start > end) {
        alert("The start date must be before the end date");
        return false;
      }

      if (number < 0) {
        alert("The number of attendants must be positive");
        return false;
      }

      if (address.length < 5 || address.length > 45) {
        alert("The address must be between 5 and 45 characters");
        return false;
      }

      if (title.length < 5 || title.length > 45) {
        alert("The title must be between 5 and 45 characters");
        return false;
      }

      if (type.length < 5 || type.length > 45) {
        alert("The type must be between 5 and 45 characters");
        return false;
      }
      if (description.length < 10 || description.length > 201) {
        alert("The description must be between 10 and 200 characters");
        return false;
      }

      return true;
    },
  },
  beforeMount() {
    let self = this;
    API.getEvent(
      window.location.href.split("/").pop(),
      localStorage.getItem("API_TOKEN")
    ).then((response) => {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
        self.event = data[0].name;
        document.getElementById("title").value = self.event;
        self.description = data[0].description;
        document.getElementById("description").value = self.description;
        self.img = data[0].image;
        document.getElementById("start_date_input").value = self.displayDate(
          data[0].eventStart_date
        );
        document.getElementById("end_date_input").value = self.displayDate(
          data[0].eventEnd_date
        );
        self.capacity = data[0].n_participators;
        document.getElementById("attendance_input").value = self.capacity;
        self.location = data[0].location;
        document.getElementById("location_input").value = self.location;
        document.getElementById("categories_input").value = data[0].type;
      });
    });
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
  margin-bottom: 5%;
  margin-left: 25%;
  margin-right: 70%;
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

.box {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  background: #e3a2ba;
  box-sizing: border-box;
  font-weight: normal;
  position: relative;
}

.left_information {
  align-items: center;
  color: white;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
}
.input {
  width: 350px;
  margin-left: 0%;
  margin-right: auto;
}
#img {
  width: 350px;
  display: flex;
  margin-left: auto - 3%;
  margin-right: auto;
  margin-top: 3%;
}

.titlePanel {
  color: white;
  width: 100%;
  display: grid;
  margin-bottom: 0%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.description {
  flex-direction: column;
  gap: 10px;
  color: white;
  display: grid;
  text-align: left;
  width: 100%;
  justify-content: center;
}
.right_information {
  background-color: #bf6183;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30%;
  margin-bottom: 2%;
}

.events_questionaire {
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  column-gap: 5%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
}
hr {
  background-color: cyan;
  height: 0.5mm;
}
#start_date_text {
  margin-bottom: 5%;
  grid-row: 1;
  grid-column: 1;
}
#start_date_input {
  margin-bottom: 5%;
  grid-row: 1;
  grid-column: 2;
}
#end_date_text {
  margin-bottom: 5%;
  grid-row: 2;
  grid-column: 1;
}
#end_date_input {
  margin-bottom: 5%;
  grid-row: 2;
  grid-column: 2;
}
#attendance_text {
  white-space: nowrap;
  margin-bottom: 5%;
  grid-row: 3;
  grid-column: 1;
}
#attendance_input {
  margin-bottom: 5%;
  grid-row: 3;
  grid-column: 2;
}
#categories_text {
  margin-bottom: 5%;
  grid-row: 4;
  grid-column: 1;
}
#categories_input {
  margin-bottom: 5%;
  grid-row: 4;
  grid-column: 2;
}
#location_text {
  margin-bottom: 5%;
  grid-row: 5;
  grid-column: 1;
}
#location_input {
  margin-bottom: 5%;
  grid-row: 5;
  grid-column: 2;
}
#publish_button {
  color: black;
  background-color: #ebd68b;
  width: 14vh;
  height: 6vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 25%;
}
#publish_button:hover {
  background-color: #bca860;
}

@media only screen and (min-width: 768px) {
  .box {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: auto;
    background: #e3a2ba;
    box-sizing: border-box;
    font-weight: normal;
    position: relative;
    overflow: hidden;
  }

  .left_information {
    margin-left: 0%;
    margin-top: 0%;
    align-items: center;
    color: white;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }

  #img {
    width: 350px;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .title {
    white-space: nowrap;
    color: white;
  }

  .description {
    flex-direction: column;
    padding: 10px 10px;
    gap: 5px;
    color: white;
    display: grid;
    text-align: left;
    width: 70%;
  }
  .right_information {
    background-color: #bf6183;
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    overflow-y: hidden;
  }

  .events_questionaire {
    align-self: center;
    margin-left: 5%;
    display: grid;
    column-gap: 5%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  hr {
    background-color: cyan;
    height: 0.5mm;
  }
  #start_date_text {
    margin-bottom: 5%;
    grid-row: 1;
    grid-column: 1;
  }
  #start_date_input {
    margin-bottom: 5%;
    grid-row: 1;
    grid-column: 2;
  }
  #end_date_text {
    margin-bottom: 5%;
    grid-row: 2;
    grid-column: 1;
  }
  #end_date_input {
    margin-bottom: 5%;
    grid-row: 2;
    grid-column: 2;
  }
  #attendance_text {
    white-space: nowrap;
    margin-bottom: 5%;
    grid-row: 3;
    grid-column: 1;
  }
  #attendance_input {
    margin-bottom: 5%;
    grid-row: 3;
    grid-column: 2;
  }
  #categories_text {
    margin-bottom: 5%;
    grid-row: 4;
    grid-column: 1;
  }
  #categories_input {
    margin-bottom: 5%;
    grid-row: 4;
    grid-column: 2;
  }
  #location_text {
    margin-bottom: 5%;
    grid-row: 5;
    grid-column: 1;
  }
  #location_input {
    margin-bottom: 5%;
    grid-row: 5;
    grid-column: 2;
  }
  #publish_button {
    color: black;
    background-color: #ebd68b;
    width: 14vh;
    height: 4vh;
    margin-top: 10%;
    margin-left: 50%;
  }
  #publish_button:hover {
    background-color: #bca860;
  }
}
</style>
