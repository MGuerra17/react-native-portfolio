import type { StyleProp, TextStyle, ViewStyle } from "react-native";

export type SwiperControlsProps = {
  currentIndex: number;
  sectionTitleKeys: readonly string[];
  onPrev: () => void;
  onNext: () => void;
  controlsContainerStyle?: StyleProp<ViewStyle>;
  navButtonStyle?: StyleProp<ViewStyle>;
  navButtonDisabledStyle?: StyleProp<ViewStyle>;
  centerContainerStyle?: StyleProp<ViewStyle>;
  centerTextStyle?: StyleProp<TextStyle>;
};
