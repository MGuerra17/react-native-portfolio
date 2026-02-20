import { borderRadius, fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type SearchInputStyles = {
  container: ViewStyle;
  input: TextStyle;
  closeButton: ViewStyle;
};

export const createSearchInputStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<SearchInputStyles>({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
    input: {
      flex: 1,
      backgroundColor: colors.surface,
      borderRadius: borderRadius.full,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      fontSize: fontSize.xs,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
    },
    closeButton: {
      padding: spacing.xs,
    },
  });
