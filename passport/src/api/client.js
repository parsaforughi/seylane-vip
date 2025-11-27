import axios from "axios";

export const API_BASE = "https://seylane-vip.onrender.com";

const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("vip_passport_token")
      : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function devLoginRequest() {
  const response = await api.post("/auth/telegram", {
    telegramId: 999999999,
    firstName: "VIP",
    lastName: "Demo",
    username: "vip_demo",
  });
  return response.data;
}

export async function demoLoginRequest() {
  const response = await api.post("/auth/demo-login");
  return response.data;
}

export async function telegramLoginRequest(userPayload) {
  const response = await api.post("/auth/telegram", userPayload);
  return response.data;
}

export { api };
