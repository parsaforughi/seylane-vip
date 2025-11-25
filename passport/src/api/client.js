import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const storedToken =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("seylane_token")
      : null;
  if (storedToken && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${storedToken}`;
  }
  return config;
});

export function setAuthToken(token) {
  if (!token) {
    delete api.defaults.headers.common["Authorization"];
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("seylane_token");
    }
    return;
  }
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("seylane_token", token);
  }
}
