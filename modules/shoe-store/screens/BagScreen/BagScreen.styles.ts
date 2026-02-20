import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type BagScreenStyles = {
  screen: ViewStyle;
  header: ViewStyle;
  scrollContent: ViewStyle;
  emptyMessage: ViewStyle;
  emptyText: TextStyle;
  footer: ViewStyle;
};

export const createBagScreenStyles = ({
  colors,
  layout,
}: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<BagScreenStyles>({
    wrapper: {
      flex: 1,
    },
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.md,
      paddingBottom: spacing.xl,
    },
    emptyMessage: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: spacing.xl,
    },
    emptyText: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
    },
    footer: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.md,
      paddingBottom: spacing.sm,
      backgroundColor: colors.background,
    },
  });
