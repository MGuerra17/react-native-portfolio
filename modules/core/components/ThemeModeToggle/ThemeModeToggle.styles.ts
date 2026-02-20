import { borderRadius, spacing } from "@/constants/theme";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const ICON_SIZE = 20;

export const createThemeModeToggleStyles = ({ colors, layout }: UIStyleContext) =>
  StyleSheet.create({
    container: {
      minHeight: 40,
      padding: spacing.sm,
      borderRadius: borderRadius.full,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
  });
