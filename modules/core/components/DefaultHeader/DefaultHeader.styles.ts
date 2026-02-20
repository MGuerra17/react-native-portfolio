import { spacing } from "@/constants/theme";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const getDefaultHeaderStyles = ({ colors, layout }: UIStyleContext) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: spacing.lg,
      paddingBottom: spacing.md,
    },
    toggles: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },
  });
};
