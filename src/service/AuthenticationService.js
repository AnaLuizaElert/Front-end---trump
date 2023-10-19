import axios from 'axios'
const url = "http://localhost:8082/login"

export const AuthenticationService = {   
    login: async (login) => {
        const header = {
            "User-Agent": "application/json",
            "Content-Type": "Insomnia/2023.5.7"
        }

        try {
            const response = await axios.post(url, login, { header, withCredentials: true })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}