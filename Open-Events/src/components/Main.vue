

<template>
    <div id="app" v-if =this.loginVisibility>
        <Navbar/>
    </div>
    <div id="app" v-else>
        <div id = "log-sign" v-if = "login_sign">
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
                        <button type="loginButton" class="login__container__form__input__button" @click="loginVisibility = true">
                            Login
                        </button>
                        <button v-on:click="login_sign = false">Sign up?</button>
                </form>
            </div>

        </div>
        <div id = "log-sign" v-else>
            <div class="login__container__form">
                <h1 class="login__container__header__title">Welcome to Open Events!</h1>
                <p class="login__container__header__subtitle">Sign Up</p>
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
                        <button type="loginButton" class="login__container__form__input__button" @click="loginVisibility = true">
                            Sign Up
                        </button>
                        <button v-on:click="login_sign = true">Login?</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar/Navbar.vue';
import Login from './Login/Login.vue';

var loginVisibility;
var login_sign;

export default {
    name: 'App',
    components: { Navbar, Login },
    data: () => ({
        loginVisibility: false,
        login_sign: true
    }),
    functions: {
        loginSetVisibilityNavbar: function(){
            
            this.loginVisibility = true;
            console.log(this.loginVisibility);
            console.log('ha entrado en loginSetVisibilityNavbar');
        }
    }
};
</script>