

<template>
    <div id="app" v-if =this.loginVisibility>
        <Navbar/>
    </div>
    <div id="app" v-else>

        <div id = "log-sign" v-if = "login_sign">
            <div class="login__container__form">
                <h1 class="login__container__header__title">Welcome to Open Events!</h1>
                <h3 class="login__container__header__subtitle">Login</h3>
                <form @submit.prevent="login">
                    <div class="login__container__form__input">
                        <div class="email_login">
                            <h4 for="email">Email</h4>
                            <input
                            type="email"
                            id="email"
                            size="30"
                            placeholder="Enter your email"
                            />
                        </div>
                        <div class="password_login">
                            <h4 for="password">Password</h4>
                            <input
                            type="password"
                            id="password"
                            size="30"
                            placeholder="Enter your password"/>
                        </div>
                    </div>
                        <button type="loginButton" class="login__container__form__input__button" @click="verifyLogin('email', 'password')">
                            Login
                        </button>
                        <button type="signUp" class= "login__container__form__change__to__signup" v-on:click="login_sign = false">Sign up?</button>
                </form>
            </div>

        </div>
        <div id = "log-sign" v-else>

            <div class="login__container__form">
                <h1 class="login__container__header__title">Welcome to Open Events!</h1>
                <h3 class="login__container__header__subtitle">Sign Up</h3>
                <form @submit.prevent="login">
                    <div class="register__container__form__input">
                        <h4 for="name">Full Name</h4>
                        <div class="name_registration">
                            <input
                            type="text"
                            id="name"
                            placeholder="First name"/>
                            <input
                            type="text"
                            id="name"
                            placeholder="Last name"/>
                        </div>
                        <div class="email_registration">
                            <h4 for="email">Email</h4>
                            <input
                            type="email"
                            id="email"
                            size="30"
                            placeholder="Enter your email"/>
                        </div>
                        <div class="password_registration">
                            <h4 for="password">Password</h4>
                            <input
                            type="password"
                            id="password"
                            size="30"
                            placeholder="Enter your password"/>
                        </div>
                        
                        
                    </div>
                    <button type="loginButton" class="login__container__form__input__button" @click="verifyLogin(document.findElementById('email'), document.findElementById('password'))">
                            Sign Up
                        </button>
                    <button type="logIn" class= "signup__container__form__change__to__login" v-on:click="login_sign = true">Login?</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';
import Login from './Login/Login.vue';
import auth from './Login/authentication.js';


export default {
    name: 'App',
    components: { Navbar, Login },
    data: () => ({
        loginVisibility: false,
        login_sign: true
    }),
    methods: {
        /* function with 2 parameters */
        verifyLogin: function (email, password) {
            console.log(email);
            console.log(password);
            const self = this;
            let res = auth.verifyLogin(document.getElementById(email).value, document.getElementById(password).value);
            res.then(function (result) {
                console.log(result);
                if (result.ok == true) {
                    self.loginVisibility = true;
                    console.log("Login successful");
                }
                else {
                    self.loginVisibility = false;
                    console.log("Login failed");
                }
            });
            return ;

            /* if email and password are correct */
            if (dc == "admin" &&  document.getElementById(password).value == "admin") {
                /* set loginVisibility to true */
                return true;
            }
            /* if email and password are incorrect */
            else {
                /* set loginVisibility to false */
                return false;
            }
        }
    }
};
</script>
