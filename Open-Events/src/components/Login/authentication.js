import apiFunc from '../../API.js'
/* boolean function verify login */
let functions = {
    async verifyLogin (username, password)
    {
        let response = await apiFunc.login(username, password);
        //console.log(response.ok);
        return response;
        try {
            var random = response.accessToken;
            console.log(random);
        } catch (error) {
            console.log("Error: ", error);
            return false;
        }
        return true;
    },
    async signUp(email, password, name, surname)
    {
        let response = await apiFunc.register(email, password, name, surname);
        return response;
    }
} 

export default functions;


// Path: src/components/Login/Login.vue
// import { defineComponent } from 'vue';
// import { verifyLogin } from './authentication';
//
// export default defineComponent({
//     name: 'Login',
//     data() {
//         return {
//             username: '',
//             password: ''
//         }
//     },
//     methods: {
//         login() {
//             if (verifyLogin(this.username, this.password)) {
//                 this.$router.push('/Home');
//             } else {
//                 alert('Invalid username or password');
//             }
//         }
//     }
// });
