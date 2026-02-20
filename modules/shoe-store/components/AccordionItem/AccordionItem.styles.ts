import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type AccordionItemStyles = {
  container: ViewStyle;
  header: ViewStyle;
  title: TextStyle;
  content: ViewStyle;
};

export const createAccordionItemStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<AccordionItemStyles>({
    container: {
      borderBottomWidth: 1,
      borderBottomColor: colors.surface,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: spacing.md,
      paddingRight: spacing.xs,
    },
    title: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratSemiBold,
      color: colors.primaryText,
      flex: 1,
    },
    content: {
      paddingBottom: spacing.md,
    },
  });
