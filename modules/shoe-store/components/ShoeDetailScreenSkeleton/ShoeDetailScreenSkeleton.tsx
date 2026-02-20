import { useEffect } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { ShoeStoreHeader } from "@/modules/shoe-store/components/ShoeStoreHeader";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createShoeDetailScreenSkeletonStyles } from "./ShoeDetailScreenSkeleton.styles";

export function ShoeDetailScreenSkeleton() {
  const { styles } = useShoeStoreUI(createShoeDetailScreenSkeletonStyles);
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

  const { width: screenWidth } = Dimensions.get("window");

  return (
    <View style={styles.screen}>
      <View style={styles.headerWrapper}>
        <ShoeStoreHeader />
      </View>

      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Carousel Skeleton */}
        <View style={styles.carouselSection}>
          <View style={styles.carouselItem}>
            <Animated.View
              style={[
                styles.carouselImage,
                { width: screenWidth * 0.8, height: screenWidth * 0.5 },
                animatedStyle,
              ]}
            />
          </View>
          <View style={styles.carouselIndicators}>
            <Animated.View
              style={[styles.carouselIndicator, animatedStyle]}
            />
            <Animated.View
              style={[styles.carouselIndicator, animatedStyle]}
            />
            <Animated.View
              style={[styles.carouselIndicator, animatedStyle]}
            />
          </View>
        </View>

        <View style={styles.content}>
          {/* Product Info Skeleton */}
          <View style={styles.productInfoSection}>
            <View style={styles.genderRatingRow}>
              <Animated.View
                style={[styles.genderPlaceholder, animatedStyle]}
              />
              <Animated.View
                style={[styles.ratingPlaceholder, animatedStyle]}
              />
            </View>
            <View style={styles.namePriceRow}>
              <Animated.View
                style={[styles.namePlaceholder, animatedStyle]}
              />
              <Animated.View
                style={[styles.pricePlaceholder, animatedStyle]}
              />
            </View>
          </View>

          {/* Size Selector Skeleton */}
          <View style={styles.sizeSection}>
            <View style={styles.sizeHeaderRow}>
              <Animated.View
                style={[styles.sizeTitlePlaceholder, animatedStyle]}
              />
              <View style={styles.sizeTypeRow}>
                <Animated.View
                  style={[styles.sizeTypeButton, animatedStyle]}
                />
                <Animated.View
                  style={[styles.sizeTypeButton, animatedStyle]}
                />
              </View>
            </View>
            <View style={styles.sizeGrid}>
              {Array.from({ length: 6 }).map((_, index) => (
                <Animated.View
                  key={index}
                  style={[styles.sizeBox, animatedStyle]}
                />
              ))}
            </View>
          </View>

          {/* Accordion Skeleton */}
          <View style={styles.accordionSection}>
            {Array.from({ length: 3 }).map((_, index) => (
              <View key={index} style={styles.accordionItem}>
                <View style={styles.accordionHeader}>
                  <Animated.View
                    style={[styles.accordionTitlePlaceholder, animatedStyle]}
                  />
                  <Animated.View
                    style={[styles.accordionIconPlaceholder, animatedStyle]}
                  />
                </View>
                {index === 0 && (
                  <Animated.View
                    style={[styles.accordionContentPlaceholder, animatedStyle]}
                  />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar Skeleton */}
      <View style={styles.bottomBar}>
        <Animated.View
          style={[styles.favoriteButtonPlaceholder, animatedStyle]}
        />
        <Animated.View
          style={[styles.pillButtonPlaceholder, animatedStyle]}
        />
      </View>
    </View>
  );
}
