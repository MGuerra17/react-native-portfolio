import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";
import type { ShoeStoreScheme } from "../constants/theme";

export const createShoeStoreLayoutStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create({
    gestureHandlerRoot: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    stackContent: {
      backgroundColor: colors.background,
    },
  });
