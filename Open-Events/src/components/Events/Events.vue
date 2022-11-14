<template>
  <div class="box">
    <section class="table_panel">
      <!-- search box -->
      <section class="search_box">
        <input type="text" class="search_message" placeholder="Search..." />
        <section class="buttons_section">
          <button class="search_button">Search</button>
          <select class="filters" name="filters" id="filters_id">
            <option value="">--Select filter--</option>
            <option value="event_creator_rating">Event creator rating</option>
            <option value="by_name">Search by name</option>
            <option value="by_location">Search by location</option>
            <option value="by_date">Search by date</option>
          </select>
        </section>
      </section>
      <v-list>
        <v-list-item v-for="item in elements" :key="item.event" two-line>
          <article class="event_box" v-on:click="$router.push({ name:'SpecificEvent', params:{id: item.event}})">
            <div class="image_box">
              <img
                class="image_events"
                src="https://fotografias.antena3.com/clipping/cmsimages02/2022/09/13/4E016859-5F7C-46D3-92AB-E79CA8345834/mercedes-benz-fashion-week-madrid-2022-semana-moda-madrid_98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=low&format=webply"
              />
            </div>
            <b class="title">{{ item.event }}</b>
            <p class="description">{{ item.description }}</p>
            <b class="date">{{ item.date }}</b>
            <b class="location">{{ item.location }}</b>
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
      {
        event: "Oktoberfest",
        description:
          "The Oktoberfest is the world's largest Volksfest, featuring a beer festival and a travelling funfair.",
        img: "https://www.thebeertimes.com/wp-content/uploads/2017/09/Oktoberfest-Munich.jpg",
        date: "2021-09-18",
        location: "Carrer Sant Joan de la Salle, 42, 08022, Barcelona",
      },
      {
        event: "NYFW",
        description:
          "Officially called Mercedes-Benz Fashion Week, annual fashion week event held in New York City considered the most important event in the fashion industry.",
        img: "https://fotografias.antena3.com/clipping/cmsimages02/2022/09/13/4E016859-5F7C-46D3-92AB-E79CA8345834/mercedes-benz-fashion-week-madrid-2022-semana-moda-madrid_98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=low&format=webply",
        date: "2021-09-18",
        location: "Carrer Sant Joan de la Salle, 42, 08022, Barcelona",
      },
      {
        event: "Coachella",
        description:
          "The Coachella Valley Music and Arts Festival is a major music festival that takes place over three days in the last week of April in Indio, California.",
        img: "https://images.ecestaticos.com/wx-uXc24uN-tnn9ei0Bljt-3qW4=/0x118:2271x1394/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1c7%2Fa35%2F419%2F1c7a354190cbb2c578c5c4f3e0c82a52.jpg",
        date: "2021-09-18",
        location: "Carrer Sant Joan de la Salle, 42, 08022, Barcelona",
      },
      {
        event: "Sallefest",
        description:
          "The party you have been waiting all year is back. During a week full of activities, the boredom is the only one not welcome.",
        img: "https://i.ytimg.com/vi/FGs_66qxW2U/maxresdefault.jpg",
        date: "2021-09-18",
        location: "Carrer Sant Joan de la Salle, 42, 08022, Barcelona",
      },
      {
        event: "Movies & Wine",
        description:
          "A perfect date to spend some time with the ones you love or just to be by yourself, this is a great opportunity to relax and ejoy calm.",
        img: "https://www.winemag.com/wp-content/uploads/2015/03/WE_Movies0336.jpg",
        date: "2021-09-18",
        location: "Carrer Sant Joan de la Salle, 42, 08022, Barcelona",
      },
    ],
    search: "",
  }),
};

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

computed: {
  function filteredElements() {
    return this.elements.filter((p) => {
      // return true if the product should be visible

      // in this example we just check if the search string
      // is a substring of the event name (case insensitive)
      return p.event.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
    });
  }
}
</script>
<style scoped>
.search_box {
  width: 100%;
  height: 15vh;
  background-color: #bf6183;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
}

