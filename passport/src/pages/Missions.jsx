import { useEffect, useState } from "react";
import { api } from "../api/client";

export default function Missions() {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/missions");
        setMissions(res.data || []);
      } catch (err) {
        console.error(err);
        setError("خطا در دریافت مأموریت‌ها");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="missions-list">
      {missions.map((m) => (
        <div key={m.id} className="card mission-card">
          <div className="mission-header">
            <h2>{m.title || "مأموریت بدون عنوان"}</h2>
            <span className="badge">
              جایزه: {m.rewardPoints ?? 0} امتیاز / {m.rewardStamps ?? 0} تمبر
            </span>
          </div>
          {m.description && <p className="mission-desc">{m.description}</p>}
          <p className="mission-meta">
            وضعیت: {m.isActive ? "فعال" : "غیرفعال"}
          </p>
        </div>
      ))}
    </div>
  );
}
