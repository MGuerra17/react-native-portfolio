import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type BagItemListStyles = {
  scrollView: ViewStyle;
  scrollContent: ViewStyle;
  emptyMessage: ViewStyle;
  emptyText: TextStyle;
};

export const createBagItemListStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<BagItemListStyles>({
    scrollView: {
      flex: 1,
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
  });
