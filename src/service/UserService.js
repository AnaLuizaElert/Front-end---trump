import axios from 'axios'
const url = "http://localhost:8082/user"

export const UserService = {
    create: async (user) => {
        try {
            const response = await axios.post(url + "/create", user)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    remove: async (id) => {
        try {
            const response = await axios.delete(url + "/delete/" + id)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    edit: async (user, id) => {
        try {
            const response = await axios.put(url + "/edit/" + id, user)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    showOne: async (id) => {
        try {
            const response = await axios.get(url + "/listOne/" + id)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    showOneByName: async (name) => {
        try {
            const response = await axios.get(url + "/listOneByName/" + name)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    showAll: async () => {
        try {
            const response = await axios.get(url + "/listAll")
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

}