
<template>    
    <div class="box">
      <div class="panel_upcoming_events">
        <h2 class="title_panel">Upcoming Events</h2>
        <v-list>
          <v-list-item v-for="item in userEvents" :key="item.event" two-line>
            <div class="event_box">
              <h2 class="title">{{item.event}}</h2>
              <h3 class="date">{{item.date}}</h3>
              <button class="more_info_button" v-on:click=" m">More info</button>
            </div>
            <div class="empty">
              <!--Ask to change this-->
            </div>
          </v-list-item>
        </v-list>
      </div>
      <div class="buttons"> 
        <button class="statistics_button" v-on:click="m">Statistics</button>
        <button class="manage_account_button" v-on:click="n">Manage account</button>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    data: () => ({
      userEvents: [
        { event: "Oktoberfest", 
          description: "The Oktoberfest is the world's largest Volksfest, featuring a beer festival and a travelling funfair.",
          img: "https://www.thebeertimes.com/wp-content/uploads/2017/09/Oktoberfest-Munich.jpg",
          date: "10/10/2022"},
        { event: "NYFW", 
          description: "Officially called Mercedes-Benz Fashion Week, annual fashion week event held in New York City considered the most important event in the fashion industry.",
          img: "https://fotografias.antena3.com/clipping/cmsimages02/2022/09/13/4E016859-5F7C-46D3-92AB-E79CA8345834/mercedes-benz-fashion-week-madrid-2022-semana-moda-madrid_98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=low&format=webply",
          date: "23/01/2023"},
        { event: "Coachella", 
          description: "The Coachella Valley Music and Arts Festival is a major music festival that takes place over three days in the last week of April in Indio, California.",
          img: "https://images.ecestaticos.com/wx-uXc24uN-tnn9ei0Bljt-3qW4=/0x118:2271x1394/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1c7%2Fa35%2F419%2F1c7a354190cbb2c578c5c4f3e0c82a52.jpg",
          date: "20/03/2023"},
        { event: "Sallefest", 
          description: "The party you have been waiting all year is back. During a week full of activities, the boredom is the only one not welcome.",
          img: "https://i.ytimg.com/vi/FGs_66qxW2U/maxresdefault.jpg",
          date: "25/04/2023"},
          { event: "Oktoberfest", 
          description: "The Oktoberfest is the world's largest Volksfest, featuring a beer festival and a travelling funfair.",
          img: "https://www.thebeertimes.com/wp-content/uploads/2017/09/Oktoberfest-Munich.jpg",
          date: "10/10/2022"},
        { event: "NYFW", 
          description: "Officially called Mercedes-Benz Fashion Week, annual fashion week event held in New York City considered the most important event in the fashion industry.",
          img: "https://fotografias.antena3.com/clipping/cmsimages02/2022/09/13/4E016859-5F7C-46D3-92AB-E79CA8345834/mercedes-benz-fashion-week-madrid-2022-semana-moda-madrid_98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=low&format=webply",
          date: "23/01/2023"}
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
    display: flex;
    flex-direction: row;
  }
    
    *{
        margin: 0;
        width: auto;
        height: auto;
        
    }
    .panel_upcoming_events{
      background-color: #BF6183;
      border: solid #BF6183;
      border-width: thick;
      border-radius: 5px;
      width: 70vh;
      height: 70vh;
      margin-left: 5%;
      overflow-y: scroll;
    }
    .title_panel{
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      padding: 30px 10px;
    }
    .event_box{
        margin-left: 15%;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 25px;
        background-color: #E3A2BA;
        height: 10vh;
        width: 40vh;
        border: solid #BF6183;
        display: flex;
        flex-direction: row;
        align-items: left;
        padding: 10px 10px;
        color: #401826;
        display: grid;
        grid-template-columns: 25vh 12vh;
        grid-template-rows: 5vh 4vh;
    }
    .title{
      color: white;
      font-weight: bold; 
      padding: 0px 5px;
      grid-column: 1;
      grid-row: 1;
    }
    .date{
      color: white; 
      padding: 0px 5px;
      grid-column: 1;
      grid-row: 2;
    }
    .empty{
        background-color: #BF6183;
        padding: 10px 100px;
    }
    .more_info_button{
      background-color: #401826;
      color: white;
      width: 12vh;
      height: 7vh;
      white-space: nowrap;
      padding: 2px 5px;
      border-radius: 20px;
      grid-column: 2;
      margin-top: 1vh;
    }
    .more_info_button:hover {background-color: #63293d}
    .buttons{
      width: 70vh;
      height: 70vh;
      margin-right: 5%;
      display: flex;
      flex-direction: column;
    }
    .statistics_button{
      background-color: #401826;
      border: solid #401826;
      color: white;
      width: 30vh;
      height: 10vh;
      white-space: nowrap;
      padding: 2px 5px;
      border-radius: 20px;
      font-size: large;
      margin-top: 3vh;
      margin-left: 15vh;
    }
    .statistics_button:hover {background-color: #63293d}
    
    .manage_account_button{
      background-color: #401826;
      border: solid #401826;
      color: white;
      width: 30vh;
      height: 10vh;
      white-space: nowrap;
      padding: 2px 5px;
      border-radius: 20px;
      font-size: large;
      margin-top: 5vh;
      margin-left: 15vh;
    }
    .manage_account_button:hover {background-color: #63293d}
    
  </style>