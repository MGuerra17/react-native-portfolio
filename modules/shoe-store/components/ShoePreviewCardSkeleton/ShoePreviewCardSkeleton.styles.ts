import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { StyleSheet, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const IMAGE_HEIGHT = 120;

export type ShoePreviewCardSkeletonStyles = {
  card: ViewStyle;
  imagePlaceholder: ViewStyle;
  namePlaceholder: ViewStyle;
  pricePlaceholder: ViewStyle;
};

export const createShoePreviewCardSkeletonStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoePreviewCardSkeletonStyles>({
    card: {
      backgroundColor: colors.surface,
      borderRadius: borderRadius.xxl,
      padding: spacing.lg,
      marginBottom: spacing.sm,
      position: "relative",
    },
    imagePlaceholder: {
      height: IMAGE_HEIGHT,
      width: "100%",
      borderRadius: borderRadius.md,
      backgroundColor: colors.muted,
      marginTop: spacing.sm,
    },
    namePlaceholder: {
      height: fontSize.md,
      width: "70%",
      alignSelf: "center",
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
      marginTop: spacing.xl,
    },
    pricePlaceholder: {
      height: fontSize.sm,
      width: "40%",
      alignSelf: "center",
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
      marginTop: spacing.sm,
    },
  });
