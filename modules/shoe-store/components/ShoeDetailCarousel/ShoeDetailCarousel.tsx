import { useState } from "react";
import { Image } from "expo-image";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createShoeDetailCarouselStyles } from "./ShoeDetailCarousel.styles";
import type { ShoeDetailCarouselProps } from "./ShoeDetailCarousel.types";

export function ShoeDetailCarousel({ images }: ShoeDetailCarouselProps) {
  const { t, styles } = useShoeStoreUI(createShoeDetailCarouselStyles);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleCarouselScroll = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offset = e.nativeEvent.contentOffset.x;
    const width = e.nativeEvent.layoutMeasurement.width;
    const index = Math.round(offset / width);
    setCarouselIndex(index);
  };

  return (
    <View style={styles.carouselSection}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleCarouselScroll}
        scrollEventThrottle={16}
        keyExtractor={(_, i) => String(i)}
        style={styles.carousel}
        accessibilityLabel={t("shoeStore.common.carousel")}
        renderItem={({ item, index }) => {
          const imageNumber = index + 1;
          const accessibilityLabel =
            images.length > 1
              ? t("shoeStore.common.shoeImageNumber")
                  .replace("{number}", String(imageNumber))
                  .replace("{total}", String(images.length))
              : t("shoeStore.common.shoeImage");
          return (
            <View style={styles.carouselItem}>
              <Image
                source={item}
                style={styles.carouselImage}
                contentFit="contain"
                accessibilityLabel={accessibilityLabel}
              />
            </View>
          );
        }}
      />
      <View style={styles.carouselIndicators}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.carouselIndicator,
              index === carouselIndex && styles.carouselIndicatorActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}
