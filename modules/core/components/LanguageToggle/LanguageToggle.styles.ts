import { borderRadius, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { fontSize } from "@/constants/theme/fontSize";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const createLanguageToggleStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    container: {
      minHeight: 40,
      padding: spacing.sm,
      borderRadius: borderRadius.full,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    label: {
      fontSize: fontSize.lg,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
    },
  });
