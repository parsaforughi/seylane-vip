import { create } from "zustand";

const tokenKey = "vip_passport_token";
const authKey = "auth";
const userKey = "user";

const initialToken =
  typeof localStorage !== "undefined" ? localStorage.getItem(tokenKey) || localStorage.getItem(authKey) : null;

const initialUser =
  typeof localStorage !== "undefined" && localStorage.getItem(userKey)
    ? JSON.parse(localStorage.getItem(userKey))
    : null;

export const useAuthStore = create((set) => ({
  user: initialUser,
  token: initialToken,
  loading: false,
  error: null,

  setUser: (user) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(userKey, JSON.stringify(user));
    }
    set({ user });
  },

  setAuth: (token, user) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(tokenKey, token);
      localStorage.setItem(authKey, token);
      if (user) {
        localStorage.setItem(userKey, JSON.stringify(user));
      }
    }
    set({ token, user: user ?? null });
  },

  clearAuth: () => {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(tokenKey);
      localStorage.removeItem(authKey);
      localStorage.removeItem(userKey);
    }
    set({ user: null, token: null });
  },

  setDemoAuth: () => {
    const demoUser = {
      id: 777,
      storeName: "داروخانه مرکزی",
      managerName: "خانم رضایی",
      city: "تهران",
      points: 1200,
      stamps: 4,
    };
    const demoToken = "demo-token";
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(tokenKey, demoToken);
      localStorage.setItem(authKey, demoToken);
      localStorage.setItem(userKey, JSON.stringify(demoUser));
    }
    set({ token: demoToken, user: demoUser });
  },
}));
