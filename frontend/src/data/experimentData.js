export const experimentData = {
  project: {
    name: "FedHealth Guard",
    title: "Privacy-Preserving Adaptive Federated Learning for Healthcare Analytics",
    useCase: "Chronic Kidney Disease prediction",
    clients: 5,
    rounds: 10,
  },

  finalModel: {
    name: "Adaptive DP + Secure Aggregation",
    accuracy: 95.35,
    precision: 96.49,
    recall: 96.37,
    f1: 96.40,
    rocAuc: 98.74,
  },

  privacy: {
    delta: 0.00001,
    noiseMultiplier: 0.5,
    maxGradNorm: 1.0,

    cumulativeEpsilon: {
      Hospital_1: 20.322245,
      Hospital_2: 20.316443,
      Hospital_3: 18.639414,
      Hospital_4: 19.423134,
      Hospital_5: 26.220613,
    },
  },

  convergence: [
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
  ],

  hospitals: [
    {
      id: "Hospital_1",
      name: "Hospital 1",
      short: "H1",
      totalSamples: 2445,
      noCkd: 525,
      ckd: 1920,
      ckdPrevalence: 78.53,
      quality: 60.93,
      adaptiveWeight: 21.41,
      privacyScore: 78.52,
      epsilon: 20.322245,
    },

    {
      id: "Hospital_2",
      name: "Hospital 2",
      short: "H2",
      totalSamples: 2472,
      noCkd: 601,
      ckd: 1871,
      ckdPrevalence: 75.69,
      quality: 61.38,
      adaptiveWeight: 18.23,
      privacyScore: 80.61,
      epsilon: 20.316443,
    },

    {
      id: "Hospital_3",
      name: "Hospital 3",
      short: "H3",
      totalSamples: 3048,
      noCkd: 400,
      ckd: 2648,
      ckdPrevalence: 86.88,
      quality: 57.60,
      adaptiveWeight: 30.90,
      privacyScore: 100,
      epsilon: 18.639414,
    },

    {
      id: "Hospital_4",
      name: "Hospital 4",
      short: "H4",
      totalSamples: 2767,
      noCkd: 1357,
      ckd: 1410,
      ckdPrevalence: 50.96,
      quality: 69.83,
      adaptiveWeight: 25.13,
      privacyScore: 91.24,
      epsilon: 19.423134,
    },

    {
      id: "Hospital_5",
      name: "Hospital 5",
      short: "H5",
      totalSamples: 1201,
      noCkd: 709,
      ckd: 492,
      ckdPrevalence: 40.97,
      quality: 73.83,
      adaptiveWeight: 4.33,
      privacyScore: 0,
      epsilon: 26.220613,
    },
  ],

  methods: [
    {
      name: "FedAvg",
      accuracy: 96.19,
      precision: 97.02,
      recall: 97.54,
      f1: 97.28,
      rocAuc: 99.04,
    },

    {
      name: "DP-FedAvg",
      accuracy: 95.40,
      precision: 96.82,
      recall: 96.59,
      f1: 96.70,
      rocAuc: 98.66,
    },

    {
      name: "DP + Secure Aggregation",
      accuracy: 95.69,
      precision: 97.28,
      recall: 96.53,
      f1: 96.90,
      rocAuc: 98.67,
    },

    {
      name: "Adaptive DP + Secure Aggregation",
      accuracy: 95.35,
      precision: 97.04,
      recall: 96.29,
      f1: 96.66,
      rocAuc: 98.67,
    },
  ],
};