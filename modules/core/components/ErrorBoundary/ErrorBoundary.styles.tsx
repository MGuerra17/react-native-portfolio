import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import { StyleSheet } from "react-native";

export const createErrorBoundaryStyles = ({ colors, layout }: UIStyleContext) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 24,
      fontFamily: "Montserrat-Bold",
      color: colors.primaryText,
      marginBottom: 16,
      textAlign: "center",
    },
    message: {
      fontSize: 16,
      fontFamily: "Montserrat-Regular",
      color: colors.secondaryText,
      marginBottom: 24,
      textAlign: "center",
    },
    errorText: {
      fontSize: 12,
      fontFamily: "Montserrat-Regular",
      color: colors.secondaryText,
      marginBottom: 24,
      textAlign: "left",
      opacity: 0.7,
    },
    buttonContainer: {
      width: "100%",
      maxWidth: 300,
    },
  });
};
