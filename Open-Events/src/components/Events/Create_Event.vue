<template>
  <div class="box">
    <section class="left_information">
      <article class="titlePanel">
        <h2>Publish event</h2>
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
        <button id="publish_button" type="button" @click="createEvent()">
          Publish Event
        </button>
      </article>
    </section>
  </div>
</template>

<script>
import API from "../../API.js";
export default {
  name: "Create_Event",
  components: {},
  data() {
    return {
      longitude: 0,
      latitude: 0,
    };
  },
  mounted() {
    let self = this;
    const autocomplete = new google.maps.places.Autocomplete(
      this.$refs["address"]
    );
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      this.latitude = place.geometry.location.lat();
      this.longitude = place.geometry.location.lng();
    });
  },
  methods: {
    createEvent: function () {
      let self = this;
      if (this.checkInputs()) {
        let response = API.createEvent(
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
          localStorage.getItem("API_TOKEN")
        );
      }
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

      return true;
    },
  },
};
</script>

<style scoped>
.box {
  -webkit-overflow-scrolling: touch;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  background: #4C566A;
  box-sizing: border-box;
  font-weight: normal;
  overflow-y: scroll;
  position: relative;
}

.left_information {
  align-items: center;
  color: white;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
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
  margin-bottom: 7%;
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
  background-color: #344058;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50vh;
  margin-bottom: 7%;
}

.events_questionaire {
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  row-gap: 3%;
}
hr {
  background-color: cyan;
  height: 0.5mm;
}
#start_date_text {
  margin-bottom: 5%;
}
#start_date_input {
  margin-bottom: 5%;
}
#end_date_text {
  margin-bottom: 5%;
}
#end_date_input {
  margin-bottom: 5%;
}
#attendance_text {
  white-space: nowrap;
  margin-bottom: 5%;
}
#attendance_input {
  margin-bottom: 5%;
}
#categories_text {
  margin-bottom: 5%;
}
#categories_input {
  margin-bottom: 5%;
}
#location_text {
  margin-bottom: 5%;
}
#location_input {
  margin-bottom: 5%;
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
    background: #4C566A;
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
    color: white;
    display: grid;
    text-align: left;
    width: 70%;
  }
  .right_information {
    background-color: #434C5E;
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
    row-gap: 5%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 5vh);
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
    color: white;
    background-color: #005B88;
    width: 14vh;
    height: 4vh;
    margin-top: 10%;
    margin-left: 50%;
  }
  #publish_button:hover {
    background-color: #007dbb;
  }
}
</style>
