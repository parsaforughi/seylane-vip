import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { fetchMe } from "./api/client";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Missions from "./pages/Missions";
import Stamps from "./pages/Stamps";
import Profile from "./pages/Profile";
import Purchase from "./pages/Purchase";
import Display from "./pages/Display";
import Referral from "./pages/Referral";
import CompleteProfile from "./pages/CompleteProfile";
import AdminPanel from "./pages/AdminPanel";

function RequireAuth() {
  const { token } = useAuthStore();
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  return <Outlet />;
}

function App() {
  const { token, setAuth, clearAuth, user } = useAuthStore();
  const [bootstrapped, setBootstrapped] = useState(false);

  useEffect(() => {
    const maybeTelegramLogin = async () => {
      if (token) return;
      const initData = window.Telegram?.WebApp?.initData;
      if (!initData) return;
      try {
        const { telegramLoginRequest } = await import("./api/client");
        const { token: t, user: u } = await telegramLoginRequest(initData);
        localStorage.setItem("vip_passport_token", t);
        setAuth(t, u);
      } catch (err) {
        console.error("Telegram auto login failed", err);
      }
    };

    const init = async () => {
      await maybeTelegramLogin();
      if (!token) {
        setBootstrapped(true);
        return;
      }
      try {
        const me = await fetchMe();
        setAuth(token, me);
      } catch {
        clearAuth();
      } finally {
        setBootstrapped(true);
      }
    };
    init();
  }, [token, setAuth, clearAuth]);

  if (!bootstrapped) {
    return <div className="app-shell"><p>در حال بارگذاری...</p></div>;
  }

  const needsProfileCompletion =
    token &&
    user &&
    (!user.storeName || !user.managerName || !user.phone || !user.city);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/stamps" element={<Stamps />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/display" element={<Display />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Navigate
              to={
                token
                  ? needsProfileCompletion
                    ? "/complete-profile"
                    : "/dashboard"
                  : "/login"
              }
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
