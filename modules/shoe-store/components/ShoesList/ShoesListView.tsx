import { FlatList, RefreshControl, View } from "react-native";
import { SKELETON_ITEM_COUNT } from "@/modules/shoe-store/constants/ui";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { ShoePreviewCard } from "@/modules/shoe-store/components/ShoePreviewCard";
import { ShoePreviewCardSkeleton } from "@/modules/shoe-store/components/ShoePreviewCardSkeleton";
import { createShoesListStyles } from "./ShoesList.styles";
import type { ShoesListProps } from "./ShoesList.types";

const skeletonData = Array.from(
  { length: SKELETON_ITEM_COUNT },
  (_, i) => ({
    id: `skeleton-${i}`,
  }),
);

export function ShoesListView({
  shoes,
  isLoading,
  refreshing,
  onRefresh,
  onShoePress,
  getIsFavorite,
  onToggleFavorite,
  keyboardShouldPersistTaps,
}: ShoesListProps) {
  const { styles, colors, layout } = useShoeStoreUI(createShoesListStyles);
  const numColumns = layout.isTablet ? 2 : 1;

  const refreshControl =
    onRefresh != null ? (
      <RefreshControl
        refreshing={refreshing ?? false}
        onRefresh={onRefresh}
        tintColor={colors.primaryText}
      />
    ) : undefined;

  if (isLoading) {
    return (
      <View style={styles.container}>
        <FlatList
          data={skeletonData}
          numColumns={numColumns}
          key={numColumns}
          renderItem={() => (
            <View style={styles.itemWrapper}>
              <ShoePreviewCardSkeleton />
            </View>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={shoes}
        numColumns={numColumns}
        key={numColumns}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        refreshControl={refreshControl}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <ShoePreviewCard
              shoe={item}
              isFavorite={getIsFavorite?.(item.id) ?? false}
              onLike={
                onToggleFavorite ? () => onToggleFavorite(item.id) : undefined
              }
              onPress={onShoePress}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
