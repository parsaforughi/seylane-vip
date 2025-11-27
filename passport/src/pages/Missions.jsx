import { useEffect, useState } from "react";
import { api } from "../api/client";

function Missions() {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const response = await api.get("/missions");
        setMissions(response.data || []);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("خطا در دریافت مأموریت‌ها.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return <p>در حال دریافت مأموریت‌ها...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!missions.length) {
    return <p>مأموریتی ثبت نشده است.</p>;
  }

  return (
    <div className="missions-list">
      {missions.map((mission) => (
        <div key={mission.id} className="mission">
          <h3>{mission.title || "بدون عنوان"}</h3>
          <p>{mission.description || "بدون توضیحات"}</p>
          <p className="label">
            وضعیت: {mission.isActive ? "فعال" : "غیرفعال"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Missions;
