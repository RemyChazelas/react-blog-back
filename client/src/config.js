import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://blog-app-rc.herokuapp.com/api/",
});