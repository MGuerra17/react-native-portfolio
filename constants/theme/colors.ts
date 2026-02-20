export const STATIC_COLORS = {
  primary: "#5D39DD",
} as const;

export const lightColors = {
  ...STATIC_COLORS,
  background: "#F4F4F4",
  surface: "#EDEDED",
  primaryText: "#1A1A1A",
  secondaryText: "#4D4D4D",
  icon: "#4D4D4D",
} as const;

export const darkColors = {
  ...STATIC_COLORS,
  background: "#121212",
  surface: "#1D1D1D",
  primaryText: "#FFFFFF",
  secondaryText: "#E8E8E8",
  icon: "#E8E8E8",
} as const;

export type ColorScheme = typeof lightColors | typeof darkColors;
