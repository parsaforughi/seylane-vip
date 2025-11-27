import { useEffect, useState } from "react";
import { useAuthStore } from "./store/useAuthStore";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Missions from "./pages/Missions";
import Stamps from "./pages/Stamps";
import Profile from "./pages/Profile";
import { api } from "./api/client";

const TABS = [
  { id: "dashboard", label: "داشبورد" },
  { id: "missions", label: "مأموریت‌ها" },
  { id: "stamps", label: "تمبرها" },
  { id: "profile", label: "پروفایل" },
];

function App() {
  const { token, user, setUser } = useAuthStore();
  const [tab, setTab] = useState("dashboard");
  const [dashboard, setDashboard] = useState(null);
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    const load = async () => {
      try {
        const [userRes, dashRes, missionsRes] = await Promise.all([
          api.get("/user"),
          api.get("/dashboard"),
          api.get("/missions"),
        ]);
        setUser(userRes.data);
        setDashboard(dashRes.data);
        setMissions(missionsRes.data || []);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("خطا در دریافت اطلاعات از سرور.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [token, setUser]);

  if (!token) {
    return <Login />;
  }

  const renderTab = () => {
    switch (tab) {
      case "dashboard":
        return <Dashboard user={user} dashboard={dashboard} loading={loading} />;
      case "missions":
        return <Missions missions={missions} loading={loading} />;
      case "stamps":
        return <Stamps user={user} dashboard={dashboard} />;
      case "profile":
        return <Profile user={user} />;
      default:
        return null;
    }
  };

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

      {error && <p className="error">{error}</p>}

      {renderTab()}

      <nav className="tabs">
        {TABS.map((item) => (
          <button
            key={item.id}
            className={`tab-btn ${tab === item.id ? "active" : ""}`}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
