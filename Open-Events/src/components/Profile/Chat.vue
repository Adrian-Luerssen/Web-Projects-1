<template>
  <div class="box">
    <button type="image" class="back_button" @click="$router.go(-1)">
      back
    </button>
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
  </div>
</template>

<script>
import { createSimpleExpression } from "@vue/compiler-core";
import API from "../../API.js";
export default {
  data: () => {
    return {
      intervalId: null,
      userid: window.location.href.split("/").pop(),
      ourid: localStorage.getItem("USER_ID"),
      messages: [],
    };
  },
  methods: {
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
      API.getChat(
        window.location.href.split("/").pop(),
        localStorage.getItem("API_TOKEN")
      ).then(function (result) {
        result.json().then(function (data) {
          if (self.messages.length < data.length) {
            self.messages = data;
            var element = document.getElementById("message_box");
            element.scrollTop = element.scrollHeight;
          }
        });
      });
    },
  },
  beforeMount() {
    this.getProfile();
    this.getChat();
    let self = this;
    this.intervalId = window.setInterval(function () {
      // update chat
      self.getChat();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style>
.box {
  height: auto;
  background: #e3a2ba;
}
.back_button {
  width: 10vh;
  height: 5vh;

  margin-left: 5%;
  margin-top: 5%;
}
.conversation_management {
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  margin-top: 7%;
  width: 20vh;
  height: 80vh;
  background-color: #ecf0f1;
  border-radius: 10px;
}

.user_data_background {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #d7dbdd;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 56.5vh;
  height: 10vh;
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
  width: 70vh;
  height: 65vh;
  background-color: #ecf0f1;
  border-radius: 10px;
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
}

.write_message {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d7dbdd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 70vh;
  height: 10vh;
}

.message_input {
  margin-left: 5%;
  width: 40vh;
  height: 5vh;
  border-radius: 10px;
  border: none;
  background-color: #ecf0f1;
}
.send_button {
  margin-right: 22%;
  width: 8vh;
  height: 5vh;
  border-radius: 10px;
  border: none;
  background-color: #ecf0f1;
}
</style>
