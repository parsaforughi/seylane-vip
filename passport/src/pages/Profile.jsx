import { useAuthStore } from "../store/useAuthStore";

function Profile({ user }) {
  const { logout } = useAuthStore();

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
