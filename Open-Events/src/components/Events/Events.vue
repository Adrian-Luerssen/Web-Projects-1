
<template>    
    <div class="box">
      <section class="side_bar">
        <p>This is a side panel</p>
      </section>
      <section class="table_panel">
        <v-list>
        <v-list-item v-for="item in elements" :key="item.event" two-line>
          <article class="event_box">
            <img class="image_events" src="https://fotografias.antena3.com/clipping/cmsimages02/2022/09/13/4E016859-5F7C-46D3-92AB-E79CA8345834/mercedes-benz-fashion-week-madrid-2022-semana-moda-madrid_98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=low&format=webply">
            <h3 class="title">{{item.event}}</h3>
            <p class="description">{{item.description}}</p>
          </article>
        </v-list-item>
        </v-list>
      </section>
    </div>
    
  </template>
  
  <script>
  export default {
    data: () => ({
      elements: [
        { event: "Oktoberfest", 
          description: "The Oktoberfest is the world's largest Volksfest, featuring a beer festival and a travelling funfair.",
          img: "https://www.thebeertimes.com/wp-content/uploads/2017/09/Oktoberfest-Munich.jpg"},
        { event: "NYFW", 
          description: "Officially called Mercedes-Benz Fashion Week, annual fashion week event held in New York City considered the most important event in the fashion industry.",
          img: "https://fotografias.antena3.com/clipping/cmsimages02/2022/09/13/4E016859-5F7C-46D3-92AB-E79CA8345834/mercedes-benz-fashion-week-madrid-2022-semana-moda-madrid_98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=low&format=webply" },
        { event: "Coachella", 
          description: "The Coachella Valley Music and Arts Festival is a major music festival that takes place over three days in the last week of April in Indio, California.",
          img: "https://images.ecestaticos.com/wx-uXc24uN-tnn9ei0Bljt-3qW4=/0x118:2271x1394/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1c7%2Fa35%2F419%2F1c7a354190cbb2c578c5c4f3e0c82a52.jpg"},
        { event: "Sallefest", 
          description: "The party you have been waiting all year is back. During a week full of activities, the boredom is the only one not welcome.",
          img: "https://i.ytimg.com/vi/FGs_66qxW2U/maxresdefault.jpg"},
        { event: "Movies & Wine", 
          description: "A perfect date to spend some time with the ones you love or just to be by yourself, this is a great opportunity to relax and ejoy calm.",
          img: "https://www.winemag.com/wp-content/uploads/2015/03/WE_Movies0336.jpg" }
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
  <style scoped>
  .box {
        min-height: 100vh;
        background: #E3A2BA;
        box-sizing: border-box;
        font-weight: normal;
        position: relative;
        display: flex;
        flex-direction: row;
    }
    .side_bar{
      height: 100%;
      width: 15%;
      background-color: #401826;
    }
    .table_panel{
      overflow-y: scroll;
      width: 85%;
      background-color: #E3A2BA;
    }
    .event_box{
        margin-top: 5%;
        margin-bottom: 5%;
        margin-left: 15%;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 25px;
        background-color: #BF6183;
        height: 150px;
        width: 600px;
        border: solid#E3A2BA;
        gap: 10px;
        display: grid;
        grid-template-columns: 200px 400px;
        grid-template-rows: 50px 100px;
        align-items: left;
        padding: 10px 10px;
        
    }
    .image_events{
      margin-top: 10%;
      grid-column: 1;
      width: 25vh;
      height: auto;
      border-radius: 50%;
    }
    .title{
      grid-column: 2;
      grid-row: 1;
      color: white;
      font-weight: bold;    
    }
    .description{
      grid-column: 2;
      grid-row: 2;
      color: rgb(255, 213, 242);
      
    }
    .side_panel{
      background-color: #401826;
    }
  </style>

