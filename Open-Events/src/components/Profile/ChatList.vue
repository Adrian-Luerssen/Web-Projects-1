<template class="all_chat">
    <section class="box">
        <section class="chat_list">
            <section class="header_dm">
                <input
                  type="image"
                  class="back_btn"
                  src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png"
                  @click="$router.go(-1)"
                />
                <h3 class="dm_title">Direct messages</h3>
            </section>
            <v-list>
                <v-list-item v-for="chat in chats" :key="chat.id" two-line>
                    <a href="" class="chat_box">
                        <img class="profilePicture" :src="chat.avatar"/>
                        <article class="chat_content">
                            <v-list-item-name class="title">{{ chat.name}}</v-list-item-name>
                            <v-list-item-lastmsg class="subtitle">{{ snippet(chat.last_message)}}</v-list-item-lastmsg>
                        </article>
                    </a>
                </v-list-item>
            </v-list>
        </section>
        <section class="conversation_management">
            <article class="user_data_background">
                <div class="image_box">
                    <img
                        class="picture_chat"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    />
                </div>
                <div class="user_data">
                    <h4 class="name">John Doe</h4>
                    <small class="user_activity">Active 1h ago</small>
                </div>
            </article>
            <article class="message_box"></article>
            <article class="write_message">
                <input
                type="text"
                class="message_input"
                placeholder="Write a message..."
                />
                <button class="send_button">Send</button>
            </article>
        </section>
    </section>
</template>

<script>
    export default{
        data: () => ({
            chats: [
                {  
                    id: 1,
                    name: "John Doe",
                    alias: "john_doe_03",
                    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                    last_message: "See you soon!"
                },
                {  
                    id: 2,
                    name: "James Jackson",
                    alias: "JJ007",
                    avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg",
                    last_message: "Good and you?"
                },
                {  
                    id: 3,
                    name: "Pau Coderch",
                    alias: "pauetee_",
                    avatar: "https://media.tenor.com/NICoVNbKVGYAAAAM/profile-picture.gif",
                    last_message: "Let's grab a beer tonight!"
                },
                {  
                    id: 4,
                    name: "Maria Garcia",
                    alias: "Ma_G_96",
                    avatar: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
                    last_message: "Tell me whenever you are ready."
                },
                {  
                    id: 5,
                    name: "John Doe",
                    alias: "john_doe_03",
                    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                    last_message: "See you soon!"
                },
                {  
                    id: 6,
                    name: "James Jackson",
                    alias: "JJ007",
                    avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg",
                    last_message: "Good and you?"
                },
                {  
                    id: 7,
                    name: "Pau Coderch",
                    alias: "pauetee_",
                    avatar: "https://media.tenor.com/NICoVNbKVGYAAAAM/profile-picture.gif",
                    last_message: "Let's grab a beer tonight!"
                },
                {  
                    id: 8,
                    name: "Maria Garcia",
                    alias: "Ma_G_96",
                    avatar: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
                    last_message: "Tell me whenever you are ready."
                },
                {  
                    id: 9,
                    name: "John Doe",
                    alias: "john_doe_03",
                    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                    last_message: "See you soon!"
                },
                {  
                    id: 10,
                    name: "James Jackson",
                    alias: "JJ007",
                    avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg",
                    last_message: "Good and you?"
                },
                {  
                    id: 11,
                    name: "Pau Coderch",
                    alias: "pauetee_",
                    avatar: "https://media.tenor.com/NICoVNbKVGYAAAAM/profile-picture.gif",
                    last_message: "Let's grab a beer tonight!"
                },
                {  
                    id: 12,
                    name: "Maria Garcia",
                    alias: "Ma_G_96",
                    avatar: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
                    last_message: "Tell me whenever you are ready."
                },
            ]
        }),

        methods: {
            goToChat: function(chat){
                this.$router.push({ name: 'Chat', params: { chat: chat } })
            },

            snippet: function(value){
                return value.substring(0, 20) + '...'
            }
        }
    }
</script>

<style>

.box {
    height: 90vh;
    width: 96vw;
    background-color: #f5f5f5;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    margin-left: 2vw;
    margin-top: 2vh;
    border-radius: 10px;
}

.chat_list{
    grid-column: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}

.header_dm{
    height: 50%;
    width: 100%;
    background-color:#d7dbdd;
    display: grid;
    grid-template-columns: 10% 90%;
    border: solid lightgray;
    align-items: center;
}

.back_btn{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 5%;
}

.dm_title{
    justify-self: center;
    margin-right: 15%;
}

.chat_box{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ecf0f1;
    height: 10vh;
    width: 100%;
    border-bottom: solid lightgrey;
    border-left: solid lightgrey;
    border-right: solid lightgrey;
    display: grid;
    grid-template-columns: 12% 76% 8%;
    grid-template-rows: auto;
    align-items: center;
    color: #401826;
    text-decoration: none;
}

.chat_box:hover{
    background-color: lightgrey;
}
.chat_content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}
.profilePicture{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 7%;
}


.title{
    color: #401826;
    font-weight: bold;
}

.subtitle{
    opacity: 60%;
    color: #401826;
}



.conversation_management {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0%;
    width: 100%;
    height: 100%;
    background-color: #ecf0f1;
    border-radius: 10px;
}

.user_data_background {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #d7dbdd;
    border-top-right-radius: 10px;
    width: 100%;
}
.picture_chat {
    margin-top: 5%;
    margin-left: 20%;
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
.user_data {
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50vh;
    height: 6vh;
}

.message_box {
    width: 100%;
    height: 76.5%;
    background-color: #ecf0f1;
    border-radius: 10px;
}

.write_message {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d7dbdd;
    border-bottom-right-radius: 10px;
    width: 100%;
    height: 11.7%;
}
.message_input {
    margin-left: 5%;
    width: 71.4%;
    height: 50%;
    border-radius: 10px;
    border: none;
    background-color: #ecf0f1;
}
.send_button {
    margin-right: 5%;
    width: 14.3%;
    height: 50%;
    border-radius: 10px;
    border: none;
    background-color: #ecf0f1;
}
</style>