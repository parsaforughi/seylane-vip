import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { demoLoginRequest, devLoginRequest, telegramLoginRequest } from "../api/client";

function Login() {
  const navigate = useNavigate();
  const { setAuth, token } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testLoading, setTestLoading] = useState(false);
  const [testError, setTestError] = useState(null);
  const [autoLoading, setAutoLoading] = useState(false);
  const autoLoginAttempted = useRef(false);

  const saveAuth = ({ token, user }) => {
    localStorage.setItem("vip_passport_token", token);
    setAuth({ token, user });
    navigate("/dashboard", { replace: true });
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [token, navigate]);

  useEffect(() => {
    const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (!telegramUser || autoLoginAttempted.current) {
      return;
    }

    autoLoginAttempted.current = true;
    setAutoLoading(true);
    const attemptLogin = async () => {
      try {
        const result = await telegramLoginRequest({
          telegramId: telegramUser.id,
          firstName: telegramUser.first_name,
          lastName: telegramUser.last_name,
          username: telegramUser.username,
        });
        saveAuth(result);
      } catch (err) {
        console.error(err);
        setError(err.message || "ورود از طریق تلگرام ناموفق بود.");
      } finally {
        setAutoLoading(false);
      }
    };

    attemptLogin();
  }, [navigate]);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const result = await devLoginRequest();
      saveAuth(result);
    } catch (err) {
      setError(err.message || "ورود با خطا مواجه شد.");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setTestError(null);
    setTestLoading(true);
    try {
      const result = await demoLoginRequest();
      saveAuth(result);
    } catch (err) {
      setTestError(err.message || "ورود تست ناموفق بود.");
    } finally {
      setTestLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <div className="passport-page passport-login">
        <div className="passport-book">
          <div className="passport-left">
            <div className="logo-circle">S</div>
            <h1>پاسپورت ویژه سیلانه</h1>
            <p>ورود مخصوص اعضای باشگاه وفاداری</p>
          </div>
          <div className="passport-right">
            <h2>ورود با تلگرام</h2>
            <p>برای دسترسی به پاسپورت دیجیتال، با حساب تلگرام خود وارد شوید.</p>
            <button className="login-btn" onClick={handleLogin} disabled={loading || autoLoading}>
              {loading || autoLoading ? "در حال ورود..." : "ورود با تلگرام"}
            </button>
            <button
              className="login-btn"
              style={{ background: "transparent", border: "1px solid #facc15", color: "#facc15" }}
              onClick={handleDemoLogin}
              disabled={testLoading || autoLoading}
            >
              {testLoading || autoLoading ? "در حال ورود..." : "ورود تست (بدون تلگرام)"}
            </button>
            <small>با ورود، شرایط باشگاه وفاداری را می‌پذیرید.</small>
            {autoLoading && <p>در حال بررسی ورود تلگرام...</p>}
            {error && <p className="error">{error}</p>}
            {testError && <p className="error">{testError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
