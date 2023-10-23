import axios from 'axios'
const url = "http://localhost:8082/login"

export const AuthenticationService = {   
    login: async (login) => {
        try {
            const response = await axios.post(url, login, { withCredentials: true })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}