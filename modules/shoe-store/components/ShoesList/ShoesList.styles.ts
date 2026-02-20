import { spacing } from "@/constants/theme";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import { StyleSheet, ViewStyle } from "react-native";

export type ShoesListStyles = {
  container: ViewStyle;
  list: ViewStyle;
  itemWrapper: ViewStyle;
};

export const createShoesListStyles = ({
  colors: _colors,
  layout,
}: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoesListStyles>({
    container: {
      flex: 1,
    },
    list: {
      paddingHorizontal: layout.isTablet ? spacing.md : spacing.sm,
      paddingTop: spacing.sm,
      paddingBottom: spacing.lg,
    },
    itemWrapper: {
      flex: 1,
      paddingHorizontal: layout.isTablet ? spacing.xs : 0,
      minWidth: layout.isTablet ? 0 : undefined,
    },
  });
