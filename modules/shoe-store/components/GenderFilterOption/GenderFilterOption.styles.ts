import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { SHOE_STORE_PRIMARY } from "@/modules/shoe-store/constants/theme";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type GenderFilterOptionStyles = {
  button: ViewStyle;
  buttonSelected: ViewStyle;
  buttonText: TextStyle;
  buttonTextSelected: TextStyle;
};

export const createGenderFilterOptionStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<GenderFilterOptionStyles>({
    button: {
      flex: 1,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.sm,
      borderRadius: borderRadius.lg,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.surface,
      minHeight: 44,
    },
    buttonSelected: {
      backgroundColor: "rgba(247, 71, 62, 0.18)",
      borderWidth: 1,
      borderColor: SHOE_STORE_PRIMARY,
    },
    buttonText: {
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
      textAlign: "center",
    },
    buttonTextSelected: {
      fontWeight: "600",
      color: SHOE_STORE_PRIMARY,
    },
  });
