export const MOCK_USER = {
  name: 'Everett Potter',
  email: 'ep@email.com',
  password: 'password123',
};

export type Account = {
  id: string;
  type: 'Checking' | 'Savings' | 'Credit';
  name: string;
  number: string;
  balance: number;
  available: number;
  // Checking
  apy?: number;
  routingNumber?: string;
  // Savings
  interestEarnedYTD?: number;
  savingsGoal?: number;
  // Credit
  creditLimit?: number;
  apr?: number;
  rewardsCashBack?: number;
  minimumPayment?: number;
  paymentDueDate?: string;
  rewardRates?: { gas: number; dining: number; groceries: number; other: number };
};

export const MOCK_ACCOUNTS: Account[] = [
  {
    id: '1',
    type: 'Checking',
    name: 'Virtual Wallet',
    number: '****4821',
    balance: 847.22,
    available: 711.22,
    // Paycheck came in, rent took half — $38.47 DoorDash still pending
    apy: 0.01,
    routingNumber: '043000096',
  },
  {
    id: '2',
    type: 'Savings',
    name: 'Growth Savings',
    number: '****9034',
    balance: 850.00,
    available: 850.00,
    // Had to transfer $100 out to cover checking after overdraft
    apy: 0.05,
    interestEarnedYTD: 0.41,
    savingsGoal: 5_000,
  },
  {
    id: '3',
    type: 'Credit',
    name: 'Cash Rewards Visa',
    number: '****7712',
    balance: -3_890.00,
    available: 110.00,
    creditLimit: 4_000,
    // 97% utilization — only paying the $35 minimum each month
    apr: 24.24,
    rewardsCashBack: 12.50,
    minimumPayment: 35.00,
    paymentDueDate: '2026-03-19',
    rewardRates: { gas: 4, dining: 3, groceries: 2, other: 1 },
  },
];

export type Transaction = {
  id: string;
  accountId: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  pending: boolean;
  isRecurring?: boolean;
};

export type SubscriptionCategory = 'Streaming' | 'Music' | 'Software' | 'Gaming' | 'Fitness' | 'News';

export type Subscription = {
  id: string;
  name: string;
  amount: number;
  billingCycle: 'monthly' | 'annual';
  subCategory: SubscriptionCategory;
  icon: string;
  nextBillingDate: string;
  accountId: string;
  startDate: string;
};

export const MOCK_SUBSCRIPTIONS: Subscription[] = [
  {
    id: 'sub_netflix',
    name: 'Netflix',
    amount: 15.99,
    billingCycle: 'monthly',
    subCategory: 'Streaming',
    icon: 'tv-outline',
    nextBillingDate: '2026-03-27',
    accountId: '1',
    startDate: '2024-03-27',
  },
  {
    id: 'sub_spotify',
    name: 'Spotify',
    amount: 9.99,
    billingCycle: 'monthly',
    subCategory: 'Music',
    icon: 'musical-notes-outline',
    nextBillingDate: '2026-03-22',
    accountId: '1',
    startDate: '2023-08-22',
  },
  {
    id: 'sub_hulu',
    name: 'Hulu',
    amount: 17.99,
    billingCycle: 'monthly',
    subCategory: 'Streaming',
    icon: 'play-circle-outline',
    nextBillingDate: '2026-03-10',
    accountId: '1',
    startDate: '2024-09-10',
  },
  {
    id: 'sub_planet_fitness',
    name: 'Planet Fitness',
    amount: 24.99,
    billingCycle: 'monthly',
    subCategory: 'Fitness',
    icon: 'barbell-outline',
    nextBillingDate: '2026-03-10',
    accountId: '1',
    startDate: '2025-08-10',
  },
  {
    id: 'sub_disney',
    name: 'Disney+',
    amount: 13.99,
    billingCycle: 'monthly',
    subCategory: 'Streaming',
    icon: 'star-outline',
    nextBillingDate: '2026-03-05',
    accountId: '1',
    startDate: '2024-11-05',
  },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  // ── February 2026 — Checking (accountId: 1) ──────────────────────────────────
  // Feb 27: Paycheck hits — but subs auto-charge the same day
  { id: 't1',  accountId: '1', date: '2026-02-28', description: 'DoorDash',                      amount:    -38.47, category: 'Food & Dining',  pending: true                    },
  { id: 't2',  accountId: '1', date: '2026-02-27', description: 'Direct Deposit - Initech Corp', amount: 2_450.00,  category: 'Income',         pending: false                   },
  { id: 't3',  accountId: '1', date: '2026-02-27', description: 'Netflix',                       amount:    -15.99, category: 'Subscriptions',  pending: false, isRecurring: true },
  { id: 't4',  accountId: '1', date: '2026-02-27', description: 'Spotify',                       amount:     -9.99, category: 'Subscriptions',  pending: false, isRecurring: true },
  { id: 't5',  accountId: '1', date: '2026-02-25', description: 'Starbucks',                     amount:     -7.25, category: 'Food & Dining',  pending: false                   },
  { id: 't6',  accountId: '1', date: '2026-02-23', description: 'Venmo - Bar Night',             amount:    -55.00, category: 'Food & Dining',  pending: false                   },
  // Overdraft — balance dipped below $0 before paycheck
  { id: 't7',  accountId: '1', date: '2026-02-20', description: 'PNC Overdraft Fee',             amount:    -36.00, category: 'Fees',           pending: false                   },
  // Panic transfer from savings to cover the overdraft
  { id: 't8',  accountId: '1', date: '2026-02-18', description: 'Transfer from Growth Savings',  amount:    100.00, category: 'Transfer',       pending: false                   },
  // Feb 14: Paycheck — rent goes out the same day
  { id: 't9',  accountId: '1', date: '2026-02-14', description: 'Direct Deposit - Initech Corp', amount: 2_450.00,  category: 'Income',         pending: false                   },
  { id: 't10', accountId: '1', date: '2026-02-14', description: 'Riverside Apts - Rent',         amount: -1_250.00, category: 'Rent',           pending: false                   },
  { id: 't11', accountId: '1', date: '2026-02-12', description: 'Uber Eats',                     amount:    -31.85, category: 'Food & Dining',  pending: false                   },
  { id: 't12', accountId: '1', date: '2026-02-10', description: 'Planet Fitness',                amount:    -24.99, category: 'Subscriptions',  pending: false, isRecurring: true },

  // ── February 2026 — Savings (accountId: 2) ───────────────────────────────────
  // Had to dip into savings after overdraft
  { id: 't13', accountId: '2', date: '2026-02-15', description: 'Transfer to Checking',          amount:   -100.00, category: 'Transfer',       pending: false                   },
  { id: 't14', accountId: '2', date: '2026-02-01', description: 'Interest Payment',              amount:      0.41, category: 'Interest',       pending: false                   },

  // ── February 2026 — Credit Card (accountId: 3) ───────────────────────────────
  // Nearly maxed — only paid the $35 minimum, then kept spending
  { id: 't15', accountId: '3', date: '2026-02-28', description: 'Tin Roof Bar & Grill',          amount:    -87.40, category: 'Food & Dining',  pending: true                    },
  { id: 't16', accountId: '3', date: '2026-02-27', description: 'Credit Card Min. Payment',      amount:     35.00, category: 'Transfer',       pending: false                   },
  { id: 't17', accountId: '3', date: '2026-02-22', description: 'Ticketmaster - Concert',        amount:   -156.00, category: 'Shopping',       pending: false                   },
  { id: 't18', accountId: '3', date: '2026-02-15', description: 'Best Buy',                      amount:   -219.99, category: 'Shopping',       pending: false                   },
];
