import axios from "axios";

const API = axios.create({
    baseURL:'http://192.168.1.7:8000',
    headers:{
        'Content-Type': 'application/json',
    },
    withCredentials:true,
});

export default API;