import {
  Building2,
  Database,
  LockKeyhole,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { experimentData } from "../data/experimentData";

function HospitalNetwork() {
  const hospitals = experimentData.hospitals;

  const totalSamples = hospitals.reduce(
    (sum, hospital) => sum + hospital.totalSamples,
    0
  );

  return (
    <div className="network-page">
      {/* Page Header */}
      <div className="page-section-header">
        <div>
          <div className="eyebrow">
            <span />
            FEDERATED CLIENT INFRASTRUCTURE
          </div>

          <h1>Hospital Network</h1>

          <p>
            Five heterogeneous healthcare clients participating in the
            federated learning federation. Raw patient data remains at each
            participating institution.
          </p>
        </div>

        <div className="network-summary">
          <Building2 size={20} />
          <div>
            <strong>5 Hospitals</strong>
            <span>{totalSamples.toLocaleString()} total samples</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="network-stats">
        <div className="network-stat-card">
          <div className="network-stat-icon blue">
            <Building2 size={20} />
          </div>

          <div>
            <span>Participating Clients</span>
            <strong>{hospitals.length}</strong>
            <small>Healthcare institutions</small>
          </div>
        </div>

        <div className="network-stat-card">
          <div className="network-stat-icon purple">
            <Database size={20} />
          </div>

          <div>
            <span>Total Samples</span>
            <strong>{totalSamples.toLocaleString()}</strong>
            <small>Distributed across clients</small>
          </div>
        </div>

        <div className="network-stat-card">
          <div className="network-stat-icon green">
            <ShieldCheck size={20} />
          </div>

          <div>
            <span>Privacy Layer</span>
            <strong>Active</strong>
            <small>DP + Secure Aggregation</small>
          </div>
        </div>

        <div className="network-stat-card">
          <div className="network-stat-icon orange">
            <TrendingUp size={20} />
          </div>

          <div>
            <span>Data Distribution</span>
            <strong>Non-IID</strong>
            <small>Heterogeneous clients</small>
          </div>
        </div>
      </div>

      {/* Hospital Cards */}
      <div className="hospital-grid">
        {hospitals.map((hospital) => (
          <article className="hospital-card" key={hospital.id}>
            <div className="hospital-card-header">
              <div className="hospital-title">
                <div className="hospital-avatar">
                  <Building2 size={20} />
                </div>

                <div>
                  <span>{hospital.short}</span>
                  <h3>{hospital.name}</h3>
                </div>
              </div>

              <div className="protected-badge">
                <ShieldCheck size={13} />
                Protected
              </div>
            </div>

            {/* Samples */}
            <div className="hospital-main-metric">
              <span>Total samples</span>
              <strong>{hospital.totalSamples.toLocaleString()}</strong>
            </div>

            {/* CKD Distribution */}
            <div className="distribution-section">
              <div className="section-label">
                <span>CKD distribution</span>
                <strong>{hospital.ckdPrevalence.toFixed(2)}%</strong>
              </div>

              <div className="distribution-bar">
                <div
                  className="ckd-segment"
                  style={{
                    width: `${hospital.ckdPrevalence}%`,
                  }}
                />

                <div
                  className="no-ckd-segment"
                  style={{
                    width: `${100 - hospital.ckdPrevalence}%`,
                  }}
                />
              </div>

              <div className="distribution-legend">
                <span>
                  <i className="legend-dot ckd" />
                  CKD {hospital.ckd.toLocaleString()}
                </span>

                <span>
                  <i className="legend-dot no-ckd" />
                  No CKD {hospital.noCkd.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Quality */}
            <div className="metric-row">
              <div>
                <span>Data quality</span>

                <div className="mini-progress">
                  <div
                    style={{
                      width: `${hospital.quality}%`,
                    }}
                  />
                </div>
              </div>

              <strong>{hospital.quality.toFixed(2)}%</strong>
            </div>

            {/* Privacy */}
            <div className="metric-row">
              <div>
                <span>Privacy score</span>
                <small>Normalized</small>
              </div>

              <strong>{hospital.privacyScore.toFixed(2)}%</strong>
            </div>

            {/* Epsilon */}
            <div className="metric-row">
              <div>
                <span>Cumulative ε</span>
                <small>δ = 10⁻⁵</small>
              </div>

              <strong>{hospital.epsilon.toFixed(2)}</strong>
            </div>

            {/* Adaptive Weight */}
            <div className="contribution-section">
              <div className="contribution-heading">
                <span>Adaptive contribution</span>
                <strong>{hospital.adaptiveWeight.toFixed(2)}%</strong>
              </div>

              <div className="contribution-bar">
                <div
                  style={{
                    width: `${hospital.adaptiveWeight / 0.31}%`,
                  }}
                />
              </div>

              <small>
                Quality + validation utility + privacy-derived score
              </small>
            </div>
          </article>
        ))}
      </div>

      {/* Explanation */}
      <section className="network-explanation">
        <div className="explanation-icon">
          <LockKeyhole size={22} />
        </div>

        <div>
          <h3>Why the hospitals remain distributed</h3>

          <p>
            Each hospital represents a local federated client. The training
            process operates on local data, while protected model updates are
            contributed to the federation. Patient-level records are not
            pooled into a central dataset.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HospitalNetwork;