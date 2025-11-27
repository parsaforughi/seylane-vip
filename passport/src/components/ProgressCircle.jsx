function ProgressCircle({ value = 0, max = 10, label }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div
      className="progress-circle"
      style={{ "--pct": `${pct}%` }}
    >
      <div className="progress-circle__ring" />
      <div className="progress-circle__inner">
        <div style={{ textAlign: "center" }}>
          <div className="value">{value}</div>
          <div className="label">{label || `از ${max}`}</div>
        </div>
      </div>
    </div>
  );
}

export default ProgressCircle;
