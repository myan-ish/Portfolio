import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://autumn000.pythonanywhere.com/",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
