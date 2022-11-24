<template>
    <div class="search_box">
        <input type="text" class="search_msg" v-model="search" v-on:focusin="hide = true" v-on:focusout="hide = false"  placeholder="Search for events..." />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Line-style-icons-magnifying-glass.svg/1200px-Line-style-icons-magnifying-glass.svg.png" class="search_icon" />
    </div>
    <div class="event_box">
        <div class="event" v-if="hide" v-for="event in filteredElements" >
            <img class="event_img" :src="event.img"/>
            <h3 class="event_name">{{event.name}}</h3>
            <h4 class="event_date">{{event.date}}</h4>
            <h4 class="event_location">{{event.location}}</h4>
        </div>
    </div>
    
    <nav>
        <ul class="nav_items">
            <li class="menu-item"><a href="#">Home</a></li>
            <li class="menu-item"><a href="#">My Events</a></li>
            <li class="menu-item"><a href="#">Friends</a></li>
            <li class="menu-item"><a href="#">Account ▼</a>
                <ul class="dropdown">
                    <li class="menu-item"><a href="#">My Profile</a></li>
                    <li class="menu-item"><a href="#">Statistics</a></li>
                    <li class="menu-item"><a href="#">Log Out</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    
</template>

<script>

    class Event {
        constructor(name, description, img, date, location){
            this.name = name;
            this.description = description;
            this.img = img;
            this.date = date;
            this.location = location;
        }
    }
    export default {
        name: 'Navbar2',
        data () {
            return {
                elements: [
                    new Event(
                        "Oktoberfest",
                        "The Oktoberfest is the world's largest Volksfest, featuring a beer festival and a travelling funfair.",
                        "https://www.thebeertimes.com/wp-content/uploads/2017/09/Oktoberfest-Munich.jpg",
                        "2021-09-18",
                        "Carrer Sant Joan de la Salle, 42, 08022, Barcelona",
                    ),
                    new Event(
                        "NYFW",
                        "Officially called Mercedes-Benz Fashion Week, annual fashion week event held in New York City considered the most important event in the fashion industry.",
                        "https://fotografias.antena3.com/clipping/cmsimages02/2022/09/13/4E016859-5F7C-46D3-92AB-E79CA8345834/mercedes-benz-fashion-week-madrid-2022-semana-moda-madrid_98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=low&format=webply",
                        "2021-09-18",
                        "Carrer Sant Joan de la Salle, 42, 08022, Barcelona",
                    ),
                    new Event(
                        "Coachella",
                        "The Coachella Valley Music and Arts Festival is a major music festival that takes place over three days in the last week of April in Indio, California.",
                        "https://images.ecestaticos.com/wx-uXc24uN-tnn9ei0Bljt-3qW4=/0x118:2271x1394/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1c7%2Fa35%2F419%2F1c7a354190cbb2c578c5c4f3e0c82a52.jpg",
                        "2021-09-18",
                        "Carrer Sant Joan de la Salle, 42, 08022, Barcelona",
                    ),
                    new Event(
                        "Sallefest",
                        "The party you have been waiting all year is back. During a week full of activities, the boredom is the only one not welcome.",
                        "https://i.ytimg.com/vi/FGs_66qxW2U/maxresdefault.jpg",
                        "2021-09-18",
                        "Carrer Sant Joan de la Salle, 42, 08022, Barcelona",
                    ),
                    new Event(
                        "Movies & Wine",
                        "A perfect date to spend some time with the ones you love or just to be by yourself, this is a great opportunity to relax and ejoy calm.",
                        "https://www.winemag.com/wp-content/uploads/2015/03/WE_Movies0336.jpg",
                        "2021-09-18",
                        "Carrer Sant Joan de la Salle, 42, 08022, Barcelona",
                    ),
                ],
                search: "",
                information: [
                    {title: 'My profile', link: '#'},
                    {title: 'My statistics', link: '#'},
                    {title: 'Delete account', link: '#'},
                    {title: 'Log out', link: '#'},
                ],
                hide: false,
            }
        },

        computed: {
            filteredElements() {
                return this.elements.filter(element => {
                    return element.name.toLowerCase().includes(this.search.toLowerCase());
                });
            }
        }
        
    }
</script>

<style>
nav{
    grid-row: 1;
    grid-column: 2;
    display: grid;
    width: 100%;
    height: 100%;
    justify-content: space-between; 
    align-items: center;
}

.nav_items{
    grid-column: 2;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    position:relative;

}
.menu-item{
    list-style: none;
    align-items: center;
}
.menu-item a{
    width: auto;
    display: inline-block;
    flex-wrap: nowrap;
    position: relative;
    font-size: 24px;
    align-self: center;
}

.event_img{
    grid-area: a;
    width: 8vh;
    height: 8vh;
    border-radius: 50%;
}


.event_name{
    grid-area: b;

}

.event_date{
    grid-area: c;
    opacity: 0.5;
}

.event_location{
    grid-area: d;
    opacity: 0.5;
}

.event_box{
    display: block;
    position: absolute;
    grid-column: 1;
    grid-row: 2;
    margin-left: 2%;
}
.event{
    justify-content: center;
    height: 10vh;
    border-radius: 5px;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    width: auto;
    padding: 0 10px;
    background:#ecf0f1;
    display: grid;
    grid-template-areas: "a b . c" "a d d d";
    align-items: center;
    position: relative;
}

.search_msg {
    width: 90%;
    height: 100%;
    border-radius: 10px;
    border: none;
    background-color: #ecf0f1;

}

.search_icon:hover{
    background-color: lightgray;
    transitioN: 0.2s;
}
.search_icon {
    width: 5vh;
    height: 5vh;
    margin-left: 2%;
    background-color: #ecf0f1;
    border-radius: 10%;
    
}
.search_box {
    align-self: center;
    display: flex;
    flex-direction: row;
    grid-column: 1;
    grid-row: 1;
    align-items: center;
    margin-left: 5%;
    width: 90%;
    height: 70%;
    border-radius: 10px;
    border: none;
    background-color: #224C84;
    position: relative;
}

.nav_items li a {
    display: block;
    padding: 20px 25px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    font-size: 26px;
}

.dropdown li a {
    display: block;
    padding: 20px 25px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    font-size: 26px;
}
.dropdown li{
    display: block;
}

.dropdown {
    width: 100%;
    background: #224C84;
    position: absolute;
    z-index: 999;
    display: none;
}

.menu-item:hover {
    background: #224C66;
    border-radius: 10%;
}

.menu-item:hover .dropdown {
    display: block;
    animation: fadeIn 0.4s;
}







@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

</style>