import React from 'react'
import axios from 'axios'
const url = "http://localhost:8082/fruit"

export const FruitService = {
    
    
    create: (fruit) => {
        return axios.post(url + "/create", fruit).then(response => {
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

    edit: (fruit, id) => {
        return axios.put(url + "/edit/" + id, fruit).then(response => {
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

    showAll: () => {
        return axios.get(url + "/listAll").then(response => {
            return response;
        }).catch(error => {
            console.error(error);
        });
    }
}