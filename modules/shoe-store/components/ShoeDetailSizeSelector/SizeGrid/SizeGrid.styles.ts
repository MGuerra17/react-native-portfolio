import { spacing } from "@/constants/theme";
import { StyleSheet, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const SIZE_GRID_GAP = spacing.md;

export type SizeGridStyles = {
  sizeGrid: ViewStyle;
};

export const createSizeGridStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<SizeGridStyles>({
    sizeGrid: {
      flexDirection: "row",
      gap: SIZE_GRID_GAP,
      paddingRight: spacing.lg,
    },
  });
