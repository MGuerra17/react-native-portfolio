import { spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const SECTION_TITLE_SIZE = 28;

export type ShoeStoreHomeScreenStyles = {
  screen: ViewStyle;
  sectionHeader: ViewStyle;
  sectionTitle: TextStyle;
  actions: ViewStyle;
  actionButton: ViewStyle;
};

export const createShoeStoreHomeScreenStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeStoreHomeScreenStyles>({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: spacing.lg,
      paddingBottom: spacing.md,
      marginTop: spacing.sm,
    },
    sectionTitle: {
      fontSize: SECTION_TITLE_SIZE,
      fontFamily: fontFamily.montserratBold,
      color: colors.primaryText,
    },
    actions: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
    actionButton: {
      padding: spacing.xs,
    },
  });
