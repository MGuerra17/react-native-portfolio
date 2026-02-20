import { borderRadius, spacing } from "@/constants/theme";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const HIT_SLOP = { top: 12, bottom: 12, left: 12, right: 12 };
const BADGE_MIN_SIZE = 18;

export type ShoeStoreHeaderStyles = {
  container: ViewStyle;
  backButton: ViewStyle;
  storeButton: ViewStyle;
  badge: ViewStyle;
  badgeText: TextStyle;
  hitSlop: { top: number; bottom: number; left: number; right: number };
};

export const getShoeStoreHeaderStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeStoreHeaderStyles>({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: spacing.md,
    },
    backButton: {
      paddingLeft: spacing.lg,
      paddingRight: spacing.md,
    },
    storeButton: {
      backgroundColor: colors.primaryText,
      paddingVertical: spacing.sm,
      paddingLeft: spacing.md,
      paddingRight: spacing.lg,
      borderTopLeftRadius: borderRadius.full,
      borderBottomLeftRadius: borderRadius.full,
      position: "relative",
    },
    badge: {
      position: "absolute",
      top: -6,
      right: spacing.sm,
      minWidth: BADGE_MIN_SIZE,
      height: BADGE_MIN_SIZE,
      borderRadius: BADGE_MIN_SIZE / 2,
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 5,
    },
    badgeText: {
      color: colors.background,
      fontSize: 11,
      fontWeight: "700",
    },
    hitSlop: HIT_SLOP,
  });
