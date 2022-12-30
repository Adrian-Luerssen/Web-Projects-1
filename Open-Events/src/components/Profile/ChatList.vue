<template class="all_chat">
  <section class="box">
    <section class="chat_list">
      <section class="header_dm">
        <input
          type="image"
          class="back_btn"
          src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png"
          @click="$router.go(-1)"
        />
        <h3 class="dm_title">Direct messages</h3>
      </section>
      <v-list class="chats">
        <v-list-item
          @click="refreshChat(chat.id)"
          v-for="chat in chats"
          :key="chat.id"
          two-line
        >
          <div class="chat_box">
            <article class="chat_content">
              <v-list-item-name class="title">{{ chat.name }}</v-list-item-name>
            </article>
          </div>
        </v-list-item>
      </v-list>
    </section>
    <section class="conversation_management">
      <article class="user_data_background">
        <div class="image_box">
          <img
            id="img"
            class="picture_chat"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          />
        </div>
        <div class="user_data">
          <h4 class="name" id="Name">John Doe</h4>
          <small class="user_activity">Active 1h ago</small>
        </div>
      </article>
      <article class="message_box" id="message_box">
        <v-list>
          <v-list-item-group>
            <v-list-item v-for="message in messages" :key="message.id">
              <v-list-item-content>
                <article
                  :class="{
                    leftMessage: message.user_id_send == userid,
                    rightMessage: message.user_id_send != userid,
                  }"
                >
                  <h4
                    :class="{
                      leftMessageText: message.user_id_send == userid,
                      rightMessageText: message.user_id_send != userid,
                    }"
                  >
                    {{ message.content }}
                  </h4>
                </article>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </article>
      <article class="write_message">
        <input
          id="message_input"
          type="text"
          class="message_input"
          placeholder="Write a message..."
          maxlength="44"
        />
        <button class="send_button" @click="sendMessage()">Send</button>
      </article>
    </section>
  </section>
</template>

<script>
import API from "../../API.js";
export default {
  data: () => ({
    chats: [],
    intervalId: null,
    userid: -1,
    ourid: localStorage.getItem("USER_ID"),
    messages: [],
  }),

  methods: {
    goToChat: function (chat) {
      this.$router.push({ name: "Chat", params: { chat: chat } });
    },

    snippet: function (value) {
      return value.substring(0, 20) + "...";
    },

    loadFriends: async function () {
      let self = this;
      console.log("loadFriends");
      let res = API.getFriends(localStorage.getItem("API_TOKEN"));
      res.then(function (response) {
        response.json().then(function (data) {
          self.chats = data;
          console.log(self.chats);
          //remove any null fields
          self.chats = self.chats.filter(function (el) {
            return el.id != null;
          });
        });
      });
    },
    async sendMessage() {
      let self = this;
      console.log(document.getElementById("message_input").value);
      API.sendMessage(
        this.userid,
        document.getElementById("message_input").value,
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          if (data.error == null) {
            console.log(data);
            self.messages.push(data);
            document.getElementById("message_input").value = "";
            var element = document.getElementById("message_box");
            element.scrollTop = element.scrollHeight;
            document.getElementsByClassName("right_message").style.width =
              data.length;
          }
        });
      });
    },
    async getProfile() {
      let self = this;
      console.log();
      API.getProfile(
        window.location.href.split("/").pop(),
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          console.log(data);
          document.getElementById("Name").textContent =
            data[0].name + " " + data[0].last_name;
          document.getElementById("img").src = data[0].image;
        });
      });
    },
    async getChat() {
      let self = this;
      console.log();
      API.getChat(this.userid, localStorage.getItem("API_TOKEN")).then(
        function (result) {
          result.json().then(function (data) {
            if (self.messages.length < data.length) {
              self.messages = data;
              var element = document.getElementById("message_box");
              element.scrollTop = element.scrollHeight;
            }
          });
        }
      );
    },
    refreshChat: function (newChatUser) {
      this.userid = newChatUser;
      this.messages = [];
      console.log("refreshChat");
      let name = document.getElementById("Name");
      API.getProfile(this.userid, localStorage.getItem("API_TOKEN")).then(
        function (result) {
          result.json().then(function (data) {
            console.log(data);
            name.textContent = data[0].name + " " + data[0].last_name;
            document.getElementById("img").src = data[0].image;
          });
        }
      );
    },
  },
  beforeMount() {
    this.getProfile();
    this.getChat();
    let self = this;
    this.intervalId = window.setInterval(function () {
      // update chat
      if (self.userid != -1) {
        self.getChat();
      }
    }, 1000);
    this.loadFriends();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style>
.box {
  height: 90vh;
  width: 96vw;
  background-color: #4c566a;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  margin-left: 2vw;
  margin-top: 2vh;
  border-radius: 10px;
}

.chat_list {
  grid-column: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: lightgray;
  overflow: hidden;
}

.header_dm {
  height: 10%;
  width: 100%;
  background-color: #d7dbdd;
  position: sticky;
  display: grid;
  grid-template-columns: 10% 90%;
  border: solid lightgray;
  align-items: center;
}

.chats {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.back_btn {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 5%;
}

.dm_title {
  justify-self: center;
  margin-right: 15%;
}

.chat_box {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #ecf0f1;
  height: 10vh;
  width: 100%;
  border-bottom: solid lightgrey;
  border-left: solid lightgrey;
  border-right: solid lightgrey;
  display: grid;
  grid-template-columns: 12% 76% 8%;
  grid-template-rows: auto;
  align-items: center;
  color: #401826;
  text-decoration: none;
}

.chat_box:hover {
  background-color: lightgrey;
}
.chat_content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.profilePicture {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 7%;
}

.title {
  color: #401826;
  font-weight: bold;
}

.subtitle {
  opacity: 60%;
  color: #401826;
}

.conversation_management {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0%;
  width: 100%;
  height: 100%;
  background-color: #ecf0f1;
  border-radius: 10px;
}

.user_data_background {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #d7dbdd;
  border-top-right-radius: 10px;
  width: 100%;
}
.picture_chat {
  margin-top: 5%;
  margin-left: 20%;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.user_data {
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50vh;
  height: 6vh;
}

.message_box {
  width: 100%;
  height: 76.5%;
  background-color: #ecf0f1;
  border-radius: 10px;
}

.write_message {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d7dbdd;
  border-bottom-right-radius: 10px;
  width: 100%;
  height: 11.7%;
}
.message_input {
  margin-left: 5%;
  width: 71.4%;
  height: 50%;
  border-radius: 10px;
  border: none;
  background-color: #ecf0f1;
}
.send_button {
  margin-right: 5%;
  width: 14.3%;
  height: 50%;
  border-radius: 10px;
  border: none;
  background-color: #ecf0f1;
}
</style>
