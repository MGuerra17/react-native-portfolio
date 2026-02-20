import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import { SHOE_STORE_PRIMARY } from "@/modules/shoe-store/constants/theme";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type FilterButtonStyles = {
  button: ViewStyle;
  badge: ViewStyle;
  badgeText: TextStyle;
};

export const createFilterButtonStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<FilterButtonStyles>({
    button: {
      borderRadius: borderRadius.full,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.md,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    badge: {
      position: "absolute",
      top: 8,
      right: 4,
      minWidth: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: SHOE_STORE_PRIMARY,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 4,
    },
    badgeText: {
      fontSize: fontSize.xxs,
      fontFamily: fontFamily.montserratRegular,
      color: "#FFFFFF",
      fontWeight: "600",
    },
  });
