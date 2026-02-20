import { borderRadius, spacing } from "@/constants/theme";
import { StyleSheet, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const DELETE_ACTION_WIDTH = 88;

export type SwipeableBagItemStyles = {
  deleteAction: ViewStyle;
  deleteButton: ViewStyle;
};

export const getSwipeableBagItemStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<SwipeableBagItemStyles>({
    deleteAction: {
      width: DELETE_ACTION_WIDTH,
      marginLeft: spacing.sm,
      marginBottom: spacing.md,
      borderRadius: borderRadius.xxl,
      backgroundColor: "rgba(247, 71, 62, 0.18)",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    deleteButton: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: spacing.md,
    },
  });
