import axios from 'axios'

const baseURL = 'http://localhost:8082/login'; // Altere para a URL da sua API
const allowedOrigin = 'http://localhost:3000'; // Sua origem permitida

export const AuthenticationService = {
    login: async (login) => {
        try {
            const response = await axios.post(baseURL, login, {
               
                withCredentials: true, // Habilita credenciais (cookies)
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
