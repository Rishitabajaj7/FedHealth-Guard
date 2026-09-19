import { NavLink } from "react-router-dom";

import {
  Activity,
  BarChart3,
  Building2,
  ChevronRight,
  CircleHelp,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  Network,
  ShieldCheck,
} from "lucide-react";

const navigation = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    label: "Hospital Network",
    icon: Building2,
    path: "/hospitals",
  },
  {
    label: "Federated Training",
    icon: Network,
    path: "/training",
  },
  {
    label: "Privacy Center",
    icon: LockKeyhole,
    path: "/privacy",
  },
  {
    label: "Results",
    icon: BarChart3,
    path: "/results",
  },
  {
    label: "How It Works",
    icon: CircleHelp,
    path: "/how-it-works",
  },
];

function DashboardLayout({ children }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        {/* Brand */}
        <div className="brand">
          <div className="brand-icon">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h1>FedHealth</h1>
            <span>GUARD</span>
          </div>
        </div>

        {/* Network Status */}
        <div className="network-status">
          <div className="status-dot" />

          <div>
            <strong>Federation Active</strong>
            <span>5 clients connected</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <p className="nav-heading">WORKSPACE</p>

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
              >
                <Icon size={19} />

                <span>{item.label}</span>

                {item.path === "/" && <ChevronRight size={16} />}
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar Bottom */}
        <div className="sidebar-bottom">
          <div className="security-card">
            <div className="security-icon">
              <LockKeyhole size={18} />
            </div>

            <div>
              <strong>Privacy Protected</strong>
              <span>DP + Secure Aggregation</span>
            </div>
          </div>

          <div className="sidebar-version">
            <Activity size={14} />
            <span>Research Prototype · v1.0</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <div className="mobile-menu">
            <Menu size={20} />
          </div>

          <div>
            <p className="breadcrumb">
              FEDHEALTH GUARD / OVERVIEW
            </p>

            <h2>Privacy-Preserving Healthcare Analytics</h2>
          </div>

          <div className="topbar-right">
            <div className="live-indicator">
              <span />
              System Active
            </div>

            <div className="profile">
              <div className="profile-avatar">FG</div>

              <div>
                <strong>Federation Admin</strong>
                <span>Research Environment</span>
              </div>
            </div>
          </div>
        </header>

        <section className="page-content">
          {children}
        </section>
      </main>
    </div>
  );
}

export default DashboardLayout;