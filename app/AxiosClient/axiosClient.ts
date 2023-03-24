import axios from "axios";

const axiosClient = axios.create({
  method: "POST",
  baseURL: `http://192.168.1.102:8080/api/v1/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
