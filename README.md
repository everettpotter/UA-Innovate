# PNC Banking App – 1:1 Prototype

React Native Expo prototype based on [PNC Personal Banking](https://www.pnc.com/en/personal-banking.html). UI and copy mirror the site’s hero, products grid, sign-on form, and contact/footer.

## Run

```bash
npm install
npx expo start
```

Then scan the QR code with Expo Go (iOS/Android) or press `i` / `a` for simulator.

## Screens

- **Home** – Hero (“Earn up to $400” / Virtual Wallet), Products & Services grid, Contact strip, footer.
- **Sign On** – User ID, Password, Remember ID, Forgot ID/Password, Sign On, Enroll.
- **Products** – List of Checking, Credit Cards, Savings, Home Loans, Wealth Management, Auto Loans (from site).

## Stack

- Expo SDK 52, Expo Router (file-based routing)
- TypeScript, React Native
- Theme in `constants/theme.ts` (PNC orange `#f58025`, nav `#414e58`, link `#0069aa`)

## Assets

Add `icon.png`, `splash.png`, and `adaptive-icon.png` under `assets/` if you want custom app icons; the app runs without them in dev.
