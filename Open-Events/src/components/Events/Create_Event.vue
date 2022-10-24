<template>
  <div class="box">
        <div class="left_information">
            <div class="title">
                <h2>Publish event</h2>
                <img id="img" src="https://thegoldenbutler.com/wp-content/uploads/2017/05/events-768x482.jpg">
            </div>
            <div class="description">
                <h4>Title of the event</h4>
                <input type="text" id="title" name="title"
                placeholder="Title">
                <h4>Description</h4>
                <textarea type="text" id="description" name="description" cols="40" rows="10" 
                placeholder="Enter a short description of the event to inform teh users about the key point"
                ></textarea>
            </div>
        </div>

        <div class="right_information">
            <table>
                <form>
                    <tr>
                        <td><h4 id="date" class="date">
                                Date of the event: </h4>
                        </td>
                        <td><input type="date" name="date"
                                placeholder="Date"
                                class="dd/mm/yyyy">
                        </td>
                    </tr>
                    <tr>
                        <td><h4 id="price" class="price">
                                Price of the event: </h4>
                        </td>
                        <td><input type="number" name="price"
                                placeholder="Price"
                                class="price">
                        </td>
                    </tr>
                    <tr>
                        <td><h4 id="location" class="location">
                                Location of the event: </h4>
                        </td>
                        <td><input type="text" name="location"
                                placeholder="Location"
                                class="location">
                        </td>
                    </tr>
                    <tr>
                        <td><h4 id="tag" class="tags">
                                Categories: </h4>
                        </td>
                        <td><input type="text" name="tags"
                                placeholder="Tags"
                                class="tags">
                        </td>
                    </tr>
                </form>
            </table>               
        </div>
        <button type="button">Publish Event</button>
  </div>
</template>


<style >
/*
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
  

}
*{
    margin: 0;
    width: auto;
    height: auto;
    
}

.box{
    color: white;
    display:flex;
    flex-direction: row;
    height: 600px;
    width: 900px;
}
button{
    white-space: nowrap;
    margin-top:60%;
    margin-left: -24%;
    padding: 2px 18px;
    color: black;
    font-size: 16px;
    background-color: #EBD68B;
    
}
.left_information{
    align-items: center;
    color: white; 
    margin-left: -10mm; 
}

#img{
    width: 350px;
    padding: 10mm;
}


.title{
    white-space: nowrap;
    color: white;
    padding: 1mm;
}

.description{
    flex-direction: column;
    padding: 10px 10px;
    gap: 5px;
    color: white;
    display: grid;
    text-align: left;   
}
.right_information{
    margin-top: 15%;
    margin-left: 10%;

}
table {  
    border-collapse: collapse;
    border-style: hidden;
    border-spacing: 0 15px;
}
th, td {
    border-bottom: 2px solid cyan;
    height: 50px;
    width: 150px;
    text-align: center;
    padding: 0px;
}
hr {
    background-color: cyan;
    height: 0.5mm;
}
.date{
    white-space: nowrap;
    display:flex;
    flex-direction: row;
    padding: 2px 10px;
}
.price{
    white-space: nowrap;
    display:flex;
    flex-direction: row;
    padding: 2px 10px;
}
.location{
    white-space: nowrap;
    display:flex;
    flex-direction: row;
    padding: 2px 10px;
}
.tags{
    white-space: nowrap;
    display:flex;
    flex-direction: row;
    padding: 4px 10px;
}
*/
</style>