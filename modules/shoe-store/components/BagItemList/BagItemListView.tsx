import { SwipeableBagItem } from "@/modules/shoe-store/components/SwipeableBagItem";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { useCallback } from "react";
import { ScrollView, Text, View } from "react-native";
import { createBagItemListStyles } from "./BagItemList.styles";
import type { BagItemListProps } from "./BagItemList.types";

export function BagItemListView({
  items,
  favoriteIds,
  onQuantityChange,
  onToggleFavorite,
  onRemove,
}: BagItemListProps) {
  const { t, styles } = useShoeStoreUI(createBagItemListStyles);

  const getIsFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds],
  );

  const hasItems = items.length > 0;

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {hasItems ? (
        items.map((item) => (
          <SwipeableBagItem
            key={item.bagItemId}
            item={item}
            isFavorite={getIsFavorite(item.id)}
            onQuantityChange={(delta) =>
              onQuantityChange(item.bagItemId, delta)
            }
            onToggleFavorite={() => onToggleFavorite(item.id)}
            onRemove={() => onRemove(item.bagItemId)}
          />
        ))
      ) : (
        <View style={styles.emptyMessage}>
          <Text style={styles.emptyText}>{t("shoeStore.bag.empty")}</Text>
        </View>
      )}
    </ScrollView>
  );
}
