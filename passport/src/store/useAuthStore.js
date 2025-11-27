import { create } from "zustand";

const tokenKey = "vip_passport_token";

const initialToken =
  typeof localStorage !== "undefined"
    ? localStorage.getItem(tokenKey)
    : null;

export const useAuthStore = create((set) => ({
  user: null,
  token: initialToken,
  needsProfileCompletion: false,
  loading: false,
  error: null,

  setUser: (user) => set({ user, needsProfileCompletion: false }),
  setAuth: ({ user, token, needsProfileCompletion }) =>
    set({ user, token, needsProfileCompletion: !!needsProfileCompletion }),

  logout: () => {
    localStorage.removeItem(tokenKey);
    set({ user: null, token: null, needsProfileCompletion: false });
  },
}));
