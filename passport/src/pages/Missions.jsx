import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/client";
import GlassCard from "../components/GlassCard";
import NeonButton from "../components/NeonButton";
import PageContainer from "../components/PageContainer";
import { useAuthStore } from "../store/useAuthStore";
import { loadUserAndDashboard } from "../api/loaders";

function Missions() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        await loadUserAndDashboard(setUser);
        const response = await api.get("/missions");
        if (!mounted) return;
        setMissions(response.data || []);
        setError(null);
      } catch (err) {
        console.error(err);
        if (mounted) setError("خطا در دریافت مأموریت‌ها.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, [setUser]);

  if (loading) {
    return <p>در حال دریافت مأموریت‌ها...</p>;
  }

  const safeMissions = missions || [];

  const actionButton = (type) => {
    if (type === "PURCHASE") return () => navigate("/purchase");
    if (type === "DISPLAY") return () => navigate("/display");
    if (type === "REFERRAL") return () => navigate("/referral");
    return null;
  };

  return (
    <PageContainer>
      <div className="missions-list">
        {safeMissions.map((mission, idx) => {
          const go = actionButton(mission.type);
          return (
            <GlassCard key={mission.id} className="mission-card animated-section" style={{ animationDelay: `${idx * 60}ms` }}>
              <div className="mission-icon">{mission.type?.[0] || "M"}</div>
              <div>
                <h3 style={{ margin: "0 0 6px" }}>{mission.title || "بدون عنوان"}</h3>
                <p className="muted" style={{ margin: 0 }}>{mission.description || "بدون توضیحات"}</p>
                <p className="label" style={{ marginTop: 8 }}>
                  وضعیت: {mission.userStatus || (mission.isActive ? "ACTIVE" : "INACTIVE")}
                </p>
                {go && (
                  <NeonButton style={{ marginTop: 8, width: "auto", paddingInline: 16 }} onClick={go}>
                    اقدام
                  </NeonButton>
                )}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </PageContainer>
  );
}

export default Missions;
