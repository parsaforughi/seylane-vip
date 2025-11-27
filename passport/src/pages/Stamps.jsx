import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import ProgressCircle from "../components/ProgressCircle";
import GlassCard from "../components/GlassCard";
import PageContainer from "../components/PageContainer";
import { loadUserAndDashboard } from "../api/loaders";

function Stamps() {
  const { setUser } = useAuthStore();
  const [user, setLocalUser] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const { user: u, dashboard: d } = await loadUserAndDashboard(setUser);
        if (!mounted) return;
        setLocalUser(u);
        setDashboard(d);
        setError(null);
      } catch (err) {
        console.error(err);
        if (mounted) setError("خطا در دریافت اطلاعات تمبرها.");
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
    return <p>در حال دریافت اطلاعات...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!user) {
    return <p>اطلاعات در دسترس نیست.</p>;
  }

  const stamps = user?.stamps ?? dashboard?.stamps ?? 0;
  const nextRewardAt = 10;

  return (
    <PageContainer>
      <GlassCard className="animated-section" style={{ textAlign: "center" }}>
        <h2 style={{ marginTop: 0 }}>تمبرها و جوایز</h2>
        <p className="muted">
          شما تاکنون <strong>{stamps}</strong> تمبر جمع‌آوری کرده‌اید.
        </p>
        <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "center" }}>
          <ProgressCircle value={stamps % nextRewardAt} max={nextRewardAt} label="تا جایزه بعدی" />
          <div style={{ textAlign: "right" }}>
            <div className="label">تمبر فعلی</div>
            <div className="value">{stamps}</div>
            <div className="label">ماموریت‌های فعال</div>
            <div className="value">{dashboard?.activeMissionsCount ?? 0}</div>
          </div>
        </div>
      </GlassCard>
    </PageContainer>
  );
}

export default Stamps;
