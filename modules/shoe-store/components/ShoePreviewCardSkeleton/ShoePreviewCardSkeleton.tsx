import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createShoePreviewCardSkeletonStyles } from "./ShoePreviewCardSkeleton.styles";

export function ShoePreviewCardSkeleton() {
  const { styles } = useShoeStoreUI(createShoePreviewCardSkeletonStyles);
  const opacity = useSharedValue(0.4);

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(0.8, { duration: 800 }),
      -1,
      true
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={styles.card}>
      <Animated.View style={[styles.imagePlaceholder, animatedStyle]} />
      <Animated.View style={[styles.namePlaceholder, animatedStyle]} />
      <Animated.View style={[styles.pricePlaceholder, animatedStyle]} />
    </View>
  );
}
