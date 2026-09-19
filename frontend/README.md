# FedHealth Guard

## Privacy-Preserving Adaptive Federated Learning for Healthcare Analytics

FedHealth Guard is a research prototype that demonstrates a privacy-preserving federated learning framework for healthcare analytics.

Chronic Kidney Disease (CKD) prediction is used as the healthcare use case. The primary focus of the project is not the prediction model itself, but the use of Federated Learning, Differential Privacy, Secure Aggregation, Non-IID client data and adaptive client contribution.

---

## Project Overview

Healthcare data is often distributed across different hospitals or institutions and may contain sensitive patient information.

Instead of collecting all patient records into a central database, this project simulates a federated healthcare environment where five hospitals train a shared model locally.

The hospitals contribute protected model updates rather than directly sharing their raw patient records.

The framework combines:

- Federated Learning
- Differential Privacy
- Secure Aggregation
- Non-IID client distributions
- Data-quality awareness
- Adaptive client weighting

---

## Proposed Framework

### Privacy-Preserving Adaptive Federated Learning

The proposed framework uses:

1. **Local Training**  
   Each hospital trains the model using its own local dataset.

2. **Differential Privacy**  
   Per-sample gradients are clipped and Gaussian noise is added to local updates.

3. **Secure Aggregation**  
   Pairwise masking is used to protect individual client updates during aggregation.

4. **Adaptive Client Weighting**  
   Client contribution considers:
   - Data quality
   - Validation utility
   - Privacy-derived information

5. **Global Model Update**  
   Protected client contributions are aggregated into the shared global model.

6. **Federated Iteration**  
   The updated global model is redistributed to participating clients for the next round.

---

## System Architecture

```text
                    ┌───────────────────┐
                    │   Global Model    │
                    └─────────┬─────────┘
                              │
                 Distribute Global Model
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
     Hospital 1          Hospital 2          Hospital 3
     Local Data          Local Data          Local Data
          │                   │                   │
          ▼                   ▼                   ▼
     Local Training      Local Training      Local Training
          │                   │                   │
          ▼                   ▼                   ▼
       DP Noise            DP Noise            DP Noise
          │                   │                   │
          └───────────────────┼───────────────────┘
                              │
                     Secure Aggregation
                              │
                              ▼
                    Adaptive Weighting
                              │
                              ▼
                    Updated Global Model
                              │
                              └──────► Next Round
                    
## Team

This project was developed by:

- **Rishita Bajaj**
- **Ishan Jain**
- **Hamza Ali**

B.Tech Computer Science  
Symbiosis Institute of Technology, Nagpur