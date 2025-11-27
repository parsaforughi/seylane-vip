function Dashboard({ user, dashboard, loading }) {
  if (loading) {
    return <p>در حال بارگذاری داشبورد...</p>;
  }

  if (!user || !dashboard) {
    return <p>اطلاعات در دسترس نیست.</p>;
  }

  return (
    <div className="card">
      <h2>سلام {user.firstName || "همراه"} عزیز</h2>
      <p>به پاسپورت ویژه سیلانه خوش آمدی.</p>
      <div className="data-grid">
        <div>
          <p className="label">امتیاز</p>
          <p className="value">{user.points ?? 0}</p>
        </div>
        <div>
          <p className="label">تمبرها</p>
          <p className="value">{user.stamps ?? 0}</p>
        </div>
        <div>
          <p className="label">مأموریت‌های فعال</p>
          <p className="value">{dashboard.activeMissionsCount ?? 0}</p>
        </div>
        <div>
          <p className="label">در انتظار تأیید</p>
          <p className="value">{dashboard.pendingMissionLogsCount ?? 0}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
