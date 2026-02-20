import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const BUTTON_SIZE = 32;

export type QuantityCounterStyles = {
  container: ViewStyle;
  button: ViewStyle;
  buttonEnabled: ViewStyle;
  buttonDisabled: ViewStyle;
  count: TextStyle;
};

export const getQuantityCounterStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<QuantityCounterStyles>({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
      marginTop: spacing.sm,
    },
    button: {
      width: BUTTON_SIZE,
      height: BUTTON_SIZE,
      borderRadius: borderRadius.full,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonEnabled: {
      backgroundColor: colors.primary,
    },
    buttonDisabled: {
      backgroundColor: colors.muted,
    },
    count: {
      minWidth: 24,
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
      textAlign: "center",
    },
  });
