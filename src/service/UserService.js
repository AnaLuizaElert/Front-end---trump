import axios from 'axios'
const url = "http://localhost:8082/user"

export const UserService = {   
    create: (user) => {
        return axios.post(url + "/create", user).then(response => {
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
        });
    },

    edit: (user, id) => {
        return axios.put(url + "/edit/" + id, user).then(response => {
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