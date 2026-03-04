# PNC Financial Literacy App – UA Innovate FinTech Hackathon

> **Honorable Mention – UA Innovate 2026, FinTech Track**

A full-stack mobile banking prototype built in 24 hours at UA Innovate 2026, competing in the FinTech track. The prompt: **improve financial literacy for young adults in an innovative way.**

We built a feature-rich React Native app that goes far beyond a standard banking UI — layering in probabilistic forecasting, AI-powered guidance, gamification, and behavioral spending analysis to help users actually understand and improve their financial health.

---

## Core Features

### Monte Carlo Financial Forecasting
- Runs 600 stochastic simulation paths from real transaction data to project 12-month balance trajectories
- Generates personalized risk indicators: overdraft probability, bill-miss risk, tight month likelihood, and credit utilization risk
- Stress-tests finances against scenarios like job loss or unexpected expenses
- Displays outcome distributions, behavioral spending modes, and month-by-month risk labels

### AI Financial Chatbot
- Embedded across the entire app as a global assistant
- Answers questions about spending, balances, and financial decisions in plain language

### Goals & Savings Tracker
- Set savings goals with a target amount and target date — the app calculates how much to set aside per week/month to stay on track
- Visualizes progress toward each goal with real-time balance data pulled directly from linked accounts
- Analyzes transaction history to surface personalized suggestions on where you can cut spending to reach your goals faster
- Keeps you accountable with progress tracking and timeline projections

### Gamified Challenge System
- XP-based progression with Bronze → Silver → Gold → Platinum → Diamond tiers
- Financial literacy challenges (budgeting, saving, reducing subscriptions) users can start and complete
- Live leaderboard with anonymized peer comparison

### Subscription Radar
- Automatically detects and categorizes recurring charges
- Visualizes 6-month subscription spending trends and category breakdowns
- Surfaces insights like subscription growth rate and % of paycheck going to recurring costs

### Compass – Financial Navigation Center
- Financial Confidence Score based on spending behavior and account health
- Safe-to-Spend widget showing how much is available without risking upcoming bills
- Personalized action plan with prioritized steps (high / medium / low urgency)
- Goal tracking and future forecast all in one place

### Full Banking UI
- Multi-account dashboard (Checking, Savings, Credit)
- Transaction filtering by account, category, and search
- Quick actions: Transfer, Pay Bills, Mobile Deposit, Zelle
- Account detail views with credit utilization, rewards tracking, and savings goal progress

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React Native + Expo SDK 52 |
| Routing | Expo Router (file-based) |
| Language | TypeScript |
| Forecasting | Custom Monte Carlo engine (`lib/monteCarlo.ts`) |
| Charts | react-native-svg |
| Icons | Expo Vector Icons (Ionicons) |

---

## Run Locally

```bash
npm install
npx expo start
```

Scan the QR code with **Expo Go** (iOS/Android) or press `i` / `a` for simulator.

**Demo login:**
```
Email:    ep@email.com
Password: password123
```

---

## Team
Built at **UA Innovate 2026** – FinTech Track  
University of Alabama
