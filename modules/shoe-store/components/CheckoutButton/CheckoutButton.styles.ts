import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const BUTTON_HEIGHT = 48;

export type CheckoutButtonStyles = {
  button: ViewStyle;
  buttonText: TextStyle;
};

export const getCheckoutButtonStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<CheckoutButtonStyles>({
    button: {
      width: "100%",
      height: BUTTON_HEIGHT,
      borderRadius: borderRadius.full,
      backgroundColor: colors.primaryText,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: spacing.lg,
    },
    buttonText: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.background,
    },
  });
