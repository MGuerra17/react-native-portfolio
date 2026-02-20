import { spacing } from "@/constants/theme";
import { StyleSheet, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

export type GenderFilterOptionsStyles = {
  genderGrid: ViewStyle;
  genderGridRow: ViewStyle;
};

export const createGenderFilterOptionsStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<GenderFilterOptionsStyles>({
    genderGrid: {
      marginBottom: spacing.xl,
    },
    genderGridRow: {
      flexDirection: "row",
      gap: spacing.sm,
      marginBottom: spacing.sm,
    },
  });
