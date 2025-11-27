import { BrowserRouter, Routes, Route, Navigate, Outlet, NavLink, useLocation } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Missions from "./pages/Missions";
import Stamps from "./pages/Stamps";
import Profile from "./pages/Profile";

const TABS = [
  { id: "dashboard", label: "داشبورد", path: "/dashboard" },
  { id: "missions", label: "مأموریت‌ها", path: "/missions" },
  { id: "stamps", label: "تمبرها", path: "/stamps" },
  { id: "profile", label: "پروفایل", path: "/profile" },
];

function RequireAuth() {
  const { token } = useAuthStore();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

function MainLayout() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="logo-circle">S</div>
        <div>
          <strong>پاسپورت ویژه سیلانه</strong>
          <p style={{ margin: 0, fontSize: 12, color: "rgba(248,248,255,0.7)" }}>
            Seylane VIP Passport
          </p>
        </div>
      </header>

      <Outlet />

      <nav className="tabs">
        {TABS.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => `tab-btn ${isActive ? "active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

function App() {
  const { token } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/stamps" element={<Stamps />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
