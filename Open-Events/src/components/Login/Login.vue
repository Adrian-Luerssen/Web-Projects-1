<template>
    <div class="login__container__form">
        <h1 class="login__container__header__title">Welcome to Open Events!</h1>
        <h3 class="login__container__header__subtitle">Login</h3>
        <form @submit.prevent="login">
            <div class="login__container__form__input">
                <div class="email_login">
                    <h4 for="email">Email</h4>
                    <input type="email" id="email" size="30" placeholder="Enter your email" />
                </div>
                <div class="password_login">
                    <h4 for="password">Password</h4>
                    <input type="password" id="password" size="30" placeholder="Enter your password" />
                </div>
            </div>
            <button type="loginButton" class="login__container__form__input__button" @click="verifyLogin('email', 'password')">
                Login
            </button>
            <button type="signUp" class="login__container__form__change__to__signup" @click="$emit('switch-to-signUp')" >Sign up?</button>
        </form>
    </div>
</template>

<script>

import auth from './authentication.js';
export default {
    name: 'Login',
    
    methods: {
        verifyLogin: async function (email, password) {
            //console.log(email);
            //console.log(password);
            const self = this;
            let res = auth.verifyLogin(document.getElementById(email).value, document.getElementById(password).value);
            res.then(function (result) {
                //console.log(result);
                if (result.ok == true) {
                    
                    result.json().then(function (data) {
                        //console.log(data);
                        localStorage.setItem('ApiToken', data.accessToken);
                        //console.log(data.accessToken);
                    });
                    //console.log(result);
                    console.log("Login successful");
                    self.$emit('switch-to-navbar');
                }
                else {
                    self.loginVisibility = false;
                    console.log("Login failed");
                }
            });
        }
    }
}
</script>