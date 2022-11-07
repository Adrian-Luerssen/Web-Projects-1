<template>    
    <div class="box">
      <section class="panel_friends">
        <h3 class="title_panel">Friends</h3>
        <section class="small_panel_friends">
          <v-list>
            <v-list-item v-for="item in friends" :key="item.name" two-line>
              <article class="info">
                <h4 class="title">{{item.name}}</h4>
                <div class="buttons_box">
                  <button class="remove_button_friends" v-on:click=" m">X</button>
                  <input type="image" class="start_chat_button" src="https://cdn-icons-png.flaticon.com/512/589/589708.png"/>
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
      <section class="conversation_management">
        <article class = "user_data_background">
          <div class="image_box">
            <img class="picture_chat" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
          </div>
          <div class="user_data">
            <h4 class="name">John Doe</h4>
            <small class="user_activity">Active 1h ago</small>
          </div>
        </article>
        <article class="message_box">
        </article>
        <article class="write_message">
          <input type="text" class="message_input" placeholder="Write a message..."/>
          <button class="send_button">Send</button>
        </article>
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
        {name: "Oscar"},
        {name: "Joaquin"}, 
        {name: "Maria"},
        {name: "Adrianau"}, 
        {name: "Jorge"},
        {name: "Marta"},
        {name: "Miguel"},
        {name: "Sara"},
        {name: "Ricardo"},
        {name: "Rafael"},
        {name: "Raul"},
        {name: "Ramon"}
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
  .box{
    height: 100vh;
    display: grid;
    grid-template-columns: 70vh 70vh;
    grid-template-rows: 45vh 55vh;
    background: #E3A2BA;
  }
  .conversation_management{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 5%;
    grid-column: 3; 
    width: 70vh;
    height: 85vh;
    background-color: #ECF0F1;
    border-radius: 10px;
  }
  .user_data_background{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color:#D7DBDD; 
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 70vh;
    height: 10vh;
  }
  .picture_chat{
    margin-top:5%;
    margin-left: 20%;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .user_data{
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50vh;
    height: 6vh;
  }

  .message_box{
    width: 70vh;
    height: 65vh;
    background-color: #ECF0F1;
    border-radius: 10px;
  }

  .write_message{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#D7DBDD;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 70vh;
    height: 10vh;
  }
  .message_input{
    margin-left: 5%;
    width: 50vh;
    height: 5vh;
    border-radius: 10px;
    border: none;
    background-color: #ECF0F1;
  }
  .send_button{
    margin-right: 5%;
    width: 10vh;
    height: 5vh;
    border-radius: 10px;
    border: none;
    background-color: #ECF0F1;
  }

    .panel_friends{
      margin-top: 5%;
      margin-left: 5%;
      background-color: #BF6183;
      border: solid #BF6183;
      border-width: thick;
      border-radius: 5px;
      width: 50vh;
      height: 85vh;
      grid-column: 1;
    }
    .panel_requests{
      margin-top: 5%;
      background-color: #BF6183;
      border: solid #BF6183;
      border-width: thick;
      border-radius: 5px;
      width: 50vh;
      height: 40vh;
      grid-column: 2;
      grid-row: 1;
    }
    .panel_mightKnow{
      margin-top: 5%;
      background-color: #BF6183;
      border: solid #BF6183;
      border-width: thick;
      border-radius: 5px;
      width: 50vh;
      height: 40vh;
      grid-column: 2;
      grid-row: 2;
    }
    
    .small_panel_friends{
      background-color: #BF6183;
      width: 48vh;
      height: 70vh;
      overflow-y: scroll;
      margin-top: -4%;
    }
    .small_panel_requests{
      background-color: #BF6183;
      width: 48vh;
      height: 31vh;
      overflow-y: scroll;
      margin-top: -4%;
    }
    .buttons_box{
      display: flex;
      grid-column: 2;
    }
    .small_panel_mightKnow{
      background-color: #BF6183;
      width: 48vh;
      height: 31vh;
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
      width: 43vh;
      height: 5vh;
      margin-left: 5%;
      display: grid;
      grid-template-columns: 33vh;
      
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
    .start_chat_button{
      background-color: #E3A2BA;
      color: white;
      width: 4vh;
      height: 4vh;
      border-radius: 2px;
      grid-column: 3;
      margin-top: 5%;
    }
    .start_chat_button:hover {background-color: #00edf5}
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