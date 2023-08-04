import axios from 'axios'
const url = "http://localhost:8082"

export const AuthenticationService = {   
    authenticate: (user) => {
        return axios.post(url + "/login", user).then(response => {
            return response;
        }).catch(error => {
            console.error(error);
        });
    }
}