.search_message {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d7dbdd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 90%;
  height: 5vh;
}

.search_button {
  width: 20vh;
  height: 4vh;
  border-radius: 10px;
  border: 1px solid #e3a2ba;
  background: #e3a2ba;
  color: white;
  font-size: 2vh;
  font-weight: bold;
  margin-left: 3%;
}

.buttons_section {
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  margin-top: 2%;
}

.filters {
  width: 20vh;
  height: 4vh;
  border-radius: 10px;
  border: 1px solid #e3a2ba;
  background: #e3a2ba;
  color: white;
  font-size: 2vh;
  font-weight: bold;
  margin-left: 3%;
}
.event_box {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;
  margin-right: 5%;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 25px;
  background-color: #66293e;
  height: 15%;
  padding: 10px 10px;
  width: 85%;
  border: solid#E3A2BA;
  gap: 2vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 3vh 10vh;
  overflow: auto;
}
.image_events {
  display: none;
  grid-column: 1;
  grid-row: 2;
}
.title {
  display: flex;
  justify-content: flex-start;
  grid-column: 2;
  grid-row: 1;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: medium;
}
.description {
  grid-column: 2;
  grid-row: 2;
  color: rgb(255, 213, 241);
  text-align: center;
  font-size: small;
  justify-content: right;
  overflow: hidden;
}
.date {
  display: flex;
  justify-content: flex-end;
  color: #fff;
  grid-column: 2;
  grid-row: 1;
}

.location{ 
  color: #fff;
  grid-column: 2;
  grid-row: 3;
}

@media only screen and (min-width: 767px) {
  .box {
    min-height: 100vh;
    background: #e3a2ba;
    box-sizing: border-box;
    font-weight: normal;
    display: flex;
    flex-direction: row;
  }

  .filters {
    width: 20vh;
    height: 4vh;
    border-radius: 10px;
    border: 1px solid #e3a2ba;
    background: #e3a2ba;
    color: white;
    font-size: 2vh;
    font-weight: bold;
    margin-left: 3%;
  }
  .search_box {
    width: 100%;
    height: 15vh;
    background-color: #bf6183;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    display: flex;
  }

  .buttons_section {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    display: flex;
  }

  .filter_search_dropdown {
    width: 10vh;
    height: 5vh;
    align-self: flex-start;
    background-color: #d7dbdd;
  }

  .search_message {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d7dbdd;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 30%;
    height: 5vh;
  }

  .search_button {
    width: 20vh;
    height: 4vh;
    border-radius: 10px;
    border: 1px solid #e3a2ba;
    background: #e3a2ba;
    color: white;
    font-size: 2vh;
    font-weight: bold;
    margin-left: 3%;
  }

  .table_panel {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: #e3a2ba;
  }
  .event_box {
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 25%;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 25px;
    background-color: #66293e;
    height: 23vh;
    padding: 10px 10px;
    width: auto;
    max-width: 70vh;
    border: solid#E3A2BA;
    gap: 2vh;
    display: grid;
    grid-template-columns: 15vh 45vh;
    grid-template-rows: 3vh 10vh;
    overflow: auto;
  }
  .image_box {
    width: 40%;
    height: 30%;
    border-radius: 25px;
    grid-column: 1;
    grid-row:2;
    margin-left: 5%;
  }
  .image_events {
    width: 10vh;
    height: 10vh;
    border-radius: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .title {
    grid-column: 2;
    grid-row: 1;
    color: white;
    display: match-parent;
    justify-content: center;
    font-weight: bold;
    text-align: center;
    font-size: large;
  }
  .description {
    grid-column: 2;
    grid-row: 2;
    color: rgb(255, 213, 241);
    text-align: center;
    font-size: medium;
    justify-content: right;
    overflow: hidden;
  }
  .date {
    color: white;
    font-weight: bold;
    width: match-parent;
    height: match-parent;
    display: match-parent;
    justify-content: flex-start;
    grid-column: 1;
    grid-row: 1;
    font-size: small;
  }
}

</style>
