import { fontSize, spacing } from "@/constants/theme";
import { fontFamily } from "@/constants/theme/fontFamily";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type ShoeDetailSizeSelectorStyles = {
  sizeSection: ViewStyle;
  sizeHeaderRow: ViewStyle;
  sizeTitle: TextStyle;
};

export const createShoeDetailSizeSelectorStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeDetailSizeSelectorStyles>({
    sizeSection: {
      marginTop: spacing.lg,
    },
    sizeHeaderRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    sizeTitle: {
      fontSize: fontSize.md,
      fontFamily: fontFamily.montserratRegular,
      color: colors.primaryText,
    },
  });
