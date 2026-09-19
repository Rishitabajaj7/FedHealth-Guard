import {
  Activity,
  BarChart3,
  Building2,
  CheckCircle2,
  Crosshair,
  Gauge,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { experimentData } from "../data/experimentData";

function Results() {
  const { methods, convergence, hospitals, finalModel } = experimentData;

  const proposedMethod = methods.find(
    (method) => method.name === "Adaptive DP + Secure Aggregation"
  );

  const baselineMethods = methods.filter(
    (method) => method.name !== "Adaptive DP + Secure Aggregation"
  );

  return (
    <div className="results-page">
      {/* Header */}
      <div className="page-section-header">
        <div>
          <div className="eyebrow">
            <span />
            EXPERIMENTAL RESULTS
          </div>

          <h1>Results & Evaluation</h1>

          <p>
            Experimental comparison of federated learning, differential
            privacy and secure aggregation configurations across 10
            communication rounds.
          </p>
        </div>

        <div className="results-status">
          <CheckCircle2 size={18} />

          <div>
            <strong>Experiment Complete</strong>
            <span>10 rounds · 5 federated clients</span>
          </div>
        </div>
      </div>

      {/* Top metrics */}
      <div className="results-metric-grid">
        <div className="results-metric-card">
          <div className="results-metric-icon blue">
            <Gauge size={20} />
          </div>

          <div>
            <span>Proposed Accuracy</span>
            <strong>{finalModel.accuracy.toFixed(2)}%</strong>
            <small>Adaptive DP + Secure Aggregation</small>
          </div>
        </div>

        <div className="results-metric-card">
          <div className="results-metric-icon purple">
            <Crosshair size={20} />
          </div>

          <div>
            <span>ROC-AUC</span>
            <strong>{finalModel.rocAuc.toFixed(2)}%</strong>
            <small>Final proposed model evaluation</small>
          </div>
        </div>

        <div className="results-metric-card">
          <div className="results-metric-icon green">
            <Activity size={20} />
          </div>

          <div>
            <span>F1 Score</span>
            <strong>{finalModel.f1.toFixed(2)}%</strong>
            <small>Final proposed model evaluation</small>
          </div>
        </div>

        <div className="results-metric-card">
          <div className="results-metric-icon orange">
            <TrendingUp size={20} />
          </div>

          <div>
            <span>Training Rounds</span>
            <strong>{experimentData.project.rounds}</strong>
            <small>Federated communication rounds</small>
          </div>
        </div>
      </div>

      {/* Convergence */}
      <section className="results-panel">
        <div className="results-panel-header">
          <div>
            <span className="panel-kicker">CONVERGENCE ANALYSIS</span>
            <h3>Proposed model across federated rounds</h3>
          </div>

          <span className="results-badge">
            Final: {convergence[convergence.length - 1].accuracy.toFixed(2)}%
          </span>
        </div>

        <div className="results-chart">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={convergence}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#edf1f5"
              />

              <XAxis
                dataKey="round"
                tick={{ fontSize: 9, fill: "#8995a6" }}
                axisLine={{ stroke: "#dfe5ec" }}
                tickLine={false}
                label={{
                  value: "Federated Round",
                  position: "insideBottom",
                  offset: -5,
                  fontSize: 9,
                  fill: "#8995a6",
                }}
              />

              <YAxis
                domain={[94, 97]}
                tick={{ fontSize: 9, fill: "#8995a6" }}
                axisLine={{ stroke: "#dfe5ec" }}
                tickLine={false}
                tickFormatter={(value) => `${value}%`}
              />

              <Tooltip
                contentStyle={{
                  border: "1px solid #e1e7ef",
                  borderRadius: "10px",
                  fontSize: "10px",
                }}
                formatter={(value) => [
                  `${Number(value).toFixed(2)}%`,
                  "Accuracy",
                ]}
                labelFormatter={(label) => `Round ${label}`}
              />

              <Line
                type="monotone"
                dataKey="accuracy"
                name="Accuracy"
                stroke="#4b7fd5"
                strokeWidth={3}
                dot={{
                  r: 3,
                  strokeWidth: 2,
                  fill: "#ffffff",
                }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Method comparison */}
      <section className="results-panel">
        <div className="results-panel-header">
          <div>
            <span className="panel-kicker">METHOD COMPARISON</span>
            <h3>Federated learning configurations</h3>
          </div>

          <span className="comparison-label">
            Same 10-round evaluation setting
          </span>
        </div>

        <div className="method-table">
          <div className="method-row method-heading">
            <span>Method</span>
            <span>Accuracy</span>
            <span>Precision</span>
            <span>Recall</span>
            <span>F1</span>
            <span>ROC-AUC</span>
          </div>

          {methods.map((method) => {
            const isProposed =
              method.name === "Adaptive DP + Secure Aggregation";

            return (
              <div
                className={`method-row ${
                  isProposed ? "proposed-method" : ""
                }`}
                key={method.name}
              >
                <div className="method-name">
                  {isProposed && (
                    <ShieldCheck size={15} />
                  )}

                  <strong>{method.name}</strong>

                  {isProposed && (
                    <span>Proposed</span>
                  )}
                </div>

                <strong>{method.accuracy.toFixed(2)}%</strong>
                <strong>{method.precision.toFixed(2)}%</strong>
                <strong>{method.recall.toFixed(2)}%</strong>
                <strong>{method.f1.toFixed(2)}%</strong>
                <strong>{method.rocAuc.toFixed(2)}%</strong>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hospital-wise performance */}
      <section className="results-panel">
        <div className="results-panel-header">
          <div>
            <span className="panel-kicker">CLIENT EVALUATION</span>
            <h3>Hospital-wise performance</h3>
          </div>

          <span className="comparison-label">
            Proposed model · Round 10
          </span>
        </div>

        <div className="hospital-results-grid">
          {hospitals.map((hospital) => {
            const hospitalAccuracy = {
              Hospital_1: 96.52,
              Hospital_2: 94.34,
              Hospital_3: 95.90,
              Hospital_4: 94.58,
              Hospital_5: 95.44,
            }[hospital.id];

            return (
              <div
                className="hospital-result-card"
                key={hospital.id}
              >
                <div className="hospital-result-top">
                  <div className="hospital-result-icon">
                    <Building2 size={18} />
                  </div>

                  <div>
                    <strong>{hospital.name}</strong>
                    <span>{hospital.short}</span>
                  </div>
                </div>

                <div className="hospital-result-score">
                  <span>Test Accuracy</span>
                  <strong>{hospitalAccuracy.toFixed(2)}%</strong>
                </div>

                <div className="hospital-result-bar">
                  <div
                    style={{
                      width: `${hospitalAccuracy}%`,
                    }}
                  />
                </div>

                <div className="hospital-result-footer">
                  <span>
                    {hospital.totalSamples.toLocaleString()} samples
                  </span>

                  <span>
                    CKD {hospital.ckdPrevalence.toFixed(2)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interpretation */}
      <section className="results-interpretation">
        <div className="results-interpretation-icon">
          <BarChart3 size={22} />
        </div>

        <div>
          <span className="panel-kicker">EXPERIMENT INTERPRETATION</span>

          <h3>
            What the evaluation demonstrates
          </h3>

          <p>
            The experiments compare standard federated averaging with
            privacy-preserving variants under the same 10-round training
            setup. The proposed configuration combines differential privacy,
            secure aggregation and adaptive client weighting while retaining
            a high level of predictive performance on the distributed
            evaluation data.
          </p>

          <div className="interpretation-points">
            <div>
              <CheckCircle2 size={15} />
              <span>
                Raw client records remain distributed during federated
                training.
              </span>
            </div>

            <div>
              <CheckCircle2 size={15} />
              <span>
                Differential privacy introduces controlled noise into local
                model updates.
              </span>
            </div>

            <div>
              <CheckCircle2 size={15} />
              <span>
                Secure aggregation protects individual client updates during
                aggregation.
              </span>
            </div>

            <div>
              <CheckCircle2 size={15} />
              <span>
                Client contribution is influenced by data quality, validation
                utility and privacy-derived information.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Baseline note */}
      <section className="results-note">
        <div>
          <strong>Research evaluation note</strong>

          <p>
            The reported metrics are experimental results from the current
            prototype. They should be interpreted within the dataset,
            client-partitioning strategy, training configuration and privacy
            accounting assumptions used in the study.
          </p>
        </div>

        <div className="results-note-badge">
          <ShieldCheck size={15} />
          Research Prototype
        </div>
      </section>
    </div>
  );
}

export default Results;