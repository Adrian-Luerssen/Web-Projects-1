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
                            id="signup_name"
                            minLength= "1"
                            placeholder="First name"/>
                            <input
                            type="text"
                            minLength= "1"
                            id="signup_lastname"
                            placeholder="Last name"/>
                        </div>
                        <div class="email_registration">
                            <h4 for="email">Email</h4>
                            <input
                            type="email"
                            id="signup_email"
                            size="30"
                            placeholder="Enter your email"/>
                        </div>
                        <div class="password_registration">
                            <h4 for="password">Password</h4>
                            <input
                            type="password"
                            id="signup_password"
                            minLength= "8"
                            size="30"
                            placeholder="Enter your password"/>
                        </div>
                        
                        
                    </div>
                    <button type="loginButton" class="login__container__form__input__button" @click="signUp('signup_email','signup_password','signup_name','signup_lastname')">
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
import auth from './Login/authentication.js';


export default {
    name: 'App',
    components: { Navbar },

    data: () => ({
        loginVisibility: false,
        login_sign: true
    }),
    methods: {
        /* function with 2 parameters */
        verifyLogin: function (email, password) {
            //console.log(email);
            //console.log(password);
            const self = this;
            let res = auth.verifyLogin(document.getElementById(email).value, document.getElementById(password).value);
            res.then(function (result) {
                //console.log(result);
                if (result.ok == true) {
                    self.loginVisibility = true;
                    result.json().then(function (data) {
                        //console.log(data);
                        localStorage.setItem('ApiToken', data.accessToken);
                        //console.log(data.accessToken);
                    });
                    //console.log(result);
                    console.log("Login successful");
                }
                else {
                    self.loginVisibility = false;
                    console.log("Login failed");
                }
            });
        },
        signUp: function (email,password,firstname,lastname) {
            //console.log(email);
            //console.log(password);
            //console.log(firstname);
            //console.log(lastname);
            const self = this;
            let res = auth.signUp(document.getElementById(email).value, document.getElementById(password).value, document.getElementById(firstname).value, document.getElementById(lastname).value);
            res.then(function (result) {
                //console.log(result);
                if (result.ok == true) {
                    self.login_sign = true;
                    console.log("Sign up successful");
                }
                else {
                    self.login_sign = false;
                    console.log("Sign up failed");
                }
            });
        }
    }
};
</script>
<style>
body {
    position: relative;
    height: 100vh;
    background: linear-gradient(
    to right,
    #E3A2BA 0%,
    #E3A2BA 33%,
    #BF6183  33%,
    #BF6183  66%,
    #E3A2BA 66%,
    #E3A2BA 100%
  );
  box-sizing: border-box;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;

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
.email_login{
    padding: 5px 0px;
    color: white;
    gap: 10px;
}
.password_login{
    padding: 5px 0px;
    color: white;
    gap: 10px;
}
.login__container__form__input__button {
    background: #EBD68B;
    border: 1px;
    border-radius: 5px;
    padding: 4px 50px;
    gap: 5px;
    color: #3f051a;
}

.login__container__form__change__to__signup{
    background: white;
    border: 1px;
    border-radius: 5px;
    margin: 10px 10px;
    padding: 4px 60px;
    gap: 5px;
    color: #3f051a;
    cursor: pointer;
}
.signup__container__form__change__to__login{
    background: white;
    border: 1px;
    border-radius: 5px;
    margin: 10px 10px;
    padding: 4px 60px;
    gap: 5px;
    color: #3f051a;
    cursor: pointer;
}
.register__container__form__input {
    flex-direction: column;
    padding: 20px 5px;
    gap: 10px;
    color: white;
    display: grid;
    text-align: left; 
}
.name_registration{
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

}

.email_registration{
    color: white;
    padding: 10px 0px;
    gap: 10px;
}
.password_registration{
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

  h3{
    font-size: 2em;
    line-height: 0.8;
  }
</style>