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
            icon: fasTwitter,
            title: "Home",
          },
          { id: 2,
            icon: "fas fa-wallet",
            title: "Wallet" },
          {
            id: 3,
            icon: "fas fa-plus",
            title: "Setting",
          },
          { id: 4,
            icon: "fas fa-bell",
            title: "Notification",
        },
        ],
      }),
    };
  </script>

<template>

<CurvedBottomNavigation :options="options" v-model="selected">
    <template #icon="{ props }">
        <font-awesome-icon> {{props.icon}}</font-awesome-icon>
    </template>
    <template #title="{ props }">
      <b>{{ props.title }}</b>
    </template>
  </CurvedBottomNavigation>

  </template>
  
