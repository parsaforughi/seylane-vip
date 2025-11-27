import { api } from "./client";

export async function loadUserAndDashboard(setUser) {
  const user = await api.get("/user/me").then((r) => r.data);
  const dashboard = await api.get("/dashboard").then((r) => r.data);
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
  if (setUser) setUser(user);
  return { user, dashboard };
}
