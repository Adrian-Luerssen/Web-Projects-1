<template>
  <CurvedBottomNavigation :options="options" v-model="selected" foreground-color='#B411D4'
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
        <b>{{ props.title }}</b>
      </template>
  </CurvedBottomNavigation>

  </template>


<script>
    import { CurvedBottomNavigation } from "bottom-navigation-vue";
    import "bottom-navigation-vue/dist/style.css";
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faTwitter as fasTwitter } from '@fortawesome/free-brands-svg-icons';
    
    library.add(fasTwitter);

    export default {
      components: { CurvedBottomNavigation },
      data: () => ({
        selected: 1,
        options: [
          {
            id: 1,
            icon: "fas fa-home",
            title: "Home"
          },
          { id: 2,
            icon: "fas fa-wallet",
            title: "Wallet"
          },
          {
            id: 3,
            icon: "fas fa-plus",
            title: "Setting"
          },
          { id: 4,
            icon: "fas fa-bell",
            title: "Notification"
          },
        ],
      }),
    };
  </script>
  


  
