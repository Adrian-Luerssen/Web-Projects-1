<template>
  <div class="box">
    <article class="profile">
      <h1 id="title">Profile</h1>
      <img
        class="image_panel"
        id="img"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      />
      <input
        class="image_panel"
        type="file"
        id="profile_photo"
        accept="image/png, image/jpeg"
      />
    </article>
    <section class="information_panel">
      <article class="information">
        <h4 id="First_name" class="text">First name:</h4>
        <input
          type="text"
          id="first_name_text"
          name="first_name"
        />
        <button
          type="button"
          id="change_first_name_button"
          class="button_change"
          @click="storeData('first_name_text')"
        >
          Change...
        </button>
        <h4 id="Last_name" class="text">Last name:</h4>
        <input
          type="text"
          id="last_name_text"
          name="last_name"
          placeholder="Surname"
        />
        <button
          type="button"
          id="change_last_name_button"
          class="button_change"
        >
          Change...
        </button>
        <h4 id="Email" class="email">Email:</h4>
        <input
          type="text"
          id="email_text"
          name="email"
          placeholder="user@gmail.com"
          password
        />
        <button type="button" id="change_email_button" class="button_change">
          Change...
        </button>
        <h4 id="Password" class="password">Password:</h4>
        <input
          type="text"
          id="password_text"
          name="password"
          placeholder="ABCD1234"
        />
        <button type="button" id="change_password_button" class="button_change">
          Change...
        </button>
        <input type="checkbox" id="password_check" onclick="listen(this)">Show Password
      </article>
      
      <article class="buttons">
        <button class="statistics_button" v-on:click="$router.push({ name: 'Statistics'})">Statistics</button>
        <button class="delete_account" v-on:click="dialog = true">Delete account</button>
        <button class="log_out" v-on:click="$router.push({ name: 'Login'})">Log out</button>
      </article>
      
    </section>
  </div>
</template>
<script>
import API from "../../API.js";
export default {
  data: () => {
    return {
      image: "",
    };
  },
  methods: {
    async getProfile() {
      let self = this;
      console.log();
      API.getProfile(
        localStorage.getItem("USER_ID"),
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          console.log(data);
          document.getElementById("first_name_text").value = data[0].name;
          document.getElementById("last_name_text").value = data[0].last_name;
          document.getElementById("email_text").value = data[0].email;
          document.getElementById("password_text").value = data[0].password;
          document.getElementById("img").src = data[0].image;
        });
      });      
    },

    storeData: async function (firstname) {
          //console.log(email);
          //console.log(password);
          //console.log(firstname);
          //console.log(lastname);
          const self = this;
          let res = API.updateName(document.getElementById(firstname).value, localStorage.getItem("API_TOKEN"));
          res.then(function (result) {
              if (result.ok == true) {
                console.log("Data updated successfully");
              }
              else {
                  console.log("There has been an error, the data could not be updated");
              }
          });
      }

  },
  beforeMount() {
    this.getProfile();
  },
};
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
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    margin-bottom: 10%;
  }
  #title {
    margin-top: 10%;
  }
  #img {
    width: 200px;
    padding: 40px;
  }
  .information_panel {
    display: flex;
    flex-direction: column;
    background-color: #bf6183;
  }
  .information {
    margin-top: 15%;
    margin-left: 5%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50%;
    row-gap: 10%;
    column-gap: 5%;
    margin-bottom: 30%;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20%;
    margin-top: -5%;
  }
  .log_out {
    background-color: #401826;
    border: solid #401826;
    color: white;
    width: 20vh;
    height: 7vh;
    white-space: nowrap;
    padding: 2px 5px;
    border-radius: 20px;
    font-size: large;
    margin-top: 3vh;
  }
  .log_out:hover {
    background-color: #63293d;
  }
  .delete_account {
    background-color: #401826;
    border: solid #401826;
    color: white;
    width: 20vh;
    height: 7vh;
    white-space: nowrap;
    padding: 2px 5px;
    border-radius: 20px;
    font-size: large;
    margin-top: 3vh;
  }
  .delete_account:hover {
    background-color: #63293d;
  }
  .statistics_button {
    background-color: #401826;
    border: solid #401826;
    color: white;
    width: 20vh;
    height: 7vh;
    white-space: nowrap;
    padding: 2px 5px;
    border-radius: 20px;
    font-size: large;
    margin-top: 3vh;

  }
  .statistics_button:hover {
    background-color: #63293d;
  }
  #First_name {
    white-space: nowrap;
    grid-column: 1;
    grid-row: 1;
  }
  #first_name_text {
    width: 18vh;
    grid-column: 2;
    grid-row: 1;
  }
  #change_first_name_button {
    grid-column: 3;
    grid-row: 1;
  }
  #Last_name {
    white-space: nowrap;
    grid-column: 1;
    grid-row: 2;
  }
  #last_name_text {
    width: 18vh;
    grid-column: 2;
    grid-row: 2;
  }
  #change_last_name_button {
    grid-column: 3;
    grid-row: 2;
  }
  #Email {
    grid-column: 1;
    grid-row: 3;
  }
  #email_text {
    width: 18vh;
    grid-column: 2;
    grid-row: 3;
  }
  #change_email_button {
    grid-column: 3;
    grid-row: 3;
  }
  #Password {
    grid-column: 1;
    grid-row: 4;
  }
  #password_text {
    width: 18vh;
    grid-column: 2;
    grid-row: 4;
  }
  #change_password_button {
    grid-column: 3;
    grid-row: 4;
  }
@media only screen and (min-width: 758px) {
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
    height: 100%;
  }
  .information {
    margin-top: 30%;
    margin-left: 15%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    column-gap: 10%;
    row-gap: 20%;
    width: 50%;
    margin-bottom: 30%;
  }
  .statistics_button {
    background-color: #401826;
    color: white;
    width: 20vh;
    height: 7vh;
    white-space: nowrap;
    border-radius: 20px;
    font-size: large;
    margin-left: 5%;
  }
  .statistics_button:hover {
    background-color: #63293d;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15%;
  }
  .log_out {
    background-color: #401826;
    color: white;
    width: 20vh;
    height: 7vh;
    white-space: nowrap;
    border-radius: 20px;
    font-size: large;
    margin-left: 10%;
  }
  .log_out:hover {
    background-color: #63293d;
  }
  .delete_account {
    background-color: #401826;
    color: white;
    width: 20vh;
    height: 7vh;
    white-space: nowrap;
    border-radius: 20px;
    font-size: large;
    margin-left: 7%;
  }
  .delete_account:hover {
    background-color: #63293d;
  }
  #First_name {
    white-space: nowrap;
    grid-column: 1;
    grid-row: 1;
  }
  #first_name_text {
    grid-column: 2;
    grid-row: 1;
  }
  #change_first_name_button {
    grid-column: 3;
    grid-row: 1;
  }
  #Last_name {
    white-space: nowrap;
    grid-column: 1;
    grid-row: 2;
  }
  #last_name_text {
    grid-column: 2;
    grid-row: 2;
  }
  #change_last_name_button {
    grid-column: 3;
    grid-row: 2;
  }
  #Email {
    grid-column: 1;
    grid-row: 3;
  }
  #email_text {
    grid-column: 2;
    grid-row: 3;
  }
  #change_email_button {
    grid-column: 3;
    grid-row: 3;
  }
  #Password {
    grid-column: 1;
    grid-row: 4;
  }
  #password_text {
    grid-column: 2;
    grid-row: 4;
  }
  #change_password_button {
    grid-column: 3;
    grid-row: 4;
  }
  
}
</style>
