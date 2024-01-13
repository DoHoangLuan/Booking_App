import axios from "axios";
import { ACCESS_TOKEN } from "../utils/constants";

const BASE_URL = "http://localhost:3001/api/v1";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

axiosClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    config.headers[ACCESS_TOKEN] = accessToken;
  }
  return config;
});

axios.interceptors.response.use((config) => {
  try {
    return config.data;
  } catch (error) {
    throw Promise.reject(error);
  }
});

export { axiosClient };
