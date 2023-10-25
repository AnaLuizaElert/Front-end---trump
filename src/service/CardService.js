import axios from 'axios'
const url = "http://localhost:8082/card"

export const CardService = {

    create: async (card) => {
        try {
            const response = await axios.post(url, card, {
                withCredentials: true, 
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    edit: async (card, id) => {
        try {
            const response = await axios.put(url + "/edit/" + id, card, {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    showOne: async (id) => {
        try {
            const response = await axios.get(url + "/listOne/" + id, {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    showFirstOne: async () => {
        try {
            const response = await axios.get(url + "/listFirstOne", {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    showOneByName: async (name) => {
        try {
            const response = await axios.get(url + "/listOneByName/" + name, {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    showAll: async () => {
        try {
            const response = await axios.get(url, {
                withCredentials: true, 
            })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    page: async (page, size) => {
        try {
            const response = await axios.get(
                url + "/page?page=" + page + "&size=" + size, 
                {withCredentials: true, });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    qtyCards: async () => {
        try {
            const response = await axios.get(url + "/qtyCards", {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    remove: async (id) => {
        try {
            const response = await axios.delete(url + "/delete/" + id, {withCredentials: true, })
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
}