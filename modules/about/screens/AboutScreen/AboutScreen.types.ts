import type { RefObject } from "react";
import type {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

export type AboutScreenProps = {
  flatListRef: RefObject<FlatList | null>;
  currentSectionIndex: number;
  sectionWidth: number;
  onPrev: () => void;
  onNext: () => void;
  onMomentumScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};
