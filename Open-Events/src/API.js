
let APIFunctions = {
    // login
    async login (email, password) 
    {
        try {
            /* CREATE JSON OBJECT FOR BODY WITH USERNAME AND PASSWORD */
            let body = {
                email: email,
                password: password
            }
            let url = "http://puigmal.salle.url.edu/api/v2/login";
            //console.log(JSON.stringify(body))
            /* define url */
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            
            return response;
        }
        catch (error) {
            console.log("Error: ", error);
            return false;
        }
    },

    // register
    async register (email, password, name, surname)
    {
        try {
            /* CREATE JSON OBJECT FOR BODY WITH USERNAME AND PASSWORD */
            let body = {
                name: name,
                last_name: surname,
                email: email,
                password: password,
                image:"default"

            }
            let url = "http://puigmal.salle.url.edu/api/v2/users";
            console.log(JSON.stringify(body))
            /* define url */
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            
            return response;
        } catch {
            console.log("Error: ", error);
            return false;
        }
    }
}

export default APIFunctions;