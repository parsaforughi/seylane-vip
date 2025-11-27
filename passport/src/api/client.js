import axios from "axios";

export const API_BASE =
  import.meta.env?.DEV && typeof window !== "undefined"
    ? "http://localhost:10000/api"
    : "https://seylane-vip.onrender.com/api";

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

export async function completeProfileRequest(payload) {
  const response = await api.patch("/user/me", payload);
  return response.data;
}

export async function submitPurchaseRequest(payload) {
  const response = await api.post("/purchase", payload);
  return response.data;
}

export async function submitDisplayRequest(payload) {
  const response = await api.post("/display", payload);
  return response.data;
}

export async function submitReferralRequest(payload) {
  const response = await api.post("/referral", payload);
  return response.data;
}

export async function uploadFile(file) {
  const form = new FormData();
  form.append("file", file);
  const response = await api.post("/upload", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
}

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
