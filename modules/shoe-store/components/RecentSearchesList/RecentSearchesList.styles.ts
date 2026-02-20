import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type RecentSearchesListStyles = {
  container: ViewStyle;
  sectionTitle: TextStyle;
  list: ViewStyle;
  item: ViewStyle;
  itemText: TextStyle;
  emptyText: TextStyle;
};

export const createRecentSearchesListStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<RecentSearchesListStyles>({
    container: {
      paddingTop: spacing.sm,
    },
    sectionTitle: {
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratBold,
      color: colors.secondaryText,
      marginBottom: spacing.sm,
    },
    list: {
      gap: spacing.xs,
    },
    item: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.sm,
    },
    itemText: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
    },
    emptyText: {
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      paddingVertical: spacing.md,
    },
  });
