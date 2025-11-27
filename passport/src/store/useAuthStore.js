import { create } from "zustand";

const tokenKey = "vip_passport_token";

const initialToken =
  typeof localStorage !== "undefined"
    ? localStorage.getItem(tokenKey)
    : null;

export const useAuthStore = create((set) => ({
  user: null,
  token: initialToken,
  loading: false,
  error: null,

  setUser: (user) => set({ user }),

  logout: () => {
    localStorage.removeItem(tokenKey);
    set({ user: null, token: null });
  },
}));
