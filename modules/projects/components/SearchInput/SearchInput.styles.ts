import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const createSearchInputStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    input: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.full,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
    },
  });
