function Missions({ missions, loading }) {
  if (loading) {
    return <p>در حال دریافت مأموریت‌ها...</p>;
  }

  if (!missions.length) {
    return <p>مأموریتی ثبت نشده است.</p>;
  }

  return (
    <div className="missions-list">
      {missions.map((mission) => (
        <div key={mission.id} className="mission">
          <h3>{mission.title || "بدون عنوان"}</h3>
          <p>{mission.description || "بدون توضیحات"}</p>
          <p className="label">
            وضعیت: {mission.isActive ? "فعال" : "غیرفعال"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Missions;
