import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import { StyleSheet, ViewStyle } from "react-native";

export type ShoeDetailStarRatingStyles = {
  container: ViewStyle;
};

export const createShoeDetailStarRatingStyles = ({
  colors: _colors,
  layout,
}: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeDetailStarRatingStyles>({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
    },
  });
