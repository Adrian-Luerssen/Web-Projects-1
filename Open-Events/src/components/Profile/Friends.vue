<template>
  <div class="box">
    <section class="panel_friends">
      <h3 class="title_panel">Friends</h3>
      <section class="small_panel_friends">
        <v-list>
          <v-list-item v-for="item in friends" :key="item.name" two-line>
            <article class="info">
              <h4 class="title">{{ item.name }}</h4>
              <div class="buttons_box">
                <button class="remove_button_friends" v-on:click="m">X</button>
                <input
                  type="image"
                  class="start_chat_button"
                  src="https://cdn-icons-png.flaticon.com/512/589/589708.png"
                  v-on:click="
                    $router.push({
                      name: 'Chat',
                      params: { id: item.id },
                    })
                  "
                />
              </div>
            </article>
          </v-list-item>
        </v-list>
      </section>
    </section>
    <section class="panel_requests">
      <h3 class="title_panel">Requests</h3>
      <section class="small_panel_requests">
        <v-list>
          <v-list-item v-for="item in requests" :key="item.name" two-line>
            <article class="info">
              <h4 class="title">{{ item.name }}</h4>
              <div class="buttons_box">
                <button class="add_button_requests" v-on:click="m">✔</button>
                <button class="remove_button_requests" v-on:click="m">X</button>
              </div>
            </article>
          </v-list-item>
        </v-list>
      </section>
    </section>
    <section class="panel_mightKnow">
      <h3 class="title_panel">You might know</h3>
      <section class="small_panel_mightKnow">
        <v-list>
          <v-list-item v-for="item in mightKnow" :key="item.name" two-line>
            <article class="info">
              <h4 class="title">{{ item.name }}</h4>
              <button class="add_button_mightKnow" v-on:click="m">✔</button>
            </article>
          </v-list-item>
        </v-list>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    friends: [
      { id: 1, name: "Joana" },
      { id: 2, name: "Helena" },
      { id: 3, name: "Chris" },
      { id: 4, name: "Dani" },
      { id: 5, name: "Sarah" },
      { id: 6, name: "Victor" },
      { id: 7, name: "Manolo" },
      { id: 8, name: "Marc" },
      { id: 9, name: "Pau" },
      { id: 10, name: "Oscar" },
      { id: 11, name: "Joaquin" },
      { id: 12, name: "Maria" },
      { id: 13, name: "Adrianau" },
      { id: 14, name: "Jorge" },
      { id: 15, name: "Marta" },
      { id: 16, name: "Miguel" },
      { id: 17, name: "Sara" },
      { id: 18, name: "Ricardo" },
      { id: 19, name: "Rafael" },
      { id: 20, name: "Raul" },
      { id: 21, name: "Ramon" },
    ],
    requests: [
      { name: "Alex" },
      { name: "Sofia" },
      { name: "Eva" },
      { name: "Andrea" },
      { name: "Juan" },
      { name: "Javi" },
      { name: "Bosco" },
      { name: "Carla" },
      { name: "Alexia" },
      { name: "Berta" },
      { name: "Lucas" },
      { name: "Stephanie" },
      { name: "Ivan" },
      { name: "Alejandro" },
      { name: "Adriana" },
      { name: "Ernest" },
      { name: "Heidy" },
      { name: "Aurora" },
    ],
    mightKnow: [
      { name: "Sonia" },
      { name: "Maria" },
      { name: "Wall-E" },
      { name: "Jorge" },
      { name: "Jose Maria" },
      { name: "Julia" },
      { name: "Jessica" },
      { name: "Amber" },
      { name: "David" },
      { name: "Dustin" },
      { name: "Mar" },
      { name: "Alvaro" },
      { name: "Aran" },
      { name: "Mariona" },
    ],
  }),
};

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
</script>
<style>
.box {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #e3a2ba;
  overflow-x: hidden;
}

.panel_friends {
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
  height: 70vh;
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

@media only screen and (min-width: 768px) {
  .box {
    height: 100vh;
    display: grid;
    grid-template-columns: 70vh 70vh;
    grid-template-rows: 45vh 55vh;
    background: #e3a2ba;
  }

  .panel_friends {
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
    height: 70vh;
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
