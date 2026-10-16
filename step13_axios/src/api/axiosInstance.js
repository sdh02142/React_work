import axios from "axios";

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_SERVER_API,
    timeout : 5000, // access denied after 5 second 
});

export default axiosInstance