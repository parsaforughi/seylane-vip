import { create } from "zustand";
import { api, setAuthToken } from "../api/client";

const initialToken =
  typeof localStorage !== "undefined"
    ? localStorage.getItem("seylane_token")
    : null;

if (initialToken) {
  setAuthToken(initialToken);
}

export const useAuthStore = create((set) => ({
  user: null,
  token: initialToken,
  loading: false,
  error: null,

  setAuth: ({ user, token }) => {
    setAuthToken(token);
    set({ user, token, error: null, loading: false });
  },

  setUser: (user) => set({ user }),

  logout: () => {
    setAuthToken(null);
    set({ user: null, token: null, error: null });
  },

  async loginWithTelegram(payload) {
    set({ loading: true, error: null });
    try {
      const res = await api.post("/auth/telegram-login", payload);
      setAuthToken(res.data.token);
      set({
        user: res.data.user,
        token: res.data.token,
        loading: false,
        error: null,
      });
    } catch (err) {
      console.error(err);
      set({
        loading: false,
        error: "ورود با تلگرام با خطا مواجه شد.",
      });
    }
  },
}));
