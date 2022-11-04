<template>
  <div class="box">
        <article class="profile">
            <h1 id="title">Profile</h1>
            <img class="image_panel" id="img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png">
            <input class="image_panel" type="file" id="profile_photo" accept="image/png, image/jpeg" >
        </article>
        <section class="information_panel">
          <article class="information">
            <h4 id="First_name" class="text">
              First name: </h4>
            <input type="text" id= "first_name_text" name="first_name"
              placeholder="User" readonly>
            <button type="button" id="change_first_name_button" class="button_change">
              Change...</button>
            <h4 id="Last_name" class="text">
              Last name: </h4>
            <input type="text" id= "last_name_text" name="last_name"
              placeholder="Surname" readonly>
            <button type="button" id="change_last_name_button" class="button_change" >
              Change...</button>
            <h4 id="Email" class="email">
              Email: </h4>
            <input type="text" id= "email_text" name="email"
              placeholder="user@gmail.com" readonly>
            <button type="button" id="change_email_button" class="button_change" >
              Change...</button>
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
<style scoped>
.box{
    background: #E3A2BA;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    display:flex;
    flex-direction: row;
    height: 100vh;
}

.profile{
  display: flex;
  flex-direction: column;
    align-items: center;
    color: white; 
    width: 50%;
}
#title{
  margin-top: 10%;
}
#img{
    width: 300px;
    padding: 40px;
}

.information_panel{
  display: flex;
    flex-direction: row;
    background-color: #BF6183;
    width: 50%;  
    height: 100vh;  
}
.information{
  align-self: center;
  margin-left: 15%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 5%;
  row-gap: 20%;
  width: 40%;
  margin-bottom: 30%;
}
#First_name{
  white-space: nowrap;
  grid-column: 1;
  grid-row: 1;
}
#first_name_text{
  grid-column: 2;
  grid-row: 1;
}
#change_first_name_button{
  grid-column: 3;
  grid-row: 1;
}
#Last_name{
  white-space: nowrap;
  grid-column: 1;
  grid-row: 2;
}
#last_name_text{
  grid-column: 2;
  grid-row: 2;
}
#change_last_name_button{
  grid-column: 3;
  grid-row: 2;
}
#Email{
  grid-column: 1;
  grid-row: 3;
}
#email_text{
  grid-column: 2;
  grid-row: 3;
}
#change_email_button{
  grid-column: 3;
  grid-row: 3;
}
#Password{
  grid-column: 1;
  grid-row: 4;
}
#password_text{
  grid-column: 2;
  grid-row: 4;
}
#change_password_button{
  grid-column: 3;
  grid-row: 4;
}
</style>