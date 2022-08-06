import { API_URL } from "../../config";
import axios from "axios";
import AuthApi from "./auth-api";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
export const token = window.localStorage.getItem("messenger-token");

instance.interceptors.request.use((config) => {
  //@ts-ignore
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await AuthApi.refresh();
        localStorage.setItem("messenger-token", response.data.accessToken);
        return instance.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН");
      }
    }
    throw error;
  }
);

export default instance;
