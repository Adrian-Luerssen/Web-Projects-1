<template>    
    <div class="box">
      <section class="panel_friends">
        <h3 class="title_panel">Friends</h3>
        <section class="small_panel_friends">
          <v-list>
            <v-list-item v-for="item in friends" :key="item.name" two-line>
              <article class="info">
                <h4 class="title">{{item.name}}</h4>
                <button class="remove_button_friends" v-on:click=" m">X</button>
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
              <h4 class="title">{{item.name}}</h4>
              <button class="add_button_requests" v-on:click=" m">✔</button>
              <button class="remove_button_requests" v-on:click=" m">X</button>
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
              <h4 class="title">{{item.name}}</h4>
              <button class="add_button_mightKnow" v-on:click=" m">✔</button>
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
        {name: "Joana"}, 
        {name: "Helena"},
        {name: "Chris"}, 
        {name: "Dani"},
        {name: "Sarah"}, 
        {name: "Victor"},
        {name: "Manolo"}, 
        {name: "Marc"},
        {name: "Pau"}, 
        {name: "Oscar"}
      ],
      requests: [
        {name: "Alex"}, 
        {name: "Sofia"},
        {name: "Eva"}, 
        {name: "Andrea"},
        {name: "Juan"}, 
        {name: "Javi"},
        {name: "Bosco"}, 
        {name: "Carla"},
        {name: "Alexia"}, 
        {name: "Berta"},
        {name: "Lucas"}, 
        {name: "Stephanie"},
        {name: "Ivan"}, 
        {name: "Alejandro"},
        {name: "Adriana"}, 
        {name: "Ernest"},
        {name: "Heidy"}, 
        {name: "Aurora"}
      ],
      mightKnow: [
        {name: "Sonia"}, 
        {name: "Maria"},
        {name: "Wall-E"}, 
        {name: "Jorge"},
        {name: "Jose Maria"}, 
        {name: "Julia"},
        {name: "Jessica"}, 
        {name: "Amber"},
        {name: "David"}, 
        {name: "Dustin"},
        {name: "Mar"}, 
        {name: "Alvaro"},
        {name: "Aran"}, 
        {name: "Mariona"}
      ]
    })
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
  body {
        min-height: 100vh;
        min-width: 150vh;
        background: #E3A2BA;
        box-sizing: border-box;
        font-weight: normal;
    }
  .box{
    width: 150vh;
    display: grid;
    grid-template-columns: 70vh 70vh;
    grid-template-rows: 45vh 55vh;
  }
    .panel_friends{
      background-color: #BF6183;
      border: solid #BF6183;
      border-width: thick;
      border-radius: 5px;
      width: 70vh;
      height: 42vh;
      grid-column: 1;
      grid-row: 1;
    }
    .panel_requests{
      background-color: #BF6183;
      border: solid #BF6183;
      border-width: thick;
      border-radius: 5px;
      width: 70vh;
      height: 40vh;
      grid-column: 1;
      grid-row: 2;
    }
    .panel_mightKnow{
      background-color: #BF6183;
      border: solid #BF6183;
      border-width: thick;
      border-radius: 5px;
      width: 70vh;
      height: 50vh;
      margin-left: 20%;
      grid-column: 2;
    }
    .small_panel_friends{
      background-color: #BF6183;
      width: 68vh;
      height: 33vh;
      overflow-y: scroll;
      margin-top: -4%;
    }
    .small_panel_requests{
      background-color: #BF6183;
      width: 68vh;
      height: 31vh;
      overflow-y: scroll;
      margin-top: -4%;
    }
    .small_panel_mightKnow{
      background-color: #BF6183;
      width: 68vh;
      height: 41vh;
      overflow-y: scroll;
      margin-top: -4%;
    }
    .title_panel{
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      padding: 30px 10px;
    }
    .title{
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      padding: 10px 10px;
      grid-column: 1;
    }
    .info{
      background-color: #622f41;
      border: solid white;
      border-width: thin;
      width: 60vh;
      height: 5vh;
      margin-left: 5%;
      display: grid;
      grid-template-columns: 50vh;
      
    }
    .remove_button_friends{
      background-color: #E3A2BA;
      color: white;
      width: 4vh;
      height: 4vh;
      border-radius: 50px;
      grid-column: 3;
      margin-top: 5%;
    }
    .remove_button_friends:hover {background-color: #870f0f}
    .remove_button_requests{
      background-color: #E3A2BA;
      color: white;
      width: 4vh;
      height: 4vh;
      border-radius: 50px;
      grid-column: 3;
      margin-top: 5%;
    }
    .remove_button_requests:hover {background-color: #870f0f}
  
    .add_button_requests{
      background-color: #E3A2BA;
      color: white;
      width: 4vh;
      height: 4vh;
      border-radius: 50px;
      grid-column: 2;
      margin-top: 5%;
    }
    .add_button_requests:hover {background-color: #356329}
  
    .add_button_mightKnow{
      background-color: #E3A2BA;
      color: white;
      width: 4vh;
      height: 4vh;
      border-radius: 50px;
      grid-column: 3;
      margin-top: 5%;
    }
    .add_button_mightKnow:hover {background-color: #356329}
  </style>