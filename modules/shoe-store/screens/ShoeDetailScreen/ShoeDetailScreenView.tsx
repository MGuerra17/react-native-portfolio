import { ShoeDetailAccordion } from "@/modules/shoe-store/components/ShoeDetailAccordion";
import { ShoeDetailBottomBar } from "@/modules/shoe-store/components/ShoeDetailBottomBar";
import { ShoeDetailCarousel } from "@/modules/shoe-store/components/ShoeDetailCarousel";
import { ShoeDetailErrorScreen } from "@/modules/shoe-store/components/ShoeDetailErrorScreen";
import { ShoeDetailProductInfo } from "@/modules/shoe-store/components/ShoeDetailProductInfo";
import { ShoeDetailScreenSkeleton } from "@/modules/shoe-store/components/ShoeDetailScreenSkeleton";
import { ShoeDetailSizeSelector } from "@/modules/shoe-store/components/ShoeDetailSizeSelector";
import { ShoeStoreHeader } from "@/modules/shoe-store/components/ShoeStoreHeader";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { getSizesForType } from "@/modules/shoe-store/utils/shoe";
import { RefreshControl, ScrollView, View } from "react-native";
import { createShoeDetailScreenStyles } from "./ShoeDetailScreen.styles";
import type { ShoeDetailScreenProps } from "./ShoeDetailScreen.types";

export function ShoeDetailScreenView({
  shoe,
  isLoading,
  isRefreshing,
  onRefresh,
  sizeType,
  setSizeType,
  selectedSize,
  setSelectedSize,
  onAddToBag,
  onToggleFavorite,
  isFavorite,
  canAddToBag,
  sizeAlreadyInBag,
  error,
  onGoBack,
}: ShoeDetailScreenProps) {
  const { t, styles, colors } = useShoeStoreUI(createShoeDetailScreenStyles);
  const sizes = shoe ? getSizesForType(shoe, sizeType) : [];

  const refreshControl =
    onRefresh != null ? (
      <RefreshControl
        refreshing={isRefreshing ?? false}
        onRefresh={onRefresh}
        tintColor={colors.primaryText}
      />
    ) : undefined;

  if (isLoading || isRefreshing) {
    return <ShoeDetailScreenSkeleton />;
  }

  if (error || !shoe) {
    return <ShoeDetailErrorScreen onGoBack={onGoBack} />;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.headerWrapper}>
        <ShoeStoreHeader />
      </View>

      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={refreshControl}
      >
        <ShoeDetailCarousel images={shoe.images} />

        <View style={styles.content}>
          <ShoeDetailProductInfo
            gender={shoe.gender}
            rating={shoe.rating}
            name={shoe.name}
            price={shoe.price}
          />

          <ShoeDetailSizeSelector
            sizeType={sizeType}
            setSizeType={setSizeType}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            sizes={sizes}
          />

          <ShoeDetailAccordion
            description={t(shoe.description)}
            deliveryAndReturnsPolicy={
              shoe.deliveryAndReturnsPolicy
                ? t(shoe.deliveryAndReturnsPolicy)
                : ""
            }
            reviews={shoe.reviews}
          />
        </View>
      </ScrollView>

      <ShoeDetailBottomBar
        isFavorite={isFavorite}
        canAddToBag={canAddToBag}
        sizeAlreadyInBag={sizeAlreadyInBag}
        onToggleFavorite={onToggleFavorite}
        onAddToBag={onAddToBag}
      />
    </View>
  );
}
