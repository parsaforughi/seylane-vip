import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/client";
import { useAuthStore } from "../store/useAuthStore";
import GlassCard from "../components/GlassCard";
import NeonButton from "../components/NeonButton";
import PageContainer from "../components/PageContainer";
import ProgressCircle from "../components/ProgressCircle";

function Dashboard() {
  const { setUser } = useAuthStore();
  const [user, setLocalUser] = useState(null);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [userRes, dashRes] = await Promise.all([
          api.get("/user/me"),
          api.get("/dashboard"),
        ]);
        setLocalUser(userRes.data);
        setUser(userRes.data);
        setDashboard(dashRes.data);
        setError(null);
        if (
          !userRes.data?.storeName ||
          !userRes.data?.managerName ||
          !userRes.data?.city ||
          !userRes.data?.phone
        ) {
          navigate("/complete-profile", { replace: true });
        }
      } catch (err) {
        console.error(err);
        setError("خطا در دریافت اطلاعات از سرور.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [setUser, navigate]);

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
      <GlassCard className="animated-section">
        <h1 style={{ margin: "0 0 8px", fontWeight: 600, fontSize: 26 }}>
          سلام {user.storeName || user.firstName || "همراه"} عزیز
        </h1>
        <p className="muted" style={{ marginBottom: 16 }}>
          به پاسپورت ویژه سیلانه خوش آمدی.
        </p>
        <div className="quick-actions" style={{ marginBottom: 8 }}>
          <NeonButton onClick={() => navigate("/display")}>ثبت چیدمان</NeonButton>
          <NeonButton onClick={() => navigate("/purchase")}>ثبت خرید</NeonButton>
          <NeonButton onClick={() => navigate("/referral")}>معرفی مشتری VIP</NeonButton>
        </div>
      </GlassCard>

      <GlassCard className="animated-section">
        <div className="data-grid" style={{ alignItems: "center" }}>
          <div>
            <p className="label">امتیاز</p>
            <p className="value">{dashboard.points ?? user.points ?? 0}</p>
          </div>
          <div>
            <p className="label">تمبرها</p>
            <p className="value">{dashboard.stamps ?? user.stamps ?? 0}</p>
          </div>
          <div>
            <p className="label">در انتظار تایید</p>
            <p className="value">{dashboard.pendingApprovalsCount ?? 0}</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="animated-section" style={{ display: "grid", placeItems: "center" }}>
        <ProgressCircle
          value={(dashboard.stamps ?? user.stamps ?? 0) % 10}
          max={10}
          label="تا جایزه بعدی"
        />
      </GlassCard>
    </PageContainer>
  );
}

export default Dashboard;
