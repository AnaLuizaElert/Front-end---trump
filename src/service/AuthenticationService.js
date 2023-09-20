import axios from 'axios'
const url = "http://localhost:8082/login"

export const AuthenticationService = {   
    login: (login) => {

        const header = {
            "User-Agent": "application/json",
            "Content-Type": "Insomnia/2023.5.7"
        }

        return axios.post(url, login, { header, withCredentials: true }).then(response => {
            return response;
        }).catch(error => {
            console.error(error);
        });
    }
}