import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Database,
  Globe2,
  LockKeyhole,
  Network,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { experimentData } from "../data/experimentData";

function HowItWorks() {
  const { hospitals, privacy, project } = experimentData;

  return (
    <div className="how-page">
      {/* Header */}
      <div className="page-section-header">
        <div>
          <div className="eyebrow">
            <span />
            SYSTEM ARCHITECTURE
          </div>

          <h1>How It Works</h1>

          <p>
            A visual overview of the privacy-preserving federated learning
            workflow used in the healthcare analytics prototype.
          </p>
        </div>

        <div className="architecture-status">
          <Network size={18} />

          <div>
            <strong>Federated Architecture</strong>
            <span>{project.clients} distributed clients</span>
          </div>
        </div>
      </div>

      {/* Architecture Flow */}
      <section className="architecture-panel">
        <div className="architecture-panel-header">
          <div>
            <span className="panel-kicker">END-TO-END WORKFLOW</span>

            <h3>
              From distributed healthcare data to a shared global model
            </h3>
          </div>

          <span className="architecture-round">
            {project.rounds} rounds evaluated
          </span>
        </div>

        <div className="architecture-flow">
          {/* Step 1 */}
          <div className="architecture-step">
            <div className="architecture-step-number">01</div>

            <div className="architecture-icon blue">
              <Database size={24} />
            </div>

            <h4>Distributed Data</h4>

            <p>
              Each participating hospital keeps its healthcare records
              locally instead of pooling them into one central database.
            </p>

            <div className="architecture-tag">
              Raw data stays local
            </div>
          </div>

          <ArrowRight className="architecture-arrow" />

          {/* Step 2 */}
          <div className="architecture-step">
            <div className="architecture-step-number">02</div>

            <div className="architecture-icon purple">
              <Building2 size={24} />
            </div>

            <h4>Local Training</h4>

            <p>
              Every client receives the current global model and performs
              local optimization using its own training data.
            </p>

            <div className="architecture-tag">
              Local computation
            </div>
          </div>

          <ArrowRight className="architecture-arrow" />

          {/* Step 3 */}
          <div className="architecture-step">
            <div className="architecture-step-number">03</div>

            <div className="architecture-icon orange">
              <LockKeyhole size={24} />
            </div>

            <h4>Differential Privacy</h4>

            <p>
              Per-sample gradients are clipped and Gaussian noise is added
              before the protected model update is contributed.
            </p>

            <div className="architecture-tag">
              Clipping + Gaussian noise
            </div>
          </div>

          <ArrowRight className="architecture-arrow" />

          {/* Step 4 */}
          <div className="architecture-step">
            <div className="architecture-step-number">04</div>

            <div className="architecture-icon teal">
              <ShieldCheck size={24} />
            </div>

            <h4>Secure Aggregation</h4>

            <p>
              Pairwise masks protect client updates so individual unmasked
              updates are not directly used by the coordinator.
            </p>

            <div className="architecture-tag">
              Pairwise masking
            </div>
          </div>

          <ArrowRight className="architecture-arrow" />

          {/* Step 5 */}
          <div className="architecture-step">
            <div className="architecture-step-number">05</div>

            <div className="architecture-icon green">
              <Sparkles size={24} />
            </div>

            <h4>Adaptive Weighting</h4>

            <p>
              Client contribution incorporates data quality, validation
              utility and privacy-derived information.
            </p>

            <div className="architecture-tag">
              Quality + utility + privacy
            </div>
          </div>

          <ArrowRight className="architecture-arrow" />

          {/* Step 6 */}
          <div className="architecture-step">
            <div className="architecture-step-number">06</div>

            <div className="architecture-icon blue">
              <Globe2 size={24} />
            </div>

            <h4>Global Model</h4>

            <p>
              Protected client contributions are aggregated into the shared
              global model, which becomes the starting point for the next
              round.
            </p>

            <div className="architecture-tag">
              Shared model knowledge
            </div>
          </div>
        </div>

        {/* Round loop */}
        <div className="round-loop">
          <RefreshCw size={18} />

          <div>
            <strong>Federated learning loop</strong>

            <span>
              The updated global model is redistributed to participating
              clients and the process repeats for the next communication
              round.
            </span>
          </div>

          <div className="round-loop-badge">
            Round 1 → Round {project.rounds}
          </div>
        </div>
      </section>

      {/* Client Network */}
      <section className="architecture-network-panel">
        <div className="architecture-panel-header">
          <div>
            <span className="panel-kicker">FEDERATED NETWORK</span>

            <h3>
              Five healthcare clients participate without pooling raw records
            </h3>
          </div>

          <span className="network-protected">
            <ShieldCheck size={13} />
            Privacy mechanisms active
          </span>
        </div>

        <div className="network-visual">
          <div className="hospital-cluster">
            {hospitals.map((hospital) => (
              <div className="network-hospital" key={hospital.id}>
                <div className="network-hospital-icon">
                  <Building2 size={18} />
                </div>

                <div>
                  <strong>{hospital.short}</strong>
                  <span>{hospital.totalSamples.toLocaleString()} samples</span>
                </div>

                <CheckCircle2 size={15} />
              </div>
            ))}
          </div>

          <div className="network-lines">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="federation-center">
            <div className="federation-center-icon">
              <Network size={28} />
            </div>

            <strong>Federation Coordinator</strong>

            <span>
              Aggregates protected client contributions
            </span>

            <div className="coordinator-badges">
              <span>DP</span>
              <span>Secure Aggregation</span>
            </div>
          </div>

          <div className="global-model-card">
            <div className="global-model-icon">
              <Globe2 size={21} />
            </div>

            <div>
              <span>SHARED KNOWLEDGE</span>
              <strong>Global Model</strong>
              <small>Redistributed after aggregation</small>
            </div>
          </div>
        </div>
      </section>

      {/* What is actually shared */}
      <section className="shared-data-panel">
        <div className="shared-data-header">
          <div className="shared-data-icon">
            <LockKeyhole size={21} />
          </div>

          <div>
            <span className="panel-kicker">DATA BOUNDARY</span>

            <h3>What stays local vs. what participates in training</h3>
          </div>
        </div>

        <div className="boundary-grid">
          <div className="boundary-card local">
            <div className="boundary-card-header">
              <Database size={19} />

              <span>REMAINS LOCAL</span>
            </div>

            <h4>Hospital patient records</h4>

            <ul>
              <li>Patient-level healthcare records</li>
              <li>Clinical measurements</li>
              <li>Local training examples</li>
              <li>Hospital-specific raw data</li>
            </ul>

            <div className="boundary-label">
              <LockKeyhole size={13} />
              Not pooled into central training data
            </div>
          </div>

          <div className="boundary-arrow">
            <ArrowRight size={23} />
          </div>

          <div className="boundary-card shared">
            <div className="boundary-card-header">
              <ShieldCheck size={19} />

              <span>PARTICIPATES IN FEDERATION</span>
            </div>

            <h4>Protected model updates</h4>

            <ul>
              <li>Locally computed model changes</li>
              <li>Differentially private updates</li>
              <li>Masked aggregation contributions</li>
              <li>Weighted global model update</li>
            </ul>

            <div className="boundary-label">
              <Network size={13} />
              Used for collaborative model training
            </div>
          </div>
        </div>
      </section>

      {/* Why each layer exists */}
      <section className="architecture-layers-panel">
        <div className="architecture-panel-header">
          <div>
            <span className="panel-kicker">SECURITY LAYERS</span>

            <h3>Why each mechanism is included</h3>
          </div>
        </div>

        <div className="architecture-layers">
          <div className="architecture-layer">
            <div className="layer-number">01</div>

            <Network size={19} />

            <div>
              <strong>Federated Learning</strong>

              <p>
                Enables multiple institutions to collaboratively train a
                shared model without centralizing their raw datasets.
              </p>
            </div>
          </div>

          <div className="architecture-layer">
            <div className="layer-number">02</div>

            <LockKeyhole size={19} />

            <div>
              <strong>Differential Privacy</strong>

              <p>
                Limits the influence of individual training examples through
                gradient clipping and controlled noise injection.
              </p>
            </div>
          </div>

          <div className="architecture-layer">
            <div className="layer-number">03</div>

            <ShieldCheck size={19} />

            <div>
              <strong>Secure Aggregation</strong>

              <p>
                Uses pairwise masking in the prototype so the intended
                aggregate can be reconstructed without directly exposing
                each unmasked client update.
              </p>
            </div>
          </div>

          <div className="architecture-layer">
            <div className="layer-number">04</div>

            <Sparkles size={19} />

            <div>
              <strong>Adaptive Contribution</strong>

              <p>
                Incorporates client data quality, validation utility and
                privacy-derived information into contribution weighting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current experiment configuration */}
      <section className="architecture-config">
        <div>
          <span className="panel-kicker">CURRENT EXPERIMENT</span>

          <h3>Prototype configuration</h3>

          <p>
            The dashboard reflects the experimental configuration used for
            the current federated learning evaluation.
          </p>
        </div>

        <div className="config-items">
          <div>
            <span>Clients</span>
            <strong>{project.clients}</strong>
          </div>

          <div>
            <span>Rounds</span>
            <strong>{project.rounds}</strong>
          </div>

          <div>
            <span>Noise</span>
            <strong>{privacy.noiseMultiplier.toFixed(1)}</strong>
          </div>

          <div>
            <span>Max Norm</span>
            <strong>{privacy.maxGradNorm.toFixed(1)}</strong>
          </div>

          <div>
            <span>δ</span>
            <strong>{privacy.delta.toExponential(0)}</strong>
          </div>
        </div>
      </section>

      {/* Prototype limitation */}
      <section className="architecture-limitation">
        <div className="limitation-mark">
          !
        </div>

        <div>
          <strong>Important implementation note</strong>

          <p>
            This dashboard represents a research prototype. The secure
            aggregation layer uses pairwise masking simulation rather than a
            production cryptographic secure-aggregation protocol. The
            architecture therefore demonstrates the mechanism and evaluation
            workflow, while production deployment would require additional
            authentication, key management, dropout handling and other
            operational security controls.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;