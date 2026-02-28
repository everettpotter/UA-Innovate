// PNC brand from pnc.com
export const colors = {
  primary: "#f58025",       // PNC orange (mask-icon, msapplication-TileColor)
  primaryDark: "#084d77",   // hover from OneTrust
  navBg: "#414e58",         // mast-nav background
  navDark: "#2d3943",       // flyout/subnav
  link: "#0069aa",
  white: "#ffffff",
  offWhite: "#ededee",
  gray: "#f1f4f6",
  border: "#d8d8d8",
  text: "#2e3644",
  textMuted: "#565656",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const typography = {
  title: { fontSize: 24, fontWeight: "700" as const },
  titleSmall: { fontSize: 20, fontWeight: "700" as const },
  headline: { fontSize: 18, fontWeight: "600" as const },
  body: { fontSize: 16, fontWeight: "400" as const },
  bodySmall: { fontSize: 14, fontWeight: "400" as const },
  caption: { fontSize: 12, fontWeight: "400" as const },
} as const;
