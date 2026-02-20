import { spacing } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const heroSectionStyles = StyleSheet.create({
  container: {
    flex: 0.65,
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: spacing.lg,
    marginBottom: "auto",
  },
  toggles: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  avatar: {
    height: "65%",
    width: "auto",
    aspectRatio: 1,
    marginTop: -spacing.md,
  },
});
