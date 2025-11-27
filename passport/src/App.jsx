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
import AdminPanel from "./pages/AdminPanel";

function RequireAuth() {
  const { token } = useAuthStore();
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  return <Outlet />;
}

function App({ telegramInitData = "" }) {
  const { token, setAuth, clearAuth, user } = useAuthStore();
  const [bootstrapped, setBootstrapped] = useState(false);

  useEffect(() => {
    const init = async () => {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login telegramInitData={telegramInitData} />} />
        <Route element={<RequireAuth />}>
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
          element={<Navigate to={token ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
