import { useEffect, useState } from "react";
import { api } from "../api/client";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/user");
        setUser(res.data);
      } catch (err) {
        console.error(err);
        setError("خطا در دریافت پروفایل");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="card">
      <h3 className="section-title">پروفایل</h3>
      <p className="value">نام: {user?.firstName || "—"}</p>
      <p className="value">نام خانوادگی: {user?.lastName || "—"}</p>
      <p className="value">
        نام کاربری: {user?.username ? `@${user.username}` : "—"}
      </p>
      <p className="value">شهر: {user?.city || "—"}</p>
      <p className="value">فروشگاه: {user?.storeName || "—"}</p>
      <p className="value">مدیر: {user?.managerName || "—"}</p>
      <p className="value">امتیاز: {user?.points ?? 0}</p>
      <p className="value">تمبر: {user?.stamps ?? 0}</p>
    </div>
  );
}
