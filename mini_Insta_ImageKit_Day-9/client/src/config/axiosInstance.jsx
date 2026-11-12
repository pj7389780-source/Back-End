import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mini-post-backend.onrender.com",
});
