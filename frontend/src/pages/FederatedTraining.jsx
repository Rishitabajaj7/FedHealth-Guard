import {
  Activity,
  ArrowDown,
  ArrowRight,
  Building2,
  CheckCircle2,
  Cpu,
  Database,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { experimentData } from "../data/experimentData";

function FederatedTraining() {
  const { convergence, hospitals } = experimentData;

  const latestRound = convergence[convergence.length - 1];

  return (
    <div className="training-page">
      {/* Header */}
      <div className="page-section-header">
        <div>
          <div className="eyebrow">
            <span />
            FEDERATED TRAINING MONITOR
          </div>

          <h1>Federated Training</h1>

          <p>
            Monitor the federated learning workflow across five heterogeneous
            healthcare clients without centralizing patient-level records.
          </p>
        </div>

        <div className="training-status">
          <span className="training-status-dot" />
          <div>
            <strong>Training Complete</strong>
            <span>10 federated rounds</span>
          </div>
        </div>
      </div>

      {/* Training Summary */}
      <div className="training-stats">
        <div className="training-stat-card">
          <div className="training-stat-icon blue">
            <Network size={19} />
          </div>

          <div>
            <span>Federated Round</span>
            <strong>10 / 10</strong>
            <small>Communication rounds</small>
          </div>
        </div>

        <div className="training-stat-card">
          <div className="training-stat-icon purple">
            <Cpu size={19} />
          </div>

          <div>
            <span>Local Clients</span>
            <strong>5</strong>
            <small>Independent training nodes</small>
          </div>
        </div>

        <div className="training-stat-card">
          <div className="training-stat-icon green">
            <Activity size={19} />
          </div>

          <div>
            <span>Latest Accuracy</span>
            <strong>{latestRound.accuracy.toFixed(2)}%</strong>
            <small>Weighted test accuracy</small>
          </div>
        </div>

        <div className="training-stat-card">
          <div className="training-stat-icon orange">
            <ShieldCheck size={19} />
          </div>

          <div>
            <span>Protection</span>
            <strong>DP + SA</strong>
            <small>Privacy mechanisms active</small>
          </div>
        </div>
      </div>

      {/* Main Workflow */}
      <section className="training-workflow-panel">
        <div className="training-panel-header">
          <div>
            <span className="panel-kicker">ROUND WORKFLOW</span>
            <h3>How one federated round works</h3>
          </div>

          <span className="round-badge">
            Round {latestRound.round}
          </span>
        </div>

        <div className="workflow">
          {/* Step 1 */}
          <div className="workflow-step">
            <div className="workflow-icon blue">
              <Database size={21} />
            </div>

            <span className="workflow-number">01</span>

            <h4>Local Data</h4>

            <p>
              Each hospital keeps its healthcare data locally.
            </p>
          </div>

          <ArrowRight className="workflow-arrow" size={20} />

          {/* Step 2 */}
          <div className="workflow-step">
            <div className="workflow-icon purple">
              <Cpu size={21} />
            </div>

            <span className="workflow-number">02</span>

            <h4>Local Training</h4>

            <p>
              Each client trains a copy of the shared global model.
            </p>
          </div>

          <ArrowRight className="workflow-arrow" size={20} />

          {/* Step 3 */}
          <div className="workflow-step">
            <div className="workflow-icon orange">
              <LockKeyhole size={21} />
            </div>

            <span className="workflow-number">03</span>

            <h4>Differential Privacy</h4>

            <p>
              Gradients are clipped and Gaussian noise is applied.
            </p>
          </div>

          <ArrowRight className="workflow-arrow" size={20} />

          {/* Step 4 */}
          <div className="workflow-step">
            <div className="workflow-icon teal">
              <ShieldCheck size={21} />
            </div>

            <span className="workflow-number">04</span>

            <h4>Secure Aggregation</h4>

            <p>
              Pairwise masking protects individual client updates.
            </p>
          </div>

          <ArrowRight className="workflow-arrow" size={20} />

          {/* Step 5 */}
          <div className="workflow-step">
            <div className="workflow-icon green">
              <Sparkles size={21} />
            </div>

            <span className="workflow-number">05</span>

            <h4>Adaptive Weighting</h4>

            <p>
              Quality, utility and privacy-derived information determine
              contribution.
            </p>
          </div>

          <ArrowRight className="workflow-arrow" size={20} />

          {/* Step 6 */}
          <div className="workflow-step">
            <div className="workflow-icon blue">
              <Network size={21} />
            </div>

            <span className="workflow-number">06</span>

            <h4>Global Model</h4>

            <p>
              The aggregated model is redistributed to the clients.
            </p>
          </div>
        </div>
      </section>

      {/* Client Activity */}
      <section className="training-client-panel">
        <div className="training-panel-header">
          <div>
            <span className="panel-kicker">CLIENT ACTIVITY</span>
            <h3>Participating hospitals</h3>
          </div>

          <span className="activity-label">
            <span />
            All clients completed
          </span>
        </div>

        <div className="client-activity-grid">
          {hospitals.map((hospital) => (
            <div className="client-activity-card" key={hospital.id}>
              <div className="client-activity-top">
                <div className="client-activity-icon">
                  <Building2 size={18} />
                </div>

                <div>
                  <strong>{hospital.name}</strong>
                  <span>{hospital.short} · Local client</span>
                </div>

                <CheckCircle2
                  className="completed-icon"
                  size={18}
                />
              </div>

              <div className="activity-progress">
                <div
                  style={{
                    width: "100%",
                  }}
                />
              </div>

              <div className="activity-bottom">
                <span>Round 10 complete</span>
                <strong>{hospital.adaptiveWeight.toFixed(2)}% weight</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Explanation */}
      <section className="training-explanation">
        <div className="training-explanation-icon">
          <Network size={23} />
        </div>

        <div>
          <span>FEDERATED LEARNING PRINCIPLE</span>

          <h3>
            Collaboration happens through model updates, not patient records.
          </h3>

          <p>
            The global model provides a shared starting point to participating
            clients. Each hospital performs local optimization and contributes
            a protected model update. The federation coordinator aggregates
            these contributions and distributes the updated model for the next
            round.
          </p>
        </div>
      </section>

      {/* Round Timeline */}
      <section className="training-timeline-panel">
        <div className="training-panel-header">
          <div>
            <span className="panel-kicker">TRAINING TIMELINE</span>
            <h3>Federated convergence</h3>
          </div>

          <span className="timeline-result">
            Final: {latestRound.accuracy.toFixed(2)}%
          </span>
        </div>

        <div className="round-timeline">
          {convergence.map((round, index) => (
            <div className="round-item" key={round.round}>
              <div className="round-marker">
                {index === convergence.length - 1 ? (
                  <CheckCircle2 size={15} />
                ) : (
                  <span>{round.round}</span>
                )}
              </div>

              <div>
                <strong>Round {round.round}</strong>
                <span>{round.accuracy.toFixed(2)}% accuracy</span>
              </div>

              {index < convergence.length - 1 && (
                <ArrowDown className="round-arrow" size={14} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FederatedTraining;