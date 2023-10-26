import axios from 'axios'
const url = "http://localhost:8082/user"

export const UserService = {
    create: async (user) => {
        try {
            const response = await axios.post(url, user, 
                {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    edit: async (user, id) => {
        try {
            const response = await axios.put(url + "/" + id, user, 
            {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    editBySytem: async (user, id) => {
        try {
            const response = await axios.put(url + "/editBySytem/" + id, user, 
            {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    showOne: async (id) => {
        try {
            const response = await axios.get(url + "/listOne/" + id, 
            {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    showOneByName: async (name) => {
        try {
            const response = await axios.get(url + "/listOneByName/" + name, 
            {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    showAll: async () => {
        try {
            const response = await axios.get(url, {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }, 
    
    remove: async (id) => {
        try {
            const response = await axios.delete(url + "/" + id, {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

}