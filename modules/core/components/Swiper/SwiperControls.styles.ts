import { borderRadius, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { fontSize } from "@/constants/theme/fontSize";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const getSwiperControlsStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    controlsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      gap: spacing.sm,
    },
    navButton: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.full,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.md,
      justifyContent: "center",
      alignItems: "center",
    },
    navButtonDisabled: {
      opacity: 0.5,
    },
    sectionTitlePill: {
      flex: 1,
      backgroundColor: colors.surface,
      borderRadius: borderRadius.full,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
      marginHorizontal: spacing.sm,
      justifyContent: "center",
      alignItems: "center",
    },
    sectionTitleText: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
    },
  });
