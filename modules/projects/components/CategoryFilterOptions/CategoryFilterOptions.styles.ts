import { spacing } from "@/constants/theme";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const createCategoryFilterOptionsStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    categoryGrid: {
      marginBottom: spacing.xl,
    },
    categoryGridRow: {
      flexDirection: "row",
      gap: spacing.sm,
      marginBottom: spacing.sm,
    },
  });
