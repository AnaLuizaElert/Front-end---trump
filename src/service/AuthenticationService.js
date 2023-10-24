import axios from 'axios'

const baseURL = 'http://localhost:8082/login'; // Altere para a URL da sua API

export const AuthenticationService = {
    login: async (login) => {
        try {
            const response = await axios.post(baseURL, login, {
                withCredentials: true, 
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
