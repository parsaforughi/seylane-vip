import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";

function Login() {
  const { loginWithTelegram } = useAuthStore();
  const widgetRef = useRef(null);

  useEffect(() => {
    const botUsername =
      import.meta.env.VITE_TELEGRAM_BOT_USERNAME || "BOT_USERNAME";
    window.onTelegramAuth = (user) => {
      loginWithTelegram(user);
    };
    if (widgetRef.current) {
      const script = document.createElement("script");
      script.src = "https://telegram.org/js/telegram-widget.js?22";
      script.async = true;
      script.setAttribute("data-telegram-login", botUsername);
      script.setAttribute("data-size", "large");
      script.setAttribute("data-userpic", "false");
      script.setAttribute("data-lang", "fa");
      script.setAttribute("data-request-access", "write");
      script.setAttribute("data-on-auth", "onTelegramAuth");
      widgetRef.current.innerHTML = "";
      widgetRef.current.appendChild(script);
    }
    return () => {
      delete window.onTelegramAuth;
    };
  }, [loginWithTelegram]);

  return (
    <div className="passport-login-screen">
      <div className="passport-stage">
        <div className="passport-book open">
          <div className="book-cover cover-side">
            <div className="cover-emboss">
              <div className="cover-emblem big">SEYLANE</div>
              <div className="cover-title">پاسپورت VIP سیلانه</div>
              <div className="cover-subtitle">باشگاه وفاداری مشتریان</div>
            </div>
            <div className="cover-border" />
          </div>
          <div className="book-inner visible">
            <div className="inner-page">
              <div className="page-header">
                <div className="page-title">مشخصات دارنده پاسپورت</div>
                <div className="microprint">SEYLANE • VIP • PASSPORT</div>
              </div>
              <div className="inner-body">
                <div className="avatar-placeholder" />
                <div className="info-grid">
                  <div>
                    <p className="label">نام و نام خانوادگی</p>
                    <p className="value">—</p>
                  </div>
                  <div>
                    <p className="label">نام کاربری تلگرام</p>
                    <p className="value">@—</p>
                  </div>
                  <div>
                    <p className="label">شماره پاسپورت</p>
                    <p className="value">000000</p>
                  </div>
                  <div>
                    <p className="label">وضعیت</p>
                    <p className="value highlight">VIP</p>
                  </div>
                  <div>
                    <p className="label">صادر شده توسط</p>
                    <p className="value">سیستم وفاداری سیلانه</p>
                  </div>
                  <div>
                    <p className="label">تاریخ صدور</p>
                    <p className="value">—</p>
                  </div>
                </div>
              </div>
              <div className="page-footer">
                <div className="microprint line">
                  SEYLANE • SEYLANE • SEYLANE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-panel">
        <h1>ورود به پاسپورت VIP سیلانه</h1>
        <p>با تلگرام وارد شوید تا پاسپورت دیجیتال شما فعال شود.</p>
        <div className="telegram-widget" ref={widgetRef} />
      </div>
    </div>
  );
}

export default Login;
