import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type BagTotalRowStyles = {
  row: ViewStyle;
  label: TextStyle;
  value: TextStyle;
};

export const getBagTotalRowStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<BagTotalRowStyles>({
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: spacing.xl,
    },
    label: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
    },
    value: {
      fontSize: fontSize.lg,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
    },
  });
