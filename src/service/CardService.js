import React from 'react'
import axios from 'axios'
const url = "http://localhost:8082/card"

export const CardService = {
    
    create: (card) => {
        return axios.post(url + "/create", card).then(response => {
            return response;
        }).catch(error => {
            console.error(error);
        });
    },

    remove: (id) => {
        axios.delete(url + "/delete/" + id).then(response => {
            return response;
        }).catch(error => {
            console.error(error);
            return error;
        });
    },

    edit: (card, id) => {
        return axios.put(url + "/edit/" + id, card).then(response => {
            return response;
        }).catch(error => {
            console.error(error);
        });
    },

    showOne: (id) => {
        return axios.get(url + "/listOne/" + id).then(response => {
            return response;
        }).catch(error => {
            console.error(error);
        });
    },

    showOneByName: (name) => {
        return axios.get(url + "/listOneByName/" + name).then(response => {
            return response;
        }).catch(error => {
            console.error(error);
        });
    },
    
    showAll: () => {
        return axios.get(url + "/listAll").then(response => {
            return response;
        }).catch(error => {
            console.error(error);
        });
    }
}