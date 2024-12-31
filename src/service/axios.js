import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8888/api/',
  timeout: 1000000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
