import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type BagItemProductInfoStyles = {
  container: ViewStyle;
  name: TextStyle;
  size: TextStyle;
  price: TextStyle;
};

export const getBagItemProductInfoStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<BagItemProductInfoStyles>({
    container: {
      flex: 1,
      justifyContent: "center",
      minWidth: 0,
    },
    name: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
    },
    size: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      marginTop: spacing.xs,
      opacity: 0.8,
    },
    price: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratMedium,
      color: colors.primaryText,
      marginTop: spacing.xs,
    },
  });
