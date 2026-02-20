import { borderRadius, spacing } from "@/constants/theme";
import { STATIC_COLORS } from "@/constants/theme/colors";
import { fontFamily } from "@/constants/theme/fontFamily";
import { fontSize } from "@/constants/theme/fontSize";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

const END_LINE_WIDTH = 60;
const END_LINE_HEIGHT = 2;

export const getExperienceItemStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    container: {
      marginBottom: spacing.xl,
    },
    companyName: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratSemiBold,
      color: STATIC_COLORS.primary,
      marginBottom: spacing.xs,
    },
    years: {
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      marginBottom: spacing.sm,
    },
    title: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratBold,
      color: colors.primaryText,
      marginBottom: spacing.sm,
    },
    description: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      lineHeight: 22,
      marginBottom: spacing.lg,
    },
    endLine: {
      width: END_LINE_WIDTH,
      height: END_LINE_HEIGHT,
      backgroundColor: STATIC_COLORS.primary,
      opacity: 0.2,
      borderRadius: borderRadius.full,
      alignSelf: "flex-start",
    },
  });
