import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/client";

function Missions() {
  const navigate = useNavigate();
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

  const actionButton = (type) => {
    if (type === "PURCHASE") return () => navigate("/purchase");
    if (type === "DISPLAY") return () => navigate("/display");
    if (type === "REFERRAL") return () => navigate("/referral");
    return null;
  };

  return (
    <div className="missions-list">
      {missions.map((mission) => {
        const go = actionButton(mission.type);
        return (
          <div key={mission.id} className="mission">
            <h3>{mission.title || "بدون عنوان"}</h3>
            <p className="muted">{mission.description || "بدون توضیحات"}</p>
            <p className="label">نوع: {mission.type || "CUSTOM"}</p>
            <p className="label">
              وضعیت: {mission.userStatus || (mission.isActive ? "ACTIVE" : "INACTIVE")}
            </p>
            {go && (
              <button className="primary-btn" onClick={go}>
                اقدام
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Missions;
