import axios from "axios";

export const API_BASE =
  typeof window !== "undefined" && window.location.host.includes("onrender.com")
    ? "https://seylane-vip.onrender.com/api"
    : "http://localhost:10000/api";

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

export async function telegramLogin(initData) {
  const response = await api.post("/auth/telegram-login", { initData });
  return response.data;
}

export async function fetchMe() {
  const response = await api.get("/user/me");
  return response.data;
}

export async function fetchDashboard() {
  const response = await api.get("/dashboard");
  return response.data;
}

export async function fetchMissions() {
  const response = await api.get("/missions");
  return response.data;
}

export const uploadFile = async (formData) =>
  api
    .post("/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((r) => r.data);

export async function fetchQrImage(userId) {
  const response = await api.get(`/qr/${userId}`, { responseType: "blob" });
  return response.data;
}

export async function adminFetch(path) {
  const response = await api.get(`/admin/${path}`);
  return response.data;
}

export async function adminPost(path, data) {
  const response = await api.post(`/admin/${path}`, data);
  return response.data;
}

export { api };
