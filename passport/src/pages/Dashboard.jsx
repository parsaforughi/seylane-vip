import { useEffect, useState } from "react";
import { api } from "../api/client";
import { useAuthStore } from "../store/useAuthStore";

function Dashboard() {
  const { setUser } = useAuthStore();
  const [user, setLocalUser] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [userRes, dashRes] = await Promise.all([
          api.get("/user"),
          api.get("/dashboard"),
        ]);
        setLocalUser(userRes.data);
        setUser(userRes.data);
        setDashboard(dashRes.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("خطا در دریافت اطلاعات از سرور.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [setUser]);

  if (loading) {
    return <p>در حال بارگذاری داشبورد...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!user || !dashboard) {
    return <p>اطلاعات در دسترس نیست.</p>;
  }

  return (
    <div className="card">
      <h2>سلام {user.firstName || "همراه"} عزیز</h2>
      <p>به پاسپورت ویژه سیلانه خوش آمدی.</p>
      <div className="data-grid">
        <div>
          <p className="label">امتیاز</p>
          <p className="value">{user.points ?? 0}</p>
        </div>
        <div>
          <p className="label">تمبرها</p>
          <p className="value">{user.stamps ?? 0}</p>
        </div>
        <div>
          <p className="label">مأموریت‌های فعال</p>
          <p className="value">{dashboard.activeMissionsCount ?? 0}</p>
        </div>
        <div>
          <p className="label">در انتظار تأیید</p>
          <p className="value">{dashboard.pendingMissionLogsCount ?? 0}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
