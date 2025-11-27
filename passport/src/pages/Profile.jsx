import { useEffect, useState } from "react";
import { api, fetchQrImage } from "../api/client";
import { useAuthStore } from "../store/useAuthStore";
import GlassCard from "../components/GlassCard";
import PageContainer from "../components/PageContainer";
import NeonButton from "../components/NeonButton";
import { loadUserAndDashboard } from "../api/loaders";

const logo = "/seylane_logo.png";

function Profile() {
  const { clearAuth, user: storedUser, setUser } = useAuthStore();
  const [user, setLocalUser] = useState(storedUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qrUrl, setQrUrl] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const { user: u } = await loadUserAndDashboard(setUser);
        if (!mounted) return;
        setLocalUser(u);
        setError(null);
        const blob = await fetchQrImage(u.id);
        const url = URL.createObjectURL(blob);
        setQrUrl(url);
      } catch (err) {
        console.error(err);
        if (mounted) setError("خطا در دریافت اطلاعات کاربر.");
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
    return <p>در حال دریافت پروفایل...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!user) {
    return <p>اطلاعات کاربر یافت نشد.</p>;
  }

  return (
    <PageContainer>
      <GlassCard className="animated-section" style={{ textAlign: "center" }}>
        <img src={logo} alt="logo" className="brand-logo" style={{ margin: "0 auto 8px" }} />
        <h2 style={{ margin: 0 }}>پروفایل</h2>
        <p className="muted">{user.storeName || "فروشگاه شما"}</p>
        {qrUrl && (
          <div style={{ marginTop: 12, textAlign: "center" }}>
            <img src={qrUrl} alt="QR" style={{ width: 180, height: 180, borderRadius: 16 }} />
            <p className="label" style={{ marginTop: 8 }}>
              QR ورود سریع
            </p>
          </div>
        )}
        <div className="data-grid" style={{ marginTop: 14 }}>
          <div>
            <p className="label">نام مدیر</p>
            <p className="value">{user.managerName || user.firstName || "نامشخص"}</p>
          </div>
          <div>
            <p className="label">تلفن</p>
            <p className="value">{user.phone || "نامشخص"}</p>
          </div>
          <div>
            <p className="label">شهر</p>
            <p className="value">{user.city || "نامشخص"}</p>
          </div>
          <div>
            <p className="label">نام کاربری تلگرام</p>
            <p className="value">{user.username ? `@${user.username}` : "ندارد"}</p>
          </div>
          <div>
            <p className="label">وضعیت VIP</p>
            <p className="value">{user.vipSince ? "فعال" : "غیرفعال"}</p>
          </div>
        </div>
        <NeonButton
          style={{ marginTop: 14 }}
          onClick={() => {
            clearAuth();
            window.location.href = "/login";
          }}
        >
          خروج از حساب
        </NeonButton>
      </GlassCard>
    </PageContainer>
  );
}

export default Profile;
