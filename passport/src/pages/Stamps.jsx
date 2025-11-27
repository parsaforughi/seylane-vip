import { useEffect, useState } from "react";
import { api } from "../api/client";
import { useAuthStore } from "../store/useAuthStore";

function Stamps() {
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
        setError("خطا در دریافت اطلاعات تمبرها.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [setUser]);

  if (loading) {
    return <p>در حال دریافت اطلاعات...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!user) {
    return <p>اطلاعات در دسترس نیست.</p>;
  }

  return (
    <div className="card">
      <h2>تمبرها و جوایز</h2>
      <p>
        شما تاکنون <strong>{user?.stamps ?? 0}</strong> تمبر جمع‌آوری کرده‌اید.
      </p>
      <p>
        با هر مأموریت موفق، تمبر و امتیاز بیشتری کسب می‌کنید و به جوایز ویژه
        نزدیک‌تر می‌شوید.
      </p>
      <div className="data-grid">
        <div>
          <p className="label">تمبر فعلی</p>
          <p className="value">{user?.stamps ?? 0}</p>
        </div>
        <div>
          <p className="label">پیشنهاد امروز</p>
          <p className="value">
            {dashboard?.activeMissionsCount ?? 0} مأموریت فعال
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stamps;
