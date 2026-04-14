import axios from "axios";

const API = axios.create({
  baseURL: "https://assignment3-backend-yqxx.onrender.com/api"
});

export default API;