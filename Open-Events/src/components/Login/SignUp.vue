<template>
    <div class="login__container__form">
        <h1 class="login__container__header__title">Welcome to Open Events!</h1>
        <h3 class="login__container__header__subtitle">Sign Up</h3>
        <form @submit.prevent="login">
            <div class="register__container__form__input">
                <h4 for="name">Full Name</h4>
                <div class="name_registration">
                    <input type="text" id="signup_name" minLength="1" placeholder="First name" />
                    <input type="text" minLength="1" id="signup_lastname" placeholder="Last name" />
                </div>
                <div class="email_registration">
                    <h4 for="email">Email</h4>
                    <input type="email" id="signup_email" size="30" placeholder="Enter your email" />
                </div>
                <div class="password_registration">
                    <h4 for="password">Password</h4>
                    <input type="password" id="signup_password" minLength="8" size="30" placeholder="Enter your password" />
                </div>
    
    
            </div>
            <button type="loginButton" class="login__container__form__input__button" @click="signUp('signup_email', 'signup_password', 'signup_name', 'signup_lastname')">
                Sign Up
            </button>
            <button type="logIn" class="signup__container__form__change__to__login" @click = "$emit('switch-to-login')">Login?</button>
        </form>
    </div>
</template>

<script>
import auth from './authentication.js';
export default {
    name: 'Login',
    
    methods: {
        signUp: function (email, password, firstname, lastname) {
            //console.log(email);
            //console.log(password);
            //console.log(firstname);
            //console.log(lastname);
            const self = this;
            let res = auth.signUp(document.getElementById(email).value, document.getElementById(password).value, document.getElementById(firstname).value, document.getElementById(lastname).value);
            res.then(function (result) {
                //console.log(result);
                self.$emit('switch-to-login')
                if (result.ok == true) {
                    localStorage.setItem('login_sign', true);
                    console.log("Sign up successful");
                }
                else {
                    self.login_sign = false;
                    console.log("Sign up failed");
                }
            });
        }
    }
}
</script>