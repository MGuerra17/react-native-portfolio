import { iconSize } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createShoeDetailStarRatingStyles } from "./ShoeDetailStarRating.styles";
import type { ShoeDetailStarRatingProps } from "./ShoeDetailStarRating.types";

export function ShoeDetailStarRating({
  rating,
  maxStars = 5,
}: ShoeDetailStarRatingProps) {
  const { styles, colors } = useShoeStoreUI(createShoeDetailStarRatingStyles);
  const filledCount = Math.min(Math.floor(rating), maxStars);

  return (
    <View style={styles.container}>
      {Array.from({ length: maxStars }, (_, i) => (
        <Ionicons
          key={i}
          name={i < filledCount ? "star" : "star-outline"}
          size={iconSize.xs}
          color={i < filledCount ? colors.primary : colors.secondaryText}
        />
      ))}
    </View>
  );
}
