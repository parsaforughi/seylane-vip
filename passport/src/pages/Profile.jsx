import { useEffect, useState } from "react";
import { api } from "../api/client";
import { useAuthStore } from "../store/useAuthStore";

function Profile() {
  const { logout, user: storedUser, setUser } = useAuthStore();
  const [user, setLocalUser] = useState(storedUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const response = await api.get("/user");
        setLocalUser(response.data);
        setUser(response.data);
        setError(null);
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
      <h2>پروفایل</h2>
      <div className="data-grid">
        <div>
          <p className="label">نام</p>
          <p className="value">{user.firstName || "نامشخص"}</p>
        </div>
        <div>
          <p className="label">نام خانوادگی</p>
          <p className="value">{user.lastName || "نامشخص"}</p>
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
      <button className="logout-btn" onClick={logout}>
        خروج از حساب
      </button>
    </div>
  );
}

export default Profile;
