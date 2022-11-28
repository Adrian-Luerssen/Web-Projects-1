<template>
  <div class="box">
    <div class="login__container__form">
      <h1 class="login__container__header__title">Welcome to Open Events!</h1>
      <h3 class="login__container__header__subtitle">Login</h3>
      <form @submit.prevent="login">
        <div class="login__container__form__input">
          <div class="email_login">
            <h3 class="text_placement">Email</h3>
            <input
              type="email"
              id="email"
              size="30"
              placeholder="Enter your email"
            />
          </div>
          <div class="password_login">
            <h3 class="text_placement">Password</h3>
            <input
              type="password"
              id="password"
              size="30"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button
          type="loginButton"
          class="login__container__form__input__button"
          @click="verifyLogin('email', 'password')"
        >
          Login
        </button>
        <button
          type="signUp"
          class="login__container__form__change__to__signup"
          @click="$emit('switch-to-signUp')"
        >
          Sign up?
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import APIFunctions from "../../API";
import auth from "./authentication.js";
export default {
  name: "Login",

  methods: {
    verifyLogin: async function (email, password) {
      //console.log(email);
      //console.log(password);
      const self = this;
      let res = auth.verifyLogin(
        document.getElementById(email).value,
        document.getElementById(password).value
      );
      res.then(function (result) {
        //console.log(result);
        if (result.ok == true) {
          result.json().then(function (data) {
            //console.log(data);
            localStorage.setItem("API_TOKEN", data.accessToken);
            console.log(data.accessToken);
          });
          //console.log(result);
          console.log("Login successful");
          APIFunctions.searchUsers(
            document.getElementById(email).value,
            localStorage.getItem("API_TOKEN")
          ).then(function (result) {
            result.json().then(function (data) {
              console.log(data);
              localStorage.setItem("USER_ID", data[0].id);
              console.log(data[0].id);
            });
          });
          self.$emit("switch-to-navbar");
        } else {
          self.loginVisibility = false;
          console.log("Login failed");
        }
      });
    },
  },
};
</script>
<style scoped>
.box {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #e3a2ba;
  font-family: Arial, Helvetica, sans-serif;
}
.login__container__form {
  align-self: center;
  background-color: #bf6183;
  color: white;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100vh;
}

.login__container__header__title {
  margin-top: 20%;
  margin-left: 5%;
  width: 200px;
  font-size: 200%;
  color: white;
  text-align: center;
  padding-bottom: 10px;
}

.login__container__header__subtitle {
  color: #ebd68b;
  padding: 30px 0;
  text-align: center;
}

.login__container__form__input {
  padding: 20px 10px;
  gap: 10px;
  color: white;
  display: grid;
}
.email_login {
  padding: 5px 0px;
  color: white;
}
.text_placement {
  margin-bottom: 5%;
}
#email {
  width: 28vh;
}
.password_login {
  padding: 5px 0px;
  color: white;
}
#password {
  width: 28vh;
}
.login__container__form__input__button {
  background: #ebd68b;
  border: 1px;
  border-radius: 5px;
  margin: 10px 50px;
  padding: 4px 10px;
  gap: 5px;
  color: #3f051a;
  cursor: pointer;
  font: 1em sans-serif;
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
  font: 1em sans-serif;
}
@media only screen and (min-width: 768px) {
  .login__container__form {
    align-self: center;
    background-color: #bf6183;
    color: white;
    display: flex;
    flex-direction: column;
    width: 33%;
    height: 100vh;
  }

  .login__container__header__title {
    margin-top: 20%;
    width: 400px;
    font-size: 300%;
    color: white;
    text-align: center;
    padding-bottom: 10px;
  }

  .password_login {
    padding: 5px 0px;
    color: white;
  }
  #email {
    width: 40vh;
  }
  #password {
    width: 40vh;
  }
}
</style>
