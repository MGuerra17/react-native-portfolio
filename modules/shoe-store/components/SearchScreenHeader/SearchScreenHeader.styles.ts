import { spacing } from "@/constants/theme";
import { StyleSheet, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const HIT_SLOP = { top: 12, bottom: 12, left: 12, right: 12 };

export type SearchScreenHeaderStyles = {
  container: ViewStyle;
  backButton: ViewStyle;
  hitSlop: { top: number; bottom: number; left: number; right: number };
  inputWrapper: ViewStyle;
};

export const createSearchScreenHeaderStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<SearchScreenHeaderStyles>({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
    },
    backButton: {
      padding: spacing.xs,
    },
    hitSlop: HIT_SLOP,
    inputWrapper: {
      flex: 1,
    },
  });
