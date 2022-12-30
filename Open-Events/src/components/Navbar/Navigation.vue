<template>
    <header>
        <div class="title_box">
            <img class="img_app" src="https://thumbs.dreamstime.com/b/crown-icon-blue-background-flat-style-vector-illustration-184979979.jpg" />
            <p class="description">OPEN EVENTS</p>
        </div>
        <ul class="nav_items">
            <RouterLink v-bind:class="{ active: isActive === window.id }" @click="setActive(window.id)" v-for="window in options" :to=window.path  class="menu-item">{{window.title}}</RouterLink>
            <li @mouseenter="showDropdown=true" class="menu-item">Account▼
                <ul v-if="showDropdown" @mouseleave="showDropdown=false" class="dropdown">
                    <RouterLink v-bind:class="{ active: isActive === window.id }" @click="setActive(window.id)" v-for="window in account" :to=window.path class="dropdown-item" >{{window.title}}</RouterLink>
                </ul>
            </li>
            <RouterLink class="div_icon" to="/Profile/ChatList">
                <img class="chat_icon" src="https://cdn-icons-png.flaticon.com/512/134/134914.png?w=360"/>
            </RouterLink>
        </ul>
    </header>
    <router-view></router-view>
    <footer>
        <Navbar/>
    </footer>
</template>

<script>
import Navbar from './Navbar.vue';

class Window{
    constructor(id, title, path){
        this.id = id;
        this.title = title;
        this.path = path;
    }
}

export default {
    name: 'Navigation',
    components: {
        Navbar
    },
    data(){
        return{
            showDropdown: false,
            isActive: 0,
            options: [
                new Window(1, "Home", "/Events"),
                new Window(2, "Timeline", "/UpcomingEvents"),
                new Window(3, "Friends", "/Friends"),
                new Window(4, "Create", "/CreateEvent"),
            ],
            account: [
                new Window(5, "Profile", "/Profile"),
                new Window(6, "Statistics", "/Profile/Statistics"),
                new Window(7, "Logout", "#"),
            ]
        }
    },
    methods:
    {
        setActive(value){
            this.isActive = value;
        }
    }
}
</script>

<style>

header{
    display: none;
}
footer{
    display: fixed;
}



@media only screen and (min-width: 768px){
    header{
        display: grid;
        grid-template-columns: 20% 80%;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100px;
        z-index: 999;
        position: sticky;
        background-color: #2E3440;
    }
    
    footer{
        display: none;
    }

    .title_box{
        grid-column: 1;
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        align-items: center;
    }
    .img_app{
        width: 17%;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
    .description{
        font-size: 24px;
        color: #FFF;
    }

    .menu-item{
        list-style: none;
        width: 18%;
        height: 80%;
        display: inline-block;
        flex-wrap: nowrap;
        color: #FFF;;
        position: relative;
        text-align:center;
        align-self: center;
        line-height: 80px;
        font-size: 24px;
        text-decoration: none;
        text-align: center;
    }
    
    .active{
        background: black;
        color: #005B88;
        border-radius: 10px;
        transition: 0.5s;
    }
    
    .nav_items{
        grid-column: 2;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        position: relative;
    }
    .dropdown {
        width: 100%;
        background: #2E3440;
        position: absolute;
        display: block;
        padding-inline-start: 0px;
    }
    .menu-item:hover {
        background: black;
        border-radius: 10px;
        transition: 0.5s;
    }

    .dropdown-item{
        display: block;
        color: #FFF;
        text-decoration: none;
        font-size: 24px;
        height: 10vh;

    }

    .dropdown-item:hover{
        background: black;
    }

    .div_icon{
        width: 18%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .chat_icon{
        width: 25%;
        aspect-ratio: 1/1;
    }
}

</style>