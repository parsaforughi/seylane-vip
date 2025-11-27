import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import GlassCard from "../components/GlassCard";
import NeonButton from "../components/NeonButton";
import PageContainer from "../components/PageContainer";
import ProgressCircle from "../components/ProgressCircle";
import { loadUserAndDashboard } from "../api/loaders";

function Dashboard() {
  const { setUser } = useAuthStore();
  const [user, setLocalUser] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
        if (mounted) setError("خطا در دریافت اطلاعات از سرور.");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

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
    <PageContainer>
      <GlassCard className="animated-section vip-card">
        <h1 className="vip-title">سلام {user.storeName || user.firstName || "همراه"} عزیز</h1>
        <p className="vip-subtitle">پاسپورت VIP سیلانه سبز</p>
        <div className="identity-row">
          <span>{user.city || "شهر نامشخص"}</span>
          <span>•</span>
          <span>{user.managerName || "مدیر نامشخص"}</span>
        </div>
      </GlassCard>

      <GlassCard className="animated-section vip-card">
        <div className="vip-stats">
          <div className="vip-stat">
            <p className="label">امتیاز</p>
            <p className="value">{dashboard.points ?? user.points ?? 0}</p>
          </div>
          <div className="vip-stat">
            <p className="label">مهرها</p>
            <p className="value">{dashboard.stamps ?? user.stamps ?? 0}</p>
          </div>
          <div className="vip-stat">
            <p className="label">فعال / در انتظار</p>
            <p className="value">
              {dashboard.activeMissionsCount ?? 0}/{dashboard.pendingApprovalsCount ?? 0}
            </p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="animated-section vip-card">
        <div className="vip-progress">
          <ProgressCircle
            value={(dashboard.stamps ?? user.stamps ?? 0) % 10}
            max={10}
            label="تا جایزه بعدی"
          />
          <div className="vip-actions-grid">
            <NeonButton onClick={() => navigate("/purchase")}>ثبت خرید</NeonButton>
            <NeonButton onClick={() => navigate("/display")}>ثبت چیدمان</NeonButton>
            <NeonButton onClick={() => navigate("/referral")}>معرفی VIP جدید</NeonButton>
          </div>
        </div>
      </GlassCard>
    </PageContainer>
  );
}

export default Dashboard;
