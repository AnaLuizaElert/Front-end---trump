import React from 'react'
import axios from 'axios'
const url = "http://localhost:8082/computer"

export const ComputerService = {
    
    
    create: (computer) => {
        return axios.post(url + "/create", computer).then(response => {
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

    edit: (computer, id) => {
        return axios.put(url + "/edit/" + id, computer).then(response => {
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