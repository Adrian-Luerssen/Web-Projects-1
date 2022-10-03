<template>
  <CurvedBottomNavigation :options="options" v-model="selected" foreground-color='#F23AC1'
  badge-color='#FBC02D'
  background-color='#FFFFFF'
  icon-color='#0000008A'>
      <template #icon="{ props }">
        <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <i :class="props.icon"></i>
      </template>
      <template #title="{ props }">
        <nav>
        <router-link to ="{{ props.path }}"><b>{{ props.title }}</b></router-link>
        </nav>
        <router-view/>
      </template>
      
  </CurvedBottomNavigation>

  </template>


<script>
    import { CurvedBottomNavigation } from "bottom-navigation-vue";
    import "bottom-navigation-vue/dist/style.css"; 
    import { createRouter, createWebHistory } from "vue-router";
    import Home from "../Home/Home.vue";
    import Events from "../Events/Events.vue";

    export default {
      components: { CurvedBottomNavigation },
      data: () => ({
        selected: 1,
        options: [
          {
            id: 1,
            icon: "fas fa-home",
            title: "Home",
            path: "/Home",
          },
          { id: 2,
            icon: "fas fa-bars",
            title: "Timeline",
            path: "/Events",
          },
          {
            id: 3,
            icon: "fas fa-plus",
            title: "Create",
          },
          { id: 4,
            icon: "fas fa-comment",
            title: "Chat"
          },
          { id: 5,
            icon: "fas fa-user",
            title: "Profile"
          },
        ],
      }),
    };
  </script>
  


  
