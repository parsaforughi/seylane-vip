import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const initTelegramWebApp = () => {
  const webApp = window.Telegram?.WebApp;
  if (!webApp) return;

  webApp.ready();
  webApp.expand();

  const { themeParams = {} } = webApp;
  if (themeParams.bg_color) {
    document.body.style.backgroundColor = themeParams.bg_color;
    webApp.setBackgroundColor?.(themeParams.bg_color);
  }
  if (themeParams.text_color) {
    document.body.style.color = themeParams.text_color;
  }
};

initTelegramWebApp();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
