import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const getRootLayoutContentStyles = ({ colors, layout }: UIStyleContext) => {
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    stack: {
      backgroundColor: colors.background,
    },
  });
};
