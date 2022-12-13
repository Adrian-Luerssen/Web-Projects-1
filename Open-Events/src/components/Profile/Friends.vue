<template>
  <div class="box">
    <section class="panel_search">
      <h3 class="title_panel">Search users:</h3>
      <input id="SearchUser" class="searchBar" type="text" v-on:input="this.searchUsers();" />
      <section class="small_panel_friends">
        <v-list v-if="recommended.length > 0">
          <v-list-item v-for="item in recommended" :key="item.id" two-line>
            <article class="info">
              <h4 class="title" v-on:click="
                $router.push({
                  name: 'Other_Profile',
                  params: { id: item.id },
                })
              ">
                {{ item.name }}
              </h4>
              <div class="buttons_box">
                <button class="add_button_requests" v-on:click="this.requestUser(item.id);">✔</button>
              </div>
            </article>
          </v-list-item>
        </v-list>
        <article class="emptyList" v-else>No results</article>
      </section>
    </section>
    <section class="panel_requests">
      <h3 class="title_panel">Friends</h3>
      <section class="small_panel_requests">
        <v-list v-if="friends.length > 0">
          <v-list-item v-for="item in friends" :key="item.id" two-line>
            <article class="info">
              <h4 class="title" v-on:click="
                $router.push({
                  name: 'Other_Profile',
                  params: { id: item.id },
                })
              ">
                {{ item.name }}
              </h4>
              <div class="buttons_box">
                <button class="remove_button_friends" v-on:click="m">X</button>
                <input type="image" class="start_chat_button"
                  src="https://cdn-icons-png.flaticon.com/512/589/589708.png" v-on:click="
                    $router.push({
                      name: 'Chat',
                      params: { id: item.id },
                    })
                  " />
              </div>
            </article>
          </v-list-item>
        </v-list>
        <article class="emptyList" v-else>No friends</article>
      </section>
    </section>
    <section class="panel_mightKnow">
      <h3 class="title_panel">Requests</h3>
      <section class="small_panel_mightKnow">

        <v-list v-if="requests.length > 0">
          <v-list-item v-for="item in requests" :key="item.id" two-line>
            <article class="info">
              <h4 class="title" v-on:click="
                $router.push({
                  name: 'Other_Profile',
                  params: { id: item.id },
                })
              ">
                {{ item.name }}
              </h4>
              <div class="buttons_box">
                <button class="add_button_requests" v-on:click="m">✔</button>
                <button class="remove_button_requests" v-on:click="m">X</button>
              </div>
            </article>
          </v-list-item>
        </v-list>
        <article class="emptyList" v-else>No requests</article>
      </section>
    </section>
  </div>
</template>

<script>
import API from "../../API.js";

