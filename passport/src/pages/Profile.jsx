import { useEffect, useState } from "react";
import { fetchQrImage } from "../api/client";
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
  const [qrUrl, setQrUrl] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const { user: u } = await loadUserAndDashboard(setUser);
        if (!mounted) return;
        setLocalUser(u);
        try {
          const blob = await fetchQrImage(u.id);
          const url = URL.createObjectURL(blob);
          setQrUrl(url);
        } catch {
          setQrUrl(
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACUV4D/AAAAA3NCSVQICAjb4U/gAAAB9UlEQVR4nO3bQQ7CMAwF0PNf7d6uKHW3KwomGN9sX7lcymh8/aIBiNjKq9+O+7rr7p7nPz+rV69evXr16tWr169evXr16tWr169evXoGG3mBoM8sQWk3JgvMMJzN6CEqAbdsTbYgYx42gjmwObaL8W4NuvQ1CzBiO4/YzdfIHsEYmwHa3DtKkZ1AD0y4JMRTxGT7wWOYwUSYuyEYbY3YGjjhhhhltyEmGGGmmZYQQQaZlhBBppkWEEGmmRYQQaZZThDtplkOE22GSQ4TbwJJDhNtAkkOE20CSV5QOAVg9vBeI42hHR5YAOEuNbhghhhltyEmGGGmmZYQQQaZlhBBpplOEO2WZDhNthsYwKbPCdMF1Eau0BrVt6+Gb8ejYzYxYnxIrDmD6wTJGeY8AdZkV5k7ZlHgTN6DsxNmIYwyR3fC+Mw2/EiYM0pGLzCjDR3wDzWiw4nKeq81B2Jo7S7+3oCjV34ZfLVL169evXr16tWr169evXr16tWr169e/Y/5AR2y4ZeWSRTAwAAAABJRU5ErkJggg=="
          );
        }
      } catch (err) {
        console.error(err);
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

  const safeUser =
    user || {
      storeName: "فروشگاه نمونه",
      managerName: "مدیر نمونه",
      city: "تهران",
      points: 0,
      stamps: 0,
      username: "",
      vipSince: null,
      phone: "",
    };

  return (
    <PageContainer>
      <GlassCard className="animated-section" style={{ textAlign: "center" }}>
        <img src={logo} alt="logo" className="brand-logo" style={{ margin: "0 auto 8px" }} />
        <h2 style={{ margin: 0 }}>پروفایل</h2>
        <p className="muted">{safeUser.storeName || "فروشگاه شما"}</p>
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
            <p className="value">{safeUser.managerName || safeUser.firstName || "نامشخص"}</p>
          </div>
          <div>
            <p className="label">تلفن</p>
            <p className="value">{safeUser.phone || "نامشخص"}</p>
          </div>
          <div>
            <p className="label">شهر</p>
            <p className="value">{safeUser.city || "نامشخص"}</p>
          </div>
          <div>
            <p className="label">نام کاربری تلگرام</p>
            <p className="value">{safeUser.username ? `@${safeUser.username}` : "ندارد"}</p>
          </div>
          <div>
            <p className="label">وضعیت VIP</p>
            <p className="value">{safeUser.vipSince ? "فعال" : "غیرفعال"}</p>
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
