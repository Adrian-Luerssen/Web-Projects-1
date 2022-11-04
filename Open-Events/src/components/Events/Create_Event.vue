<template>

  <div class="box">
        <section class="left_information">
            <article class="title">
                <h2>Publish event</h2>
                <img id="img" src="https://thegoldenbutler.com/wp-content/uploads/2017/05/events-768x482.jpg">
            </article>
            <article class="description">
                <h4>Title of the event</h4>
                <input type="text" id="title" name="title" placeholder="Title" minlength="4">
                <h4>Description</h4>

                <textarea type="text" id="description" name="description" cols="40" rows="10" 
                placeholder="Enter a short description of the event to inform teh users about the key point"
                ></textarea>
            </article>
        </section>

        <section class="right_information">
            <article class="events_questionaire">
                <h4 id="start_date_text">Start date of the event: </h4>
                <input id = "start_date_input" type="date" name="date" placeholder="Start date" class="dd/mm/yyyy">
                <h4 id="end_date_text" >End date of the event: </h4>
                <input id = "end_date_input" type="date" name="date" placeholder="End date" class="dd/mm/yyyy">
                <h4 id="attendance_text">Max number of attendants: </h4>
                <input id = "attendance_input" type="number" name="number" placeholder="Max attendants">
                <h4 id="categories_text">Categories: </h4>
                <input id = "categories_input" type="text" name="type" placeholder="Type">
                <h4 id="location_text">Location of the event: </h4>
                <input id = "location_input" type="address" name="type" placeholder="Address" class="address" ref="address">
                <button id="publish_button" type="button" @click="createEvent()">Publish Event</button>
            </article>
        </section>
    </div>

</template>

<script>
import API from '../../API.js';
export default {
    name: 'Create_Event',
    components: {

    },
    data() {
        return {
            longitude: 0,
            latitude: 0,
        };
    },
    mounted() {
        let self = this;
        const autocomplete = new google.maps.places.Autocomplete(this.$refs["address"]);
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
                document.getElementById('title').value,
                "default",
                document.getElementById('address').value.split(',')[0],  
                self.longitude,
                self.latitude,
                document.getElementById('description').value,
                document.getElementById('startInput').value, 
                document.getElementById('endInput').value, 
                document.getElementById('numberInput').value, 
                document.getElementById('typeInput').value,
                localStorage.getItem('ApiToken'));
            }
            
        },
        checkInputs: function () {
            let title = document.getElementById('title').value;
            let address = document.getElementById('address').value;
            let description = document.getElementById('description').value;
            let start = document.getElementById('startInput').value;
            let end = document.getElementById('endInput').value;
            let number = document.getElementById('numberInput').value;
            let type = document.getElementById('typeInput').value;
            if (title == "" || address == "" || description == "" || start == "" || end == "" || number == "" || type == "") {
                alert("Please fill all the fields");
                return false;
            } 

            if (address.split(",")[0]=="" || address.split(",")[1]=="") {
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
        }

    },
};
</script>

  <style scoped>  
  .box{
      color: white;
      display:flex;
      flex-direction: row;
      height: auto;
      width: auto;
    background: #E3A2BA;
    box-sizing: border-box;
    font-weight: normal;
  }

  .left_information{
      margin-left: 5%;
      align-items: center;
      color: white; 
      width: 50%;
      height: 100vh;
  }
  
  #img{
      width: 350px;
      padding: 10mm;
  }
  
  .title{
      white-space: nowrap;
      color: white;
      padding: 10px 10px;
  }
  
  .description{
      flex-direction: column;
      padding: 10px 10px;
      gap: 5px;
      color: white;
      display: grid;
      text-align: left;   
      width: 70%;
  }
  .right_information{
      background-color: #BF6183;
      display: flex;
      flex-direction: row;
      width: 50%;
      height: 100vh;
  }

  .events_questionaire{
      align-self: center;
      margin-left: 5%;
      display: grid;
      column-gap: 5%;
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: repeat(5,1fr);
  }
  hr {
      background-color: cyan;
      height: 0.5mm;
  }
  #start_date_text{
    margin-bottom: 5%;
    grid-row: 1;
    grid-column: 1;
  }
  #start_date_input{
    margin-bottom: 5%;
    grid-row: 1;
    grid-column: 2;
  }
  #end_date_text{
    margin-bottom: 5%;
    grid-row: 2;
    grid-column: 1;
  }
  #end_date_input{
    margin-bottom: 5%;
    grid-row: 2;
    grid-column: 2;
  }
  #attendance_text{
    white-space: nowrap;
    margin-bottom: 5%;
    grid-row: 3;
    grid-column: 1;
  }
  #attendance_input{
    margin-bottom: 5%;
    grid-row: 3;
    grid-column: 2;
  }
  #categories_text{
    margin-bottom: 5%;
    grid-row: 4;
    grid-column: 1;
  }
  #categories_input{
    margin-bottom: 5%;
    grid-row: 4;
    grid-column: 2;
  }
  #location_text{
    margin-bottom: 5%;
    grid-row: 5;
    grid-column: 1;
  }
  #location_input{
    margin-bottom: 5%;
    grid-row: 5;
    grid-column: 2;
  }
  #publish_button{
      color: black;
      background-color: #EBD68B; 
      width: 14vh; 
      height: 4vh;
      margin-top: 10%;
      margin-left: 50%;
  }
  #publish_button:hover{
    background-color: #bca860;
  }
  
  </style>