import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const createProjectCardStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    card: {
      position: "relative",
      flexDirection: "row",
      backgroundColor: colors.surface,
      borderRadius: borderRadius.xxl,
      padding: spacing.sm,
      gap: spacing.md,
      marginBottom: spacing.lg,
      width: "100%",
    },
    categoryBadge: {
      position: "absolute",
      top: -spacing.sm,
      left: 0,
      zIndex: 1,
      alignSelf: "flex-start",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xxs,
      borderRadius: borderRadius.full,
      marginTop: spacing.xs,
    },
    categoryText: {
      fontSize: fontSize.xxs,
      fontFamily: fontFamily.montserratRegular,
      color: "#FFFFFF",
    },
    imageContainer: {
      width: 110,
      height: 110,
      borderRadius: borderRadius.xl,
      backgroundColor: colors.background,
      overflow: "hidden",
      flexShrink: 0,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    content: {
      flex: 1,
      paddingTop: spacing.md,
      gap: spacing.sm,
      minWidth: 0,
      flexShrink: 1,
    },
    title: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
    },
    description: {
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      lineHeight: fontSize.xs * 1.5,
    },
  });
