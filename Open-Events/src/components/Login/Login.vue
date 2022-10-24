<!-- LOGIN VIEW -->
<script>
    import style from './login.css';
    import Main from '../Main.vue';
    export default {
        name: 'Login',
        methods: {
          login(){
            console.log('ha entrado en login');
            Main.functions.loginSetVisibilityNavbar();
          }
        }
    }
</script>

<template>
      <div class="login__container__form">
        <h1 class="login__container__header__title">Welcome to Open Events!</h1>
        <p class="login__container__header__subtitle">Login</p>
        <form @submit.prevent="login">
        <label for="email">Email</label>
          <div class="login__container__form__input">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <label for="password">Password</label>
          <div class="login__container__form__input">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
                border="none"
            />
          </div>
            <button type="submit" class="login__container__form__input__button" @click="login">
                Login
            </button>
        </form>
      </div>
</template>