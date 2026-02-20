import { spacing } from "@/constants/theme";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const getProjectScreenStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    screen: {
      flex: 1,
    },
    controls: {
      flexDirection: "row",
      padding: spacing.md,
      gap: spacing.sm,
      alignItems: "center",
    },
    searchContainer: {
      flex: 1,
    },
  });
