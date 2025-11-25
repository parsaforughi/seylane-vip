import { useEffect, useState, useRef } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { useTelegram } from "./hooks/useTelegram";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Missions from "./pages/Missions";
import Profile from "./pages/Profile";
import { api } from "./api/client";

function App() {
  const { isInTelegram, user: tgUser, tg } = useTelegram();
  const { user, token, setUser, loginWithTelegram } = useAuthStore();
  const [tab, setTab] = useState("dashboard");
  const mounted = useRef(false);

  useEffect(() => {
    if (tg) {
      tg.expand();
      tg.ready();
    }
    if (isInTelegram && tgUser && !token) {
      loginWithTelegram({
        id: tgUser.id,
        first_name: tgUser.first_name,
        last_name: tgUser.last_name,
        username: tgUser.username,
        hash: tgUser.hash,
      });
    }
  }, [isInTelegram, tgUser, tg, token, loginWithTelegram]);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token || mounted.current) return;
      try {
        const res = await api.get("/user");
        setUser(res.data);
        mounted.current = true;
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [token, setUser]);

  if (!token) {
    return <Login />;
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-left">پاسپورت VIP سیلانه</div>
        <div className="topbar-tabs">
          <button
            className={tab === "dashboard" ? "tab active" : "tab"}
            onClick={() => setTab("dashboard")}
          >
            داشبورد
          </button>
          <button
            className={tab === "missions" ? "tab active" : "tab"}
            onClick={() => setTab("missions")}
          >
            مأموریت‌ها
          </button>
          <button
            className={tab === "profile" ? "tab active" : "tab"}
            onClick={() => setTab("profile")}
          >
            پروفایل
          </button>
        </div>
      </header>

      <main className="app-main">
        {tab === "dashboard" && <Dashboard />}
        {tab === "missions" && <Missions />}
        {tab === "profile" && <Profile />}
      </main>
    </div>
  );
}

export default App;
