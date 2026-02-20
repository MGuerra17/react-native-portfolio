import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { STATIC_COLORS } from "@/constants/theme/colors";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const createFilterButtonStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.full,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.md,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    badge: {
      position: "absolute",
      top: -4,
      right: -4,
      minWidth: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: STATIC_COLORS.primary,
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