export default {
  data: () => ({
    friends: [],
    requests: [],
    recommended: [],
    intervalId: null,
  }),
  methods: {
    openNav: function () {
      document.getElementById("mySidepanel").style.width = "250px";
    },

    /* Set the width of the sidebar to 0 (hide it) */
    closeNav: function () {
      document.getElementById("mySidepanel").style.width = "0";
    },

    loadFriendRequests: async function () {
      let self = this;
      let res = API.getFriendRequests(localStorage.getItem("API_TOKEN"));
      res.then(function (response) {

        console.log("loadFriendRequests",response);
        response.json().then(function (data) {
          self.requests = data;
          console.log("requests: ", self.requests);
          self.requests = self.requests.filter(function (el) {
            return el.id != null;
          });
        });
      });
    },

    loadFriends: async function () {
      let self = this;
      console.log("loadFriends");
      let res = API.getFriends(localStorage.getItem("API_TOKEN"));
      res.then(function (response) {
        response.json().then(function (data) {
          self.friends = data;
          console.log(self.friends);
          //remove any null fields
          self.friends = self.friends.filter(function (el) {
            return el.id != null;
          });
        });
      });
    },
    searchUsers: async function () {
      let self = this;
      console.log("searchUsers");
      let res = API.searchUsers(document.getElementById("SearchUser").value, localStorage.getItem("API_TOKEN"));
      res.then(function (response) {
          self.recommended = null;
        response.json().then(function (data) {
          self.recommended = data;
          //remove any null fields
          self.recommended = self.recommended.filter(function (el) {
            return el.id != null;
          });
          console.log(self.recommended);
        });
      });
    },
    requestUser: async function (id) {
      let self = this;
      console.log("requestUser");
      let res = API.sendRequest(id, localStorage.getItem("API_TOKEN"));
      res.then(function (response) {
        response.json().then(function (data) {
          console.log(data);
        });
      });
    }
  },

  beforeMount() {
    this.loadFriendRequests();
    this.loadFriends();
    this.searchUsers();
    //let self = this;
    //this.intervalId = window.setInterval(function () {
    // update chat
    //  self.loadFriendRequests();
    //  self.loadFriends();
    //  self.searchUsers();
    //}, 5000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>
<style>
.box {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #e3a2ba;
  overflow-x: hidden;
}

.panel_search {
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  background-color: #bf6183;
  border: solid #bf6183;
  border-width: thick;
  border-radius: 5px;
  width: 90%;
  height: 85vh;
  right: 5%;
  grid-column: 1;
}

.panel_requests {
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  background-color: #bf6183;
  border: solid #bf6183;
  border-width: thick;
  border-radius: 5px;
  width: 90%;
  height: 85vh;
  right: 5%;
  grid-column: 1;
}

.panel_mightKnow {
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 80px;
  background-color: #bf6183;
  border: solid #bf6183;
  border-width: thick;
  border-radius: 5px;
  width: 90%;
  height: 85vh;
  right: 5%;
  grid-column: 1;
}

.small_panel_friends {
  background-color: #bf6183;
  width: 100%;
  height: 65vh;
  overflow-y: scroll;
  margin-top: -4%;
}

.small_panel_requests {
  background-color: #bf6183;
  width: 100%;
  height: 30vh;
  overflow-y: scroll;
  margin-top: -4%;
}

.buttons_box {
  display: flex;
  right: 2%;
  position: absolute;
}

.small_panel_mightKnow {
  background-color: #bf6183;
  height: 31vh;
  width: 100%;
  overflow-y: scroll;
  margin-top: -4%;
}

.title_panel {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  padding: 30px 10px;
}

.title {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 10px;
  left: 5%;
}

.info {
  background-color: #622f41;
  border: solid white;
  border-width: thin;
  width: 90%;
  height: 5vh;
  margin-left: 5%;
  display: grid;
  position: relative;
}

.remove_button_friends {
  background-color: #e3a2ba;
  color: white;
  width: 4vh;
  height: 4vh;
  border-radius: 50px;
  grid-column: 3;
  margin-top: 5%;
}

.start_chat_button {
  background-color: #e3a2ba;
  color: white;
  width: 4vh;
  height: 4vh;
  border-radius: 2px;
  grid-column: 3;
  margin-top: 5%;
}

.start_chat_button:hover {
  background-color: #00edf5;
}

.remove_button_friends:hover {
  background-color: #870f0f;
}

.remove_button_requests {
  background-color: #e3a2ba;
  color: white;
  width: 4vh;
  height: 4vh;
  border-radius: 50px;
  grid-column: 3;
  margin-top: 5%;
}

.remove_button_requests:hover {
  background-color: #870f0f;
}

.add_button_requests {
  background-color: #e3a2ba;
  color: white;
  width: 4vh;
  height: 4vh;
  border-radius: 50px;
  grid-column: 2;
  margin-top: 5%;
}

.add_button_requests:hover {
  background-color: #356329;
}

.add_button_mightKnow {
  background-color: #e3a2ba;
  color: white;
  width: 4vh;
  height: 4vh;
  border-radius: 50px;
  position: absolute;
  right: 2%;
}

.add_button_mightKnow:hover {
  background-color: #356329;
}

.emptyList {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: xx-large;
  width: 100%;
  height: 90%;
  line-height: 100%;
  text-align: center;
}

.searchBar {
  border: solid #bf6183;
  border-width: thick;
  border-radius: 5px;
  width: 90%;
  height: 5vh;
  margin-left: 5%;
  margin-bottom: 6%;
  display: grid;
  position: relative;
}

@media only screen and (min-width: 768px) {
  .box {
    height: 100vh;
    display: grid;
    grid-template-columns: 70vh 70vh;
    grid-template-rows: 45vh 55vh;
    background: #e3a2ba;
  }

  .panel_search {
    margin-top: 5%;
    margin-left: 5%;
    background-color: #bf6183;
    border: solid #bf6183;
    border-width: thick;
    border-radius: 5px;
    width: 50vh;
    height: 85vh;
    grid-column: 1;
  }


  .panel_requests {
    margin-top: 5%;
    background-color: #bf6183;
    border: solid #bf6183;
    border-width: thick;
    border-radius: 5px;
    width: 50vh;
    height: 40vh;
    grid-column: 2;
    grid-row: 1;
  }

  .panel_mightKnow {
    margin-top: 5%;
    background-color: #bf6183;
    border: solid #bf6183;
    border-width: thick;
    border-radius: 5px;
    width: 50vh;
    height: 40vh;
    grid-column: 2;
    grid-row: 2;
  }

  .small_panel_friends {
    background-color: #bf6183;
    width: 48vh;
    height: 65vh;
    overflow-y: scroll;
    margin-top: -4%;
  }

  .small_panel_requests {
    background-color: #bf6183;
    width: 48vh;
    height: 31vh;
    overflow-y: scroll;
    margin-top: -4%;
  }

  .buttons_box {
    display: flex;
    grid-column: 2;
  }

  .small_panel_mightKnow {
    background-color: #bf6183;
    width: 48vh;
    height: 31vh;
    overflow-y: scroll;
    margin-top: -4%;
  }

  .title_panel {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    padding: 30px 10px;
  }

  .title {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px 10px;
    grid-column: 1;
  }

  .info {
    background-color: #622f41;
    border: solid white;
    border-width: thin;
    width: 43vh;
    height: 5vh;
    margin-left: 5%;
    display: grid;
    grid-template-columns: 33vh;
  }

  .remove_button_friends {
    background-color: #e3a2ba;
    color: white;
    width: 4vh;
    height: 4vh;
    border-radius: 50px;
    grid-column: 3;
    margin-top: 5%;
  }

  .start_chat_button {
    background-color: #e3a2ba;
    color: white;
    width: 4vh;
    height: 4vh;
    border-radius: 2px;
    grid-column: 3;
    margin-top: 5%;
  }

  .start_chat_button:hover {
    background-color: #00edf5;
  }

  .remove_button_friends:hover {
    background-color: #870f0f;
  }

  .remove_button_requests {
    background-color: #e3a2ba;
    color: white;
    width: 4vh;
    height: 4vh;
    border-radius: 50px;
    grid-column: 3;
    margin-top: 5%;
  }

  .remove_button_requests:hover {
    background-color: #870f0f;
  }

  .add_button_requests {
    background-color: #e3a2ba;
    color: white;
    width: 4vh;
    height: 4vh;
    border-radius: 50px;
    grid-column: 2;
    margin-top: 5%;
  }

  .add_button_requests:hover {
    background-color: #356329;
  }

  .add_button_mightKnow {
    background-color: #e3a2ba;
    color: white;
    width: 4vh;
    height: 4vh;
    border-radius: 50px;
    grid-column: 3;
  }

  .add_button_mightKnow:hover {
    background-color: #356329;
  }
}
</style>
