import { Image } from "expo-image";
import { Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { ShoeDetailStarRating } from "@/modules/shoe-store/components/ShoeDetailStarRating";
import { createShoeDetailReviewCardStyles } from "./ShoeDetailReviewCard.styles";
import type { ShoeDetailReviewCardProps } from "./ShoeDetailReviewCard.types";

export function ShoeDetailReviewCard({
  review,
  comment,
}: ShoeDetailReviewCardProps) {
  const { styles } = useShoeStoreUI(createShoeDetailReviewCardStyles);
  const initial = review.author.charAt(0).toUpperCase();

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          {review.authorImage ? (
            <Image
              source={review.authorImage}
              style={styles.avatarImage}
              contentFit="cover"
            />
          ) : (
            <Text style={styles.avatarInitial}>{initial}</Text>
          )}
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.authorName}>{review.author}</Text>
          <ShoeDetailStarRating rating={review.rating} />
        </View>
      </View>
      <View style={styles.contentBlock}>
        <Text style={styles.comment}>{comment}</Text>
        <Text style={styles.date}>{review.date}</Text>
      </View>
    </View>
  );
}
