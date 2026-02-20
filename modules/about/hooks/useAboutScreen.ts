import { ABOUT_SECTIONS } from "@/modules/about/constants/sections";
import { useCallback, useRef, useState } from "react";
import {
  useWindowDimensions,
  type FlatList,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";

export function useAboutScreen() {
  const { width: sectionWidth } = useWindowDimensions();
  const flatListRef = useRef<FlatList>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const onPrev = useCallback(() => {
    if (currentSectionIndex <= 0) return;
    const nextIndex = currentSectionIndex - 1;
    flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentSectionIndex(nextIndex);
  }, [currentSectionIndex]);

  const onNext = useCallback(() => {
    if (currentSectionIndex >= ABOUT_SECTIONS.length - 1) return;
    const nextIndex = currentSectionIndex + 1;
    flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentSectionIndex(nextIndex);
  }, [currentSectionIndex]);

  const onMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { contentOffset, layoutMeasurement } = event.nativeEvent;
      const index = Math.round(contentOffset.x / layoutMeasurement.width);
      setCurrentSectionIndex(index);
    },
    [],
  );

  return {
    sectionWidth,
    flatListRef,
    currentSectionIndex,
    onPrev,
    onNext,
    onMomentumScrollEnd,
  };
}
