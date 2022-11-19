import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://portfolio-backend-dt6x.onrender.com/",
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;