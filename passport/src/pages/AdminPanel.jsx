import { useEffect, useState } from "react";
import { adminFetch, adminLogin, adminPost } from "../api/client";

const tabs = [
  { id: "users", label: "کاربران", path: "users" },
  { id: "missions", label: "ماموریت‌ها", path: "missions" },
  { id: "purchases", label: "خریدها", path: "purchases" },
  { id: "displays", label: "چیدمان‌ها", path: "displays" },
  { id: "referrals", label: "معرفی‌ها", path: "referrals" },
];

function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState("users");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    const ok = await adminLogin(password);
    if (!ok) {
      setError("رمز نادرست است.");
      return;
    }
    setError(null);
    setAuthed(true);
  };

  useEffect(() => {
    if (!authed) return;
    const load = async () => {
      try {
        const tabInfo = tabs.find((t) => t.id === tab);
        const result = await adminFetch(tabInfo.path);
        setData(result);
      } catch (err) {
        setError(err.message || "خطا در دریافت داده");
      }
    };
    load();
  }, [authed, tab]);

  const action = async (path) => {
    try {
      await adminPost(path, {});
      const tabInfo = tabs.find((t) => t.id === tab);
      const result = await adminFetch(tabInfo.path);
      setData(result);
    } catch (err) {
      setError(err.message || "عملیات ناموفق بود");
    }
  };

  if (!authed) {
    return (
      <div className="card">
        <h2>ورود مدیر</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور"
        />
        <button className="login-btn" onClick={handleLogin}>
          ورود
        </button>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }

  return (
    <div className="card">
      <h2>پنل مدیر</h2>
      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab-btn ${tab === t.id ? "active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="admin-list">
        {data && data.length ? (
          data.map((item) => (
            <div key={item.id} className="mission">
              <pre style={{ whiteSpace: "pre-wrap", direction: "ltr" }}>
                {JSON.stringify(item, null, 2)}
              </pre>
              {tab === "missions" && (
                <div className="actions">
                  <button onClick={() => action(`missions/${item.id}/activate`)}>فعال</button>
                  <button onClick={() => action(`missions/${item.id}/deactivate`)}>غیرفعال</button>
                </div>
              )}
              {tab === "purchases" && (
                <div className="actions">
                  <button onClick={() => action(`purchases/${item.id}/approve`)}>تایید</button>
                  <button onClick={() => action(`purchases/${item.id}/reject`)}>رد</button>
                </div>
              )}
              {tab === "displays" && (
                <div className="actions">
                  <button onClick={() => action(`displays/${item.id}/approve`)}>تایید</button>
                  <button onClick={() => action(`displays/${item.id}/reject`)}>رد</button>
                </div>
              )}
              {tab === "referrals" && (
                <div className="actions">
                  <button onClick={() => action(`referrals/${item.id}/mark-converted`)}>
                    تبدیل شد
                  </button>
                  <button onClick={() => action(`referrals/${item.id}/reject`)}>رد</button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>داده‌ای نیست.</p>
        )}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default AdminPanel;
