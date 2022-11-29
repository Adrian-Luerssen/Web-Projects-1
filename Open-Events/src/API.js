let APIFunctions = {
  /***********************************************************    USERS     *******************************************************/
  // login
  async login(email, password) {
    try {
      /* CREATE JSON OBJECT FOR BODY WITH USERNAME AND PASSWORD */
      let body = {
        email: email,
        password: password,
      };
      let url = "http://puigmal.salle.url.edu/api/v2/login";
      ////console.log(JSON.stringify(body))
      /* define url */
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      return response;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },

  // register
  async register(email, password, name, surname) {
    try {
      /* CREATE JSON OBJECT FOR BODY WITH USERNAME AND PASSWORD */
      let body = {
        name: name,
        last_name: surname,
        email: email,
        password: password,
        image: "default",
      };
      let url = "http://puigmal.salle.url.edu/api/v2/users";
      /* define url */
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      return response;
    } catch {
      console.log("Error: ", error);
      return false;
    }
  },

  //get profile
  async getProfile(userid, token) {
    try {
      let url = "http://puigmal.salle.url.edu/api/v2/users/" + userid;
      //console.log(token);
      /* define url */
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      //console.log(response);
      return response;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },
  // get profile friends
  async getProfileFriends(userid, token) {
    try {
      let url =
        "http://puigmal.salle.url.edu/api/v2/users/" + userid + "/friends";
      /* define url */
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      return response;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },

  async getProfileEvents(userid, token) {
    try {
      let url =
        "http://puigmal.salle.url.edu/api/v2/users/" + userid + "/assistances";
      /* define url */
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      return response;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },
  async searchUsers(search, token) {
    try {
      let url = "http://puigmal.salle.url.edu/api/v2/users/search?s=" + search;
      /* define url */
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      return response;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },

  /***********************************************************    EVENTS     *******************************************************/
  // create event
  async createEvent(
    name,
    image,
    location,
    longitude,
    latitude,
    description,
    eventStart_date,
    eventEnd_date,
    n_participators,
    type,
    token
  ) {
    try {
      let body = {
        name: name,
        image: image,
        location: location,
        longitude: longitude,
        latitude: latitude,
        description: description,
        eventStart_date: eventStart_date,
        eventEnd_date: eventEnd_date,
        n_participators: n_participators,
        type: type,
      };
      let url = "http://puigmal.salle.url.edu/api/v2/events";
      //console.log(JSON.stringify(body));
      //console.log(token);
      /* define url */
      let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
      });

      return response;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },

  async getAllEvents(token) { 
    try {
        let url = "http://puigmal.salle.url.edu/api/v2/events";
        //console.log(token);
        /* define url */
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return response;
    } catch (error){
        console.log("Error: ", error);
        return false;
    }
},
async getEventRating(eventid, token) {
    console.log("heeey");
    try {
        let url = "http://puigmal.salle.url.edu/api/v2/events/" + eventid + "/assistances";
        //console.log(token);
        /* define url */
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        let rating = 0;
        for (let i = 0; i < response.length; i++) {
            if (response[i].rating != null) {
                rating += response[i].rating;
            }
        }
        console.log(rating);
        return rating / response.length;
    } catch (error){
        console.log("Error: ", error);
        return false;
    }
},
    async getEventsByRating(token) {
        let self = this;
        console.log("getEventsByRating");
        try {
            console.log("getevents: ", error);
            let response;
            try {
                response = self.getAllEvents(token);
            } catch (error) {
                console.log("Error2: ", error);
                return false;
            }
            for (let i = 0; i < response.length; i++) {
                //add rating field to each event
                try {
                    response[i].rating = self.getEventRating(response[i].id, token);
                } catch (error) {
                    console.log("Error3: ", error);
                    return false;
                }
            }
            //sort events by rating
            return response;
        } catch (error){
                console.log("Error4: ", error);
                return false;
        }
    },
  /***********************************************************    CHAT     *******************************************************/
  // get chat
  async getChat(id, token) {
    try {
      let url = "http://puigmal.salle.url.edu/api/v2/messages/" + id;
      //console.log(token);
      /* define url */
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },
  // send message
  async sendMessage(id, message, token) {
    try {
      let url = "http://puigmal.salle.url.edu/api/v2/messages";
      //console.log(token);
      let body = {
        content: message,
        user_id_send: localStorage.getItem("USER_ID"),
        user_id_recived: id,
      };
      /* define url */
      let response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return response;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },
  /***********************************************************    FRIENDS     *******************************************************/
  // get friend requests
  async getFriendRequests(token) {
    try {
      let url = "http://puigmal.salle.url.edu/api/v2/friends/requests";
      //console.log(token);
      /* define url */
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
        console.log("Error: ", error);
        return false;
        }
    },

  async getFriends(token) {
    try {
      let url = "http://puigmal.salle.url.edu/api/v2/friends";
      //console.log(token);
      /* define url */
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return response;
    } catch (error) {
      console.log("Error: ", error);
      return false;
    }
  },
  // accept friend
  async acceptFriend(username, token) {},
};

export default APIFunctions;
