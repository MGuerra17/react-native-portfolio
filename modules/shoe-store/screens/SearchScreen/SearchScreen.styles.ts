import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type SearchScreenStyles = {
  screen: ViewStyle;
  scrollContent: ViewStyle;
  sectionTitle: TextStyle;
  noResultsMessage: TextStyle;
  loadingIndicator: ViewStyle;
};

export const createSearchScreenStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<SearchScreenStyles>({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.xl,
    },
    sectionTitle: {
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratBold,
      color: colors.secondaryText,
      marginBottom: spacing.sm,
      marginTop: spacing.md,
    },
    noResultsMessage: {
      fontSize: fontSize.sm,
      fontFamily: fontFamily.montserratRegular,
      color: colors.secondaryText,
      textAlign: "center",
      paddingVertical: spacing.xl,
    },
    loadingIndicator: {
      paddingVertical: spacing.xl,
    },
  });
