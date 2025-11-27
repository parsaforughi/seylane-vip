import { NavLink, Outlet } from "react-router-dom";
import PageContainer from "../components/PageContainer";

const logo = "/seylane_logo.png";

const tabs = [
  { id: "dashboard", label: "داشبورد", to: "/dashboard" },
  { id: "missions", label: "ماموریت‌ها", to: "/missions" },
  { id: "stamps", label: "تمبرها", to: "/stamps" },
  { id: "profile", label: "پروفایل", to: "/profile" },
];

function MainLayout() {
  return (
    <div className="app-shell">
      <PageContainer>
        <header className="topbar">
          <div className="brand">
            <img src={logo} alt="Seylane Logo" className="brand-logo header-logo" />
            <div>
              <strong>Seylaneh VIP Passport</strong>
              <p className="muted">پاسپورت ویژه سیلانه</p>
            </div>
          </div>
        </header>

        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      </PageContainer>

      <nav className="bottom-nav">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.to}
            className={({ isActive }) =>
              `bottom-nav__item ${isActive ? "active" : ""}`
            }
          >
            <span>{tab.label}</span>
            <div className="bottom-nav__indicator" />
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default MainLayout;
