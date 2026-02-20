import {
  borderRadius,
  fontSize,
  getSpacing,
  iconSize,
} from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const createNavigationOptionStyles = ({
  colors,
  layout,
}: UIStyleContext) => {
  const spacing = getSpacing(layout);
  const isTablet = layout.isTablet;
  const isLarge = layout.isLargePhone || isTablet;

  // Phones: smaller icons and text; tablets/large: bigger for better use of space
  const mainIconSize = isTablet
    ? iconSize.xl
    : isLarge
      ? iconSize.md
      : iconSize.sm;
  const chevronSize = isTablet ? iconSize.sm : isLarge ? 16 : 16;

  const titleFontSize = isTablet
    ? fontSize.xl
    : isLarge
      ? fontSize.md
      : fontSize.xs;
  const subtitleFontSize = isTablet
    ? fontSize.md
    : isLarge
      ? fontSize.xs
      : fontSize.xs;

  const paddingVertical = isTablet
    ? spacing.xl
    : isLarge
      ? spacing.lg
      : spacing.md;
  const paddingHorizontal = isTablet
    ? spacing.xl
    : isLarge
      ? spacing.md
      : spacing.sm;
  const gap = isTablet ? spacing.md : isLarge ? spacing.sm : spacing.xs;

  const sheet = StyleSheet.create({
    container: {
      flex: 1,
      minWidth: 0,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical,
      paddingHorizontal,
      gap,
      borderRadius: borderRadius.lg,
      backgroundColor: colors.surface,
    },
    mainIconContainer: {},
    title: {
      fontSize: titleFontSize,
      fontFamily: fontFamily.montserratBold,
      color: colors.primaryText,
      textAlign: "center",
    },
    subtitle: {
      fontSize: subtitleFontSize,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      textAlign: "center",
    },
  });

  return {
    ...sheet,
    mainIconSize,
    chevronSize,
  };
};
