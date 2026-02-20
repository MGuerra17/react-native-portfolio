import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { INITIAL_VISIBLE_COUNT } from "@/modules/shoe-store/constants/ui";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { ShoeDetailReviewCard } from "@/modules/shoe-store/components/ShoeDetailReviewCard";
import { createShoeDetailAccordionReviewsStyles } from "./ShoeDetailAccordionReviews.styles";
import type { ShoeDetailAccordionReviewsProps } from "./ShoeDetailAccordionReviews.types";

export function ShoeDetailAccordionReviews({
  reviews,
}: ShoeDetailAccordionReviewsProps) {
  const { t, styles } = useShoeStoreUI(createShoeDetailAccordionReviewsStyles);
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll
    ? reviews
    : reviews.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = !showAll && reviews.length > INITIAL_VISIBLE_COUNT;

  if (reviews.length === 0) {
    return (
      <Text style={styles.emptyState}>
        {t("shoeStore.shoeDetail.noReviews")}
      </Text>
    );
  }

  return (
    <View>
      {visibleReviews.map((review) => (
        <ShoeDetailReviewCard
          key={review.id}
          review={review}
          comment={t(review.comment)}
        />
      ))}
      {hasMore && (
        <Pressable
          onPress={() => setShowAll(true)}
          accessibilityRole="button"
          accessibilityLabel={t("shoeStore.shoeDetail.moreReviews")}
        >
          <Text style={styles.moreReviews}>
            {t("shoeStore.shoeDetail.moreReviews")}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
