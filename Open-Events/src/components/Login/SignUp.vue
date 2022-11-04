<template>
    <div class="box">
        <div class="login__container__form">
            <h1 class="login__container__header__title">Welcome to Open Events!</h1>
            <h3 class="login__container__header__subtitle">Sign Up</h3>
            <form @submit.prevent="login">
                <div class="register__container__form__input">
                    <h4 class="text_placement" for="name">Full Name</h4>
                    <div class="name_registration">
                        <input type="text" id="signup_name" minLength="1" placeholder="First name" />
                        <input type="text" minLength="1" id="signup_lastname" placeholder="Last name" />
                    </div>
                    <div class="email_registration">
                        <h4 class="text_placement" for="email">Email</h4>
                        <input type="email" id="signup_email" size="30" placeholder="Enter your email" />
                    </div>
                    <div class="password_registration">
                        <h4 class="text_placement" for="password">Password</h4>
                        <input type="password" id="signup_password" minLength="8" size="30" placeholder="Enter your password" />
                    </div>    
                </div>
                <button type="loginButton" class="login__container__form__input__button" @click="signUp('signup_email', 'signup_password', 'signup_name', 'signup_lastname')">
                    Sign Up
                </button>
                <button type="logIn" class="signup__container__form__change__to__login" @click = "$emit('switch-to-login')">Login?</button>
            </form>
        </div>
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
<style scoped>
.box{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #E3A2BA;
    font-family: Arial, Helvetica, sans-serif;
  }
.login__container__form {
    align-self: center;
    background-color: #BF6183;
    color: white;
    display: flex;
    flex-direction: column;
    width: 33%;
    height: 100vh;
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
    text-align: center;
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
.text_placement{
    margin-bottom: 5%;
}

.signup__container__form__change__to__login{
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
</style>