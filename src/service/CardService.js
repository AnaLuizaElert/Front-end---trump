import axios from 'axios'
const url = "http://localhost:8082/card"

export const CardService = {

    create: async (card) => {
        try {
            const response = await axios.post(url + "/create", card);
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

    edit: async (card, id) => {
        try {
            const response = await axios.put(url + "/edit/" + id, card)
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
    },

    page: async (page, size) => {
        try {
            const response = await axios.get(url + "/page?page=" + page + "&size=" + size);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    qtyCards: async () => {
        try {
            const response = await axios.get(url + "/qtyCards")
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}