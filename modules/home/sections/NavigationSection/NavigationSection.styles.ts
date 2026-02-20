import { borderRadius, fontSize, getSpacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const createNavigationSectionStyles = ({
  colors,
  layout,
}: UIStyleContext) => {
  const spacing = getSpacing(layout);
  const isTablet = layout.isTablet;
  const isLarge = layout.isLargePhone || isTablet;

  const paddingVertical = isTablet
    ? spacing.xl
    : isLarge
      ? spacing.lg
      : spacing.md;
  const paddingHorizontal = isTablet
    ? spacing.xl * 1.5
    : isLarge
      ? spacing.xl
      : spacing.lg;
  const optionsGap = isTablet ? spacing.lg : isLarge ? spacing.md : spacing.sm;
  const titleFontSize = isTablet
    ? fontSize.xl
    : isLarge
      ? fontSize.md
      : fontSize.md;
  const subtitleFontSize = isTablet
    ? fontSize.lg
    : isLarge
      ? fontSize.md
      : fontSize.sm;

  return StyleSheet.create({
    container: {
      flex: 0.35,
      backgroundColor: colors.background,
      paddingVertical,
      paddingHorizontal,
      borderTopLeftRadius: borderRadius.xxl,
      borderTopRightRadius: borderRadius.xxl,
    },
    title: {
      fontSize: titleFontSize,
      fontFamily: fontFamily.montserratBold,
      color: colors.primaryText,
      marginBottom: spacing.xs,
    },
    subtitle: {
      fontSize: subtitleFontSize,
      color: colors.secondaryText,
      fontFamily: fontFamily.montserratRegular,
    },
    optionsContainer: {
      marginTop: spacing.md,
      flex: 1,
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: optionsGap,
      alignContent: "stretch",
    },
  });
};
