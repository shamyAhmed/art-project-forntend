import axios, {AxiosInstance} from 'axios';


const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

console.log(BASE_URL)

const api: AxiosInstance = axios.create({
    baseURL: BASE_URL
})


export default api;