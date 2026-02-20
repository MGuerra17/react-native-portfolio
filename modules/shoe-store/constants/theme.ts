import { darkColors, lightColors } from "@/constants/theme/colors";

export const SHOE_STORE_PRIMARY = "#F7473E" as const;
export const SHOE_STORE_LIGHT_BACKGROUND = "#fffdfc" as const;

export const shoeStoreLightColors = {
  ...lightColors,
  primary: SHOE_STORE_PRIMARY,
  muted: "#D4D4D4",
} as const;

export const shoeStoreDarkColors = {
  ...darkColors,
  primary: SHOE_STORE_PRIMARY,
  muted: "#454545",
} as const;

export type ShoeStoreScheme =
  | typeof shoeStoreLightColors
  | typeof shoeStoreDarkColors;
