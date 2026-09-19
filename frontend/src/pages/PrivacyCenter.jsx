import {
  AlertTriangle,
  CheckCircle2,
  EyeOff,
  KeyRound,
  LockKeyhole,
  Network,
  ShieldCheck,
  Shuffle,
} from "lucide-react";

import { experimentData } from "../data/experimentData";

function PrivacyCenter() {
  const { hospitals, privacy } = experimentData;

  return (
    <div className="privacy-page">
      <div className="page-section-header">
        <div>
          <div className="eyebrow">
            <span />
            PRIVACY & SECURITY MONITOR
          </div>

          <h1>Privacy Center</h1>

          <p>
            Monitor the privacy mechanisms used to protect federated model
            updates across participating healthcare clients.
          </p>
        </div>

        <div className="privacy-status">
          <ShieldCheck size={18} />

          <div>
            <strong>Privacy Layer Active</strong>
            <span>DP + Secure Aggregation</span>
          </div>
        </div>
      </div>

      {/* Privacy Configuration */}
      <section className="privacy-config-grid">
        <div className="privacy-config-card">
          <div className="privacy-config-icon blue">
            <EyeOff size={21} />
          </div>

          <div>
            <span>Differential Privacy</span>
            <strong>Enabled</strong>
            <small>Gradient clipping + Gaussian noise</small>
          </div>

          <CheckCircle2 className="privacy-check" size={18} />
        </div>

        <div className="privacy-config-card">
          <div className="privacy-config-icon purple">
            <Shuffle size={21} />
          </div>

          <div>
            <span>Secure Aggregation</span>
            <strong>Enabled</strong>
            <small>Pairwise masking simulation</small>
          </div>

          <CheckCircle2 className="privacy-check" size={18} />
        </div>

        <div className="privacy-config-card">
          <div className="privacy-config-icon orange">
            <KeyRound size={21} />
          </div>

          <div>
            <span>Noise Multiplier</span>
            <strong>{privacy.noiseMultiplier.toFixed(1)}</strong>
            <small>Gaussian noise parameter</small>
          </div>
        </div>

        <div className="privacy-config-card">
          <div className="privacy-config-icon green">
            <LockKeyhole size={21} />
          </div>

          <div>
            <span>Max Gradient Norm</span>
            <strong>{privacy.maxGradNorm.toFixed(1)}</strong>
            <small>Per-sample clipping bound</small>
          </div>
        </div>
      </section>

      {/* DP Parameters */}
      <section className="privacy-panel">
        <div className="privacy-panel-header">
          <div>
            <span className="panel-kicker">DIFFERENTIAL PRIVACY</span>
            <h3>Privacy configuration</h3>
          </div>

          <div className="delta-badge">
            δ = {privacy.delta.toExponential(0)}
          </div>
        </div>

        <div className="privacy-parameter-grid">
          <div className="privacy-parameter">
            <span>Noise Multiplier</span>
            <strong>{privacy.noiseMultiplier.toFixed(1)}</strong>
            <p>Controls Gaussian noise added to clipped gradients.</p>
          </div>

          <div className="privacy-parameter">
            <span>Max Gradient Norm</span>
            <strong>{privacy.maxGradNorm.toFixed(1)}</strong>
            <p>Limits the maximum contribution of an individual sample.</p>
          </div>

          <div className="privacy-parameter">
            <span>Delta</span>
            <strong>{privacy.delta.toExponential(0)}</strong>
            <p>Failure probability parameter used for accounting.</p>
          </div>

          <div className="privacy-parameter">
            <span>Training Rounds</span>
            <strong>{experimentData.project.rounds}</strong>
            <p>Federated communication rounds evaluated.</p>
          </div>
        </div>
      </section>

      {/* Epsilon Table */}
      <section className="privacy-panel">
        <div className="privacy-panel-header">
          <div>
            <span className="panel-kicker">PRIVACY ACCOUNTING</span>
            <h3>Cumulative privacy expenditure</h3>
          </div>

          <span className="privacy-note">
            δ = {privacy.delta.toExponential(0)}
          </span>
        </div>

        <div className="epsilon-table">
          <div className="epsilon-row epsilon-heading">
            <span>Client</span>
            <span>Cumulative ε</span>
            <span>Privacy Score</span>
            <span>Status</span>
          </div>

          {hospitals.map((hospital) => (
            <div className="epsilon-row" key={hospital.id}>
              <div className="epsilon-client">
                <div className="epsilon-avatar">
                  {hospital.short}
                </div>

                <div>
                  <strong>{hospital.name}</strong>
                  <span>{hospital.totalSamples.toLocaleString()} samples</span>
                </div>
              </div>

              <strong className="epsilon-value">
                {hospital.epsilon.toFixed(2)}
              </strong>

              <div className="privacy-score-cell">
                <div className="privacy-score-bar">
                  <div
                    style={{
                      width: `${hospital.privacyScore}%`,
                    }}
                  />
                </div>

                <span>{hospital.privacyScore.toFixed(2)}%</span>
              </div>

              <span
                className={`privacy-status-pill ${
                  hospital.privacyScore >= 75 ? "good" : "attention"
                }`}
              >
                {hospital.privacyScore >= 75 ? (
                  <>
                    <CheckCircle2 size={13} />
                    Protected
                  </>
                ) : (
                  <>
                    <AlertTriangle size={13} />
                    Attention
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Secure Aggregation */}
      <section className="secure-aggregation-panel">
        <div className="secure-header">
          <div className="secure-icon">
            <Shuffle size={23} />
          </div>

          <div>
            <span className="panel-kicker">SECURE AGGREGATION</span>

            <h3>
              Individual updates are masked before aggregation
            </h3>

            <p>
              Pairwise masks are added and cancelled during aggregation so
              the coordinator reconstructs the aggregate update rather than
              directly using each client's unmasked update.
            </p>
          </div>
        </div>

        <div className="masking-flow">
          <div className="mask-client">
            <div className="mask-client-icon">
              H1
            </div>

            <strong>Hospital 1</strong>
            <span>Model update</span>

            <div className="mask-chip positive">
              + Mask A
            </div>
          </div>

          <div className="mask-connector">
            <span>Protected update</span>
            <div />
          </div>

          <div className="mask-center">
            <div className="mask-center-icon">
              <LockKeyhole size={24} />
            </div>

            <strong>Secure Aggregator</strong>
            <span>Masked updates combined</span>
          </div>

          <div className="mask-connector">
            <span>Aggregate</span>
            <div />
          </div>

          <div className="mask-client">
            <div className="mask-client-icon">
              H2
            </div>

            <strong>Hospital 2</strong>
            <span>Model update</span>

            <div className="mask-chip negative">
              − Mask A
            </div>
          </div>
        </div>

        <div className="masking-result">
          <CheckCircle2 size={17} />

          <span>
            Pairwise masks cancel during aggregation, leaving the intended
            weighted aggregate update.
          </span>
        </div>
      </section>

      {/* Privacy Explanation */}
      <section className="privacy-explanation-grid">
        <div className="privacy-explanation-card">
          <div className="explanation-number">01</div>

          <Network size={20} />

          <h3>Differential Privacy</h3>

          <p>
            Each local training process clips per-sample gradients and adds
            Gaussian noise before the model update is contributed to the
            federation.
          </p>
        </div>

        <div className="privacy-explanation-card">
          <div className="explanation-number">02</div>

          <LockKeyhole size={20} />

          <h3>Secure Aggregation</h3>

          <p>
            Pairwise masks are applied to client updates. Positive and
            negative masks cancel when the protected updates are combined.
          </p>
        </div>

        <div className="privacy-explanation-card">
          <div className="explanation-number">03</div>

          <ShieldCheck size={20} />

          <h3>Combined Protection</h3>

          <p>
            The framework combines local update perturbation with aggregation
            protection to reduce exposure of individual client contributions.
          </p>
        </div>
      </section>

      {/* Limitation */}
      <section className="privacy-limitation">
        <div className="limitation-icon">
          <AlertTriangle size={19} />
        </div>

        <div>
          <strong>Research prototype limitation</strong>

          <p>
            Secure aggregation is implemented as a pairwise masking simulation
            for this prototype. It is not a production cryptographic protocol
            and does not include deployment features such as authenticated
            key exchange or dropout recovery. Privacy accounting is reported
            under the assumptions of the experimental setup.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PrivacyCenter;