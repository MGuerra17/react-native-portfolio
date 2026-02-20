import { spacing } from "@/constants/theme";
import { StyleSheet, ViewStyle } from "react-native";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";

const THUMB_SIZE = 24;
const TRACK_HEIGHT = 4;
const TOUCH_SIZE = 44;

export type PriceRangeSliderStyles = {
  container: ViewStyle;
  track: ViewStyle;
  trackActive: ViewStyle;
  thumbsRow: ViewStyle;
  thumbTouch: ViewStyle;
  thumb: ViewStyle;
};

export const createPriceRangeSliderStyles = ({ colors, layout }: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<PriceRangeSliderStyles>({
    container: {
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.xs,
    },
    track: {
      height: TRACK_HEIGHT,
      borderRadius: TRACK_HEIGHT / 2,
      backgroundColor: colors.surface,
      position: "relative",
      marginHorizontal: TOUCH_SIZE / 2,
    },
    trackActive: {
      position: "absolute",
      height: TRACK_HEIGHT,
      borderRadius: TRACK_HEIGHT / 2,
      backgroundColor: colors.primary,
      top: 0,
    },
    thumbsRow: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 0,
    },
    thumbTouch: {
      position: "absolute",
      width: TOUCH_SIZE,
      height: TOUCH_SIZE,
      marginLeft: -TOUCH_SIZE / 2,
      top: -(TOUCH_SIZE - TRACK_HEIGHT) / 2,
      alignItems: "center",
      justifyContent: "center",
    },
    thumb: {
      width: THUMB_SIZE,
      height: THUMB_SIZE,
      borderRadius: THUMB_SIZE / 2,
      backgroundColor: colors.background,
      borderWidth: 2,
      borderColor: colors.primary,
    },
  });
