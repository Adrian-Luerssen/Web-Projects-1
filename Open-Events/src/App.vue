
<template>
    <component v-bind:is="component" 
    v-on:switch-to-signUp="component = 'SignUp'"
    v-on:switch-to-Login="component = 'Login'"
    v-on:switch-to-navbar="component = 'Navbar'"></component>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Login from './components/Login/Login.vue';
import SignUp from './components/Login/SignUp.vue';
localStorage.setItem('component', 'Login');

export default {
    name: 'App',
    components: { Navbar, Login, SignUp },

    data: () => {
        return {
            component: 'Login',
            renderComponent: true,
        };
    },

   
};

</script>

<style>
body {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(to right,
            #E3A2BA 0%,
            #E3A2BA 33%,
            #BF6183 33%,
            #BF6183 66%,
            #E3A2BA 66%,
            #E3A2BA 100%);
    box-sizing: border-box;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;

}

* {
    margin: 0;
    width: auto;
    height: auto;

}

.login__container__form {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login__container__header__title {
    margin-top: 10%;
    width: 400px;
    color: white;
    text-align: center;
    padding-bottom: 10px;
}

.login__container__header__subtitle {
    color: #EBD68B;
    padding: 30px 0;
}

.login__container__form__input {
    flex-direction: column;
    padding: 20px 10px;
    gap: 10px;
    color: white;
    display: grid;
    text-align: left;
}

.email_login {
    padding: 5px 0px;
    color: white;
    gap: 10px;
}

.password_login {
    padding: 5px 0px;
    color: white;
    gap: 10px;
}

.login__container__form__input__button {
    background: #EBD68B;
    border: 1px;
    border-radius: 5px;
    margin: 10px 50px;
    padding: 4px 10px;
    gap: 5px;
    color: #3f051a;
    cursor: pointer;
}

.login__container__form__change__to__signup {
    background: white;
    border: 1px;
    border-radius: 5px;
    margin: 10px 50px;
    padding: 4px 10px;
    gap: 5px;
    color: #3f051a;
    cursor: pointer;
}

.signup__container__form__change__to__login {
    background: white;
    border: 1px;
    border-radius: 5px;
    margin: 10px 50px;
    padding: 4px 10px;
    gap: 5px;
    color: #3f051a;
    cursor: pointer;
}

.register__container__form__input {
    flex-direction: column;
    padding: 20px 10px;
    gap: 10px;
    color: white;
    display: grid;
    text-align: left;
}

.name_registration {
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

}

.email_registration {
    color: white;
    padding: 10px 0px;
    gap: 10px;
}

.password_registration {
    padding: 10px 0px;
    color: white;
    gap: 10px;
}

h1 {
    font-size: 3em;
    line-height: 1.5;
}

h2 {
    font-size: 2.5em;
    line-height: 1;
}

h3 {
    font-size: 2em;
    line-height: 0.8;
}
</style>