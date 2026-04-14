import axios from "axios";

const API = axios.create({
  baseURL: "https://assignment3-v73m.onrender.com/api"
});

export default API;