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
        <input type="text" id="first_name_text" name="first_name" v-model = firstName />
        <button
          type="button"
          id="change_first_name_button"
          class="button_change"
          @click="storeName('first_name_text')"
        >
          Change...
        </button>
        <h4 id="Last_name" class="text" >Last name:</h4>
        <input
          type="text"
          id="last_name_text"
          v-model = lastName
          name="last_name"
          placeholder="Surname"
        />
        <button
          type="button"
          id="change_last_name_button"
          class="button_change"
          @click="storeSurname('last_name_text')"
        >
          Change...
        </button>
        <h4 id="Email" class="email">Email:</h4>
        <input
          type="text"
          id="email_text"
          v-model = email
          name="email"
          placeholder="user@gmail.com"
        />
        <button
          type="button"
          id="change_email_button"
          class="button_change"
          @click="storeEmail('email')"
        >
          Change...
        </button>

        <h4 id="Password" class="password">Password:</h4>
        <input
          type="password"
          id="password_text"
          name="password"
          placeholder="ABCD1234"
        />
        <button
          type="button"
          id="change_password_button"
          class="button_change"
          @click="storePassword('password_text')"
        >
          Change...
        </button>
        <input
          type="checkbox"
          id="password_check"
          @click="togglePassword()"
        />Show Password
      </article>

      <article class="buttons">
        <button
          class="statistics_button"
          v-on:click="$router.push({ name: 'Statistics' })"
        >
          Statistics
        </button>
        <button class="delete_account" @click="openDialog()">
          Delete account
        </button>
        <button class="log_out" @click="reload()">Log out</button>
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async getProfile() {
      let self = this;
      API.getProfile(
        localStorage.getItem("USER_ID"),
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          console.log(data);
          self.firstName = data[0].name;
          self.lastName = data[0].last_name;
          self.email = data[0].email;
          //document.getElementById("password_text").value = data[0].password;
          self.image = data[0].image;
        });
      });
    },

    storeName: async function (firstname) {
      let self = this;
      let res = API.updateName(
        self.firstName,
        localStorage.getItem("API_TOKEN")
      );
      res.then(function (result) {
        result.json().then(function (data) {
          if ((data.ok = "false")) {
            console.log("ERROR. Data could not be changed");
          } else {
            console.log("First name changed successfully");
          }
        });
      });
    },

    storeSurname: async function (lastname) {
      let self = this;
      let res = API.updateSurname(
        self.lastName,
        localStorage.getItem("API_TOKEN")
      );
      res.then(function (result) {
        result.json().then(function (data) {
          if ((data.ok = "false")) {
            console.log("ERROR. Data could not be changed");
          } else {
            console.log("Last name changed successfully");
          }
        });
      });
    },

    storeEmail: async function (email) {
      let self = this;
      let res = API.updateEmail(
        self.email,
        localStorage.getItem("API_TOKEN")
      );
      res.then(function (result) {
        result.json().then(function (data) {
          if ((data.ok = "false")) {
            console.log("ERROR. Data could not be changed");
          } else {
            console.log("Email changed successfully");
          }
        });
      });
    },

    storePassword: async function (password) {
      let self = this;
      let res = API.updatePassword(
        self.password,
        localStorage.getItem("API_TOKEN")
      );
      res.then(function (result) {
        result.json().then(function (data) {
          if ((data.ok = "false")) {
            console.log("ERROR. Data could not be changed");
          } else {
            console.log("Password changed successfully");
          }
        });
      });
    },
    togglePassword: function myToggle() {
      let self = this;
      var x = self.password;
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    openDialog: function getConfirmation() {
      var iframe = document.createElement("IFRAME");
      document.documentElement.appendChild(iframe);
      if (
        window.frames[0].window.confirm(
          "Are you sure you want to deleteyour account?"
        )
      ) {
        let res = API.deleteUser(localStorage.getItem("API_TOKEN"));
        res.then(window.location.reload());
      }
    },
    reload: function reloadPage() {
      window.location.reload();
    },
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
.modal-dialog {
  position: relative;
  max-width: 800px;
  max-height: 80vh;
  border-radius: 5px;
  background: var(--white);
  overflow: auto;
  cursor: default;
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
