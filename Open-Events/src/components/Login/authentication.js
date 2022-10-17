import apiFunc from '../../API.js'
/* boolean function verify login */
let functions = {
    async verifyLogin (username, password)
    {
        let response = await apiFunc.login(username, password);
        try {
            var random = response.accessToken;
            console.log(random);
        } catch (error) {
            console.log("Error: ", error);
            return false;
        }
        return true;
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
