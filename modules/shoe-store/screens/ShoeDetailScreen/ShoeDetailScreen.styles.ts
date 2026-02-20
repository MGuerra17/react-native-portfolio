import { spacing } from "@/constants/theme";
import { StyleSheet, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const BOTTOM_BAR_HEIGHT = 64;

export type ShoeDetailScreenStyles = {
  screen: ViewStyle;
  headerWrapper: ViewStyle;
  scrollContent: ViewStyle;
  content: ViewStyle;
};

export const createShoeDetailScreenStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeDetailScreenStyles>({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerWrapper: {
      backgroundColor: colors.surface,
    },
    scrollContent: {
      paddingBottom: BOTTOM_BAR_HEIGHT + spacing.lg,
    },
    content: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.lg,
      paddingBottom: spacing.xl,
    },
  });
