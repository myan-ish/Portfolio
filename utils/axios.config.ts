import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "your base url",
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;