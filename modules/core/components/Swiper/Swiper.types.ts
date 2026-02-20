import type { RefObject } from "react";
import type {
  FlatList,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";

export type SwiperProps<T> = {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T) => string;
  onMomentumScrollEnd?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  flatListRef: RefObject<FlatList<T> | null>;
  currentIndex: number;
  getTitleKey: (item: T) => string;
  onPrev: () => void;
  onNext: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  listContainerStyle?: StyleProp<ViewStyle>;
  controlsContainerStyle?: StyleProp<ViewStyle>;
  navButtonStyle?: StyleProp<ViewStyle>;
  navButtonDisabledStyle?: StyleProp<ViewStyle>;
  centerContainerStyle?: StyleProp<ViewStyle>;
  centerTextStyle?: StyleProp<TextStyle>;
};
