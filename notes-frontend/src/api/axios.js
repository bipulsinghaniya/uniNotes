import axios from "axios";

const api = axios.create({
  baseURL: "/",       // 🔥 SAME ORIGIN
  withCredentials: true,
});

export default api;
