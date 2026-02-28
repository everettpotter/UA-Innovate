export const products = [
  {
    id: "checking",
    label: "Checking",
    href: "/products/checking",
    icon: require("@/assets/icon-checking.svg").default,
  },
  {
    id: "credit-cards",
    label: "Credit Cards",
    href: "/products/credit-cards",
    icon: require("@/assets/icon-payment-cards.svg").default,
  },
  {
    id: "savings",
    label: "Savings",
    href: "/products/savings",
    icon: require("@/assets/icon-savings-piggy-bank.svg").default,
  },
  {
    id: "home-loans",
    label: "Home Loans",
    href: "/products/home-loans",
    icon: require("@/assets/icon-home-lending.svg").default,
  },
  {
    id: "wealth",
    label: "Wealth Management",
    href: "/products/wealth",
    icon: require("@/assets/icon-investments-data.svg").default,
  },
  {
    id: "auto",
    label: "Auto Loans",
    href: "/products/auto",
    icon: require("@/assets/icon-auto-lending.svg").default,
  },
] as const;

export type Product = (typeof products)[number];
