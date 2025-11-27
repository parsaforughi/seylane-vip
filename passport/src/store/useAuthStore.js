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

console.log("Auth hydrated", initialToken, initialUser);

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
}));
