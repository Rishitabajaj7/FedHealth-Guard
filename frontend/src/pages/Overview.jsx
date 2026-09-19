
import {
  Activity,
  ArrowUpRight,
  Building2,
  LockKeyhole,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { experimentData } from "../data/experimentData";
const convergenceData = [
  { round: 1, accuracy: 95.27 },
  { round: 2, accuracy: 95.56 },
  { round: 3, accuracy: 95.35 },
  { round: 4, accuracy: 95.44 },
  { round: 5, accuracy: 95.40 },
  { round: 6, accuracy: 95.31 },
  { round: 7, accuracy: 95.52 },
  { round: 8, accuracy: 95.56 },
  { round: 9, accuracy: 95.48 },
  { round: 10, accuracy: 95.35 },
];

const hospitals = [
  {
    name: "Hospital 1",
    short: "H1",
    samples: 2445,
    ckd: 78.53,
    quality: 60.93,
    weight: 21.41,
  },
  {
    name: "Hospital 2",
    short: "H2",
    samples: 2472,
    ckd: 75.69,
    quality: 61.38,
    weight: 18.23,
  },
  {
    name: "Hospital 3",
    short: "H3",
    samples: 3048,
    ckd: 86.88,
    quality: 57.60,
    weight: 30.90,
  },
  {
    name: "Hospital 4",
    short: "H4",
    samples: 2767,
    ckd: 50.96,
    quality: 69.83,
    weight: 25.13,
  },
  {
    name: "Hospital 5",
    short: "H5",
    samples: 1201,
    ckd: 40.97,
    quality: 73.83,
    weight: 4.33,
  },
];

function StatCard({ icon: Icon, label, value, detail, accent }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${accent}`}>
        <Icon size={20} />
      </div>

      <div className="stat-info">
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{detail}</small>
      </div>

      <ArrowUpRight className="stat-arrow" size={17} />
    </div>
  );
}

function Overview() {
  return (
    <div className="overview-page">
      <div className="page-intro">
        <div>
          <div className="eyebrow">
            <span />
            FEDERATED HEALTHCARE RESEARCH PLATFORM
          </div>

          <h1>Federated intelligence, without centralized data.</h1>

          <p>
            A privacy-preserving federated learning framework designed to
            enable collaborative healthcare analytics across distributed
            hospital clients.
          </p>
        </div>

        <div className="intro-badge">
          <ShieldCheck size={18} />
          <div>
            <strong>Privacy Layer Active</strong>
            <span>DP + Secure Aggregation</span>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          icon={Building2}
          label="Federated Clients"
          value="5"
          detail="Participating hospitals"
          accent="blue"
        />

        <StatCard
          icon={Activity}
          label="Training Rounds"
          value="10"
          detail="Federated communication rounds"
          accent="purple"
        />

        <StatCard
          icon={ShieldCheck}
          label="Final Accuracy"
          value="95.35%"
          detail="Adaptive DP + Secure Aggregation"
          accent="green"
        />

        <StatCard
          icon={LockKeyhole}
          label="Privacy Budget"
          value="ε 18.64–26.22"
          detail="Cumulative estimate, δ = 10⁻⁵"
          accent="orange"
        />
      </div>

      <div className="dashboard-grid">
        <section className="panel convergence-panel">
          <div className="panel-header">
            <div>
              <span className="panel-kicker">MODEL PERFORMANCE</span>
              <h3>Federated convergence</h3>
            </div>

            <div className="chart-value">
              <strong>95.35%</strong>
              <span>Round 10</span>
            </div>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={convergenceData}>
                <defs>
                  <linearGradient id="accuracyFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopOpacity={0.28} />
                    <stop offset="100%" stopOpacity={0.02} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                />

                <XAxis
                  dataKey="round"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                  label={{
                    value: "Federated Round",
                    position: "insideBottom",
                    offset: -4,
                  }}
                />

                <YAxis
                  domain={[94.8, 96]}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `${value}%`}
                />

                <Tooltip
                  formatter={(value) => [`${value}%`, "Accuracy"]}
                  labelFormatter={(label) => `Round ${label}`}
                />

                <Area
                  type="monotone"
                  dataKey="accuracy"
                  strokeWidth={3}
                  fill="url(#accuracyFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="panel network-panel">
          <div className="panel-header">
            <div>
              <span className="panel-kicker">FEDERATION</span>
              <h3>Hospital network</h3>
            </div>

            <Network size={20} />
          </div>

          <div className="network-visual">
            <div className="network-line line-1" />
            <div className="network-line line-2" />
            <div className="network-line line-3" />
            <div className="network-line line-4" />
            <div className="network-line line-5" />

            {hospitals.map((hospital, index) => (
              <div
                key={hospital.short}
                className={`hospital-node node-${index + 1}`}
              >
                <Building2 size={18} />
                <strong>{hospital.short}</strong>
              </div>
            ))}

            <div className="global-node">
              <ShieldCheck size={27} />
              <strong>Global</strong>
              <span>Model</span>
            </div>
          </div>

          <div className="network-footer">
            <span>
              <i />
              Raw data remains local
            </span>

            <span>
              <i />
              Updates are protected
            </span>
          </div>
        </section>
      </div>

      <section className="panel contribution-panel">
        <div className="panel-header">
          <div>
            <span className="panel-kicker">ADAPTIVE AGGREGATION</span>
            <h3>Client contribution</h3>
          </div>

          <span className="panel-description">
            Quality + validation utility + privacy-derived score
          </span>
        </div>

        <div className="hospital-table">
          <div className="table-row table-heading">
            <span>Client</span>
            <span>Samples</span>
            <span>CKD prevalence</span>
            <span>Data quality</span>
            <span>Adaptive weight</span>
          </div>

          {hospitals.map((hospital) => (
            <div className="table-row" key={hospital.short}>
              <div className="client-name">
                <div className="client-icon">
                  <Building2 size={16} />
                </div>
                <strong>{hospital.name}</strong>
              </div>

              <span>{hospital.samples.toLocaleString()}</span>

              <span>{hospital.ckd.toFixed(2)}%</span>

              <div className="progress-cell">
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${hospital.quality}%` }}
                  />
                </div>
                <span>{hospital.quality.toFixed(2)}%</span>
              </div>

              <div className="weight-cell">
                <strong>{hospital.weight.toFixed(2)}%</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="overview-footer">
        <div>
          <Users size={16} />
          <span>5 heterogeneous healthcare clients</span>
        </div>

        <div>
          <LockKeyhole size={16} />
          <span>Patient-level raw data is not shared</span>
        </div>

        <div>
          <Activity size={16} />
          <span>CKD prediction used as the healthcare use case</span>
        </div>
      </div>
    </div>
  );
}

export default Overview;