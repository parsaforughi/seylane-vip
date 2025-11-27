function Stamps({ user, dashboard }) {
  return (
    <div className="card">
      <h2>تمبرها و جوایز</h2>
      <p>
        شما تاکنون <strong>{user?.stamps ?? 0}</strong> تمبر جمع‌آوری کرده‌اید.
      </p>
      <p>
        با هر مأموریت موفق، تمبر و امتیاز بیشتری کسب می‌کنید و به جوایز ویژه
        نزدیک‌تر می‌شوید.
      </p>
      <div className="data-grid">
        <div>
          <p className="label">تمبر فعلی</p>
          <p className="value">{user?.stamps ?? 0}</p>
        </div>
        <div>
          <p className="label">پیشنهاد امروز</p>
          <p className="value">
            {dashboard?.activeMissionsCount ?? 0} مأموریت فعال
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stamps;
