<template>
  <div class="box">
        <article class="profile">
            <h1>Profile</h1>
            <img id="img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png">
            <input type="file" id="profile_photo" accept="image/png, image/jpeg" >
        </article>
        <section class="information">
          <article class="div_name">
            <h4 id="First_name" class="text">
              First name: </h4>
            <input type="text" id= "first_name_text" name="first_name"
              placeholder="User" readonly>
            <button type="button" id="change_first_name_button" class="button_change">
              Change...</button>
          </article>
          <article class="div_last">
            <h4 id="Last_name" class="text">
              Last name: </h4>
            <input type="text" id= "last_name_text" name="last_name"
              placeholder="Surname" readonly>
            <button type="button" id="change_last_name_button" class="button_change" >
              Change...</button>
          </article>
          <article class="div_email">
            <h4 id="Email" class="email">
              Email: </h4>
            <input type="text" id= "email_text" name="email"
              placeholder="user@gmail.com" readonly>
            <button type="button" id="change_email_button" class="button_change" >
              Change...</button>
          </article>
          <article class="div_password">
            <h4 id="Password" class="password">
              Password: </h4>
            <input type="text" id= "password_text" name="password"
              placeholder="ABCD1234" readonly>
            <button type="button" id="change_password_button" class="button_change" >
              Change...</button>
          </article>      
        </section>
  </div>
</template>

<script>
/*
var change_name = true; 
const button_name = document.getElementById("change_first_name_button");
button_name.addEventListener("click", changeNameFunction);

function changeNameFunction() {
    if(change_name == true){
        document.getElementById("first_name_text").readOnly = false;
        change_name=false;
    }else{
        document.getElementById("first_name_text").readOnly = true;
        change_name=true;
    }
} 
*/
</script>
<style>
body {
    min-height: 100vh;
    background: linear-gradient(
      to right,
      #E3A2BA 0%,
      #E3A2BA 50%,
      #BF6183 50%,
      #BF6183 100%
    );
    box-sizing: border-box;
    font-weight: normal;
    position: relative;
}

*{
    margin: 0;
    width: auto;
    height: auto;
    
}

.box{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    display:flex;
    flex-direction: row;
    height: 600px;
    width: 900px;
}

.profile{
    align-items: center;
    color: white; 
    margin-left: -10mm; 
    margin-top: 10%;
}
#img{
    width: 300px;
    padding: 40px;
}

.information{
    margin-top: 15%;
    margin-left: 15%;
    width: 40%;
    height: 200px;
    display: grid;
    grid-row-gap: 20%;
    grid-template-rows: repeat(4, 1fr);    
}
.div_name{
    color: white;
    white-space: nowrap;
    display: grid;
    grid-column-gap: 10%;
    grid-template-columns: 70px 200px 100px;
}
.div_last{
    color: white;
    white-space: nowrap;
    display: grid;
    grid-column-gap: 10%;
    grid-template-columns: 70px 200px 100px;
}
.div_email{
    color: white;
    white-space: nowrap;
    display: grid;
    grid-column-gap: 10%;
    grid-template-columns: 70px 200px 100px;
}

.div_password{
    color: white;
    white-space: nowrap;
    display: grid;
    grid-column-gap: 10%;
    grid-template-columns: 70px 200px 100px;
}

.button_change{
    white-space: nowrap;
    padding: 4px 10px;
    color: black;
    font-size: 12px;
    background-color: #EBD68B;
    border-radius: 20px;
}
</style>