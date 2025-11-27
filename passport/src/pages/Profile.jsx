import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { api, fetchQrImage } from "../api/client";
import { useAuthStore } from "../store/useAuthStore";

function Profile() {
  const { clearAuth, user: storedUser, setUser } = useAuthStore();
  const [user, setLocalUser] = useState(storedUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qrUrl, setQrUrl] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const response = await api.get("/user/me");
        setLocalUser(response.data);
        setUser(response.data);
        setError(null);
        const blob = await fetchQrImage(response.data.id);
        const url = URL.createObjectURL(blob);
        setQrUrl(url);
      } catch (err) {
        console.error(err);
        setError("خطا در دریافت اطلاعات کاربر.");
      } finally {
        setLoading(false);
      }
    };

    load();
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
    <div className="card">
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <img src={logo} alt="logo" className="brand-logo" />
        <div>
          <h2 style={{ margin: 0 }}>پروفایل</h2>
          <p className="muted">{user.storeName || "فروشگاه شما"}</p>
        </div>
      </div>
      <div className="data-grid" style={{ marginTop: 12 }}>
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
      {qrUrl && (
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <p className="label">QR ورود سریع</p>
          <img src={qrUrl} alt="QR" style={{ width: 160, height: 160, borderRadius: 12 }} />
        </div>
      )}
      <button
        className="logout-btn"
        onClick={() => {
          clearAuth();
          window.location.href = "/login";
        }}
      >
        خروج از حساب
      </button>
    </div>
  );
}

export default Profile;
