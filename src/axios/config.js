import axios from "axios";

const axiosinstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
});

export { axiosinstance };