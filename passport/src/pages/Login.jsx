import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { demoLoginRequest, telegramLogin } from "../api/client";

function Login({ telegramInitData = "" }) {
  const logo = "/seylane_logo.png";
  const navigate = useNavigate();
  const { setAuth, token, user } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [autoLoading, setAutoLoading] = useState(false);
  const autoLoginAttempted = useRef(false);

  useEffect(() => {
    if (token && user) {
      navigate("/dashboard", { replace: true });
    }
  }, [token, user, navigate]);

  useEffect(() => {
    const windowInitData = window.Telegram?.WebApp?.initData;
    const initData = token ? "" : telegramInitData || windowInitData || "";
    console.log("Telegram initData", initData);
    const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (!initData || autoLoginAttempted.current) return;
    autoLoginAttempted.current = true;
    setAutoLoading(true);
    telegramLogin(initData)
      .then(({ token: t, user }) => {
        console.log("Telegram login result", t, user);
        localStorage.setItem("vip_passport_token", t);
        localStorage.setItem("auth", t);
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(t, user);
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "ورود از طریق تلگرام ناموفق بود.");
      })
      .finally(() => setAutoLoading(false));
  }, [navigate, setAuth]);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const result = await demoLoginRequest();
      localStorage.setItem("vip_passport_token", result.token);
      localStorage.setItem("auth", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      setAuth(result.token, result.user);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "ورود تست ناموفق بود.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <div className="passport-page passport-login">
        <div className="passport-book">
          <div className="passport-left">
            <img src={logo} alt="Seylaneh" className="header-logo" />
            <h1 style={{ margin: 0 }}>پاسپورت ویژه سیلانه</h1>
            <p className="muted">ورود مخصوص اعضای باشگاه وفاداری</p>
          </div>
          <div className="passport-right">
            <h2>ورود</h2>
            <p className="muted">اگر تلگرام فعال باشد، ورود خودکار انجام می‌شود.</p>
            <button className="login-btn" onClick={handleLogin} disabled={loading || autoLoading}>
              {loading || autoLoading ? "در حال ورود..." : "ورود تست (بدون تلگرام)"}
            </button>
            <small>با ورود، شرایط باشگاه وفاداری را می‌پذیرید.</small>
            {autoLoading && <p>در حال بررسی ورود تلگرام...</p>}
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
