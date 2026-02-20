import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { STATIC_COLORS } from "@/constants/theme/colors";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const createCategoryFilterOptionStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
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
      backgroundColor: "rgba(93, 57, 221, 0.18)",
      borderWidth: 1,
      borderColor: STATIC_COLORS.primary,
    },
    buttonText: {
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
      textAlign: "center",
    },
    buttonTextSelected: {
      fontWeight: "600",
      color: STATIC_COLORS.primary,
    },
  });
