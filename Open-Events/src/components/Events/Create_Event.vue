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
            <table id="new-event-form">
                <form>
                    <tr>
                        <td>
                            <h4 id="start_date" class="date">
                                Start date of the event: </h4>
                        </td>
                        <td><input id = "startInput" type="date" name="date" placeholder="Start date" class="dd/mm/yyyy">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h4 id="end_date" class="date">
                                End date of the event: </h4>
                        </td>
                        <td><input id = "endInput" type="date" name="date" placeholder="End date" class="dd/mm/yyyy">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h4 id="attendants" class="attendants">
                                Maximum number of attendants: </h4>
                        </td>
                        <td><input id = "numberInput" type="number" name="number" placeholder="Max attendants" class="attendants">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4 id="tag" class="tags">
                                Categories: </h4>
                        </td>
                        <td><input id = "typeInput" type="text" name="type" placeholder="Type" class="tags">
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h4 id="location" class="location">
                                Location of the event: </h4>
                        </td>
                    </tr>
                </form>
            </table>

            <input id = "address" type="address" name="type" placeholder="Address" class="address" ref="address">

        </section>
        <button type="button" @click="createEvent()">Publish Event</button>
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
  *{
      margin: 0;
      width: auto;
      height: auto;
      
  }
  
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
  button{
      white-space: nowrap;
      margin-top:60%;
      margin-left: -24%;
      padding: 2px 18px;
      color: black;
      font-size: 16px;
      background-color: #EBD68B;
      
  }
  .left_information{
      align-items: center;
      color: white; 
      width: 50%;
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
  }
  .right_information{
      background-color: #BF6183;
      display: flex;
      flex-direction: row;
      width: 50%;
  }
  
  #new-event-form {
      align-self: center;
      border-collapse: collapse;
      border-style: hidden;
      border-spacing: 0px 15px;
      margin-left: 15%;
  }
  
  
  th, td {
      border-bottom: 2px solid cyan;
      height: 50px;
      width: 150px;
      text-align: center;
      padding: 0px;
  }
  hr {
      background-color: cyan;
      height: 0.5mm;
  }
  .date{
      white-space: nowrap;
      display:flex;
      flex-direction: row;
      padding: 2px 10px;
  }
  .price{
      white-space: nowrap;
      display:flex;
      flex-direction: row;
      padding: 2px 10px;
  }
  .location{
      white-space: nowrap;
      display:flex;
      flex-direction: row;
      padding: 2px 10px;
  }
  .tags{
      white-space: nowrap;
      display:flex;
      flex-direction: row;
      padding: 4px 10px;
  }
  
  </style>