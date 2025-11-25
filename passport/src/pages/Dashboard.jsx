import { useEffect, useState, useMemo } from "react";
import { api } from "../api/client";

function formatDate(date) {
  if (!date) return "هنوز فعال نشده";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "هنوز فعال نشده";
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}

function clean(val) {
  if (val === undefined || val === null) return "—";
  if (typeof val === "string" && val.trim() === "") return "ثبت نشده";
  return val;
}

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/dashboard");
        setData(res.data);
      } catch (err) {
        console.error(err);
        setError("خطا در دریافت داشبورد");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const passportNumber = useMemo(() => {
    if (!data?.user?.id) return "---- ----";
    return String(data.user.id).padStart(6, "0");
  }, [data?.user?.id]);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p className="error">{error}</p>;

  const user = data?.user;

  return (
    <div className="dashboard">
      <div className="passport-cover">
        <div className="cover-emblem">SEYLANE</div>
        <div className="cover-text">
          <h1>پاسپورت وی‌آی‌پی سیلانه</h1>
          <p>شماره پاسپورت: {passportNumber}</p>
          <p>
            صادر شده برای:{" "}
            {user?.firstName || user?.lastName
              ? `${user?.firstName || ""} ${user?.lastName || ""}`.trim()
              : user?.username || "کاربر سیلانه"}
          </p>
          <p>وضعیت: {user?.vipSince ? "VIP" : "معمولی"}</p>
        </div>
      </div>

      <div className="passport-card">
        <div className="passport-meta two-col">
          <div className="passport-info-table">
            <div className="info-row">
              <p className="label">نام و نام خانوادگی</p>
              <p className="value">
                {clean(
                  `${user?.firstName || ""} ${user?.lastName || ""}`.trim() ||
                    ""
                )}
              </p>
            </div>
            <div className="info-row">
              <p className="label">کد مشتری</p>
              <p className="value">{clean(user?.customerCode)}</p>
            </div>
            <div className="info-row">
              <p className="label">تاریخ صدور پاسپورت</p>
              <p className="value">{formatDate(user?.createdAt)}</p>
            </div>
            <div className="info-row">
              <p className="label">تاریخ شروع VIP</p>
              <p className="value">{formatDate(user?.vipSince)}</p>
            </div>
          </div>
          <div className="passport-info-table">
            <div className="info-row">
              <p className="label">نام کاربری تلگرام</p>
              <p className="value">
                {user?.username ? `@${user.username}` : "ثبت نشده"}
              </p>
            </div>
            <div className="info-row">
              <p className="label">شهر</p>
              <p className="value">{clean(user?.city)}</p>
            </div>
            <div className="info-row">
              <p className="label">نام مدیر</p>
              <p className="value">{clean(user?.managerName)}</p>
            </div>
            <div className="info-row">
              <p className="label">نام فروشگاه</p>
              <p className="value">{clean(user?.storeName)}</p>
            </div>
          </div>
        </div>
        <div className="passport-qr">
          <div className="qr-box">QR</div>
          <p className="qr-text">مهر دیجیتال</p>
        </div>
      </div>

      <div className="card">
        <h3 className="section-title">وضعیت مأموریت‌ها</h3>
        <p className="value">
          مأموریت‌های فعال: {data?.activeMissionsCount ?? 0}
        </p>
        <p className="value">
          در انتظار تأیید: {data?.pendingMissionLogsCount ?? 0}
        </p>
        <p className="value">تمبرها: {data?.stampBalance ?? 0}</p>
        <p className="value">امتیاز: {user?.points ?? 0}</p>
      </div>
    </div>
  );
}
