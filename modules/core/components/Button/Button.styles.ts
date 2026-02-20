import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { STATIC_COLORS } from "@/constants/theme/colors";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

const BORDER_WIDTH = 1;

function getBrandColor(brandColor?: string) {
  return brandColor ?? STATIC_COLORS.primary;
}

function secondaryBg(brandHex: string) {
  const r = parseInt(brandHex.slice(1, 3), 16);
  const g = parseInt(brandHex.slice(3, 5), 16);
  const b = parseInt(brandHex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 0.18)`;
}

export const createButtonStyles = (
  { colors, layout }: UIStyleContext,
  brandColor?: string
) => {
  const primary = getBrandColor(brandColor);
  return StyleSheet.create({
    container: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: borderRadius.full,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: BORDER_WIDTH,
      minHeight: 48,
    },
    primary: {
      backgroundColor: primary,
      borderColor: primary,
    },
    secondary: {
      backgroundColor: secondaryBg(primary),
      borderColor: "transparent",
    },
    outline: {
      backgroundColor: "transparent",
      borderColor: primary,
    },
    ghost: {
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    text: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratSemiBold,
    },
    primaryText: {
      color: "#FFFFFF",
    },
    secondaryText: {
      color: primary,
    },
    outlineText: {
      color: primary,
    },
    ghostText: {
      color: primary,
    },
  });
};
