import { iconSize } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { BagItemProductInfo } from "@/modules/shoe-store/components/BagItemProductInfo";
import { getBagItemCardStyles } from "./BagItemCard.styles";
import type { BagItemCardProps } from "./BagItemCard.types";

export function BagItemCard({
  item,
  isFavorite,
  onQuantityChange,
  onToggleFavorite,
}: BagItemCardProps) {
  const { t, colors, styles } = useShoeStoreUI(getBagItemCardStyles);

  return (
    <View style={styles.card} testID={`bag-item-${item.bagItemId}`}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.image}
          contentFit="contain"
          accessibilityLabel={`${t("shoeStore.common.shoeImage")}: ${item.name}`}
        />
      </View>
      <View style={styles.content}>
        <BagItemProductInfo
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          sizeType={item.sizeType}
          size={item.size}
          onQuantityChange={onQuantityChange}
        />
      </View>
      <Pressable
        style={styles.favoriteButton}
        onPress={onToggleFavorite}
        accessibilityRole="button"
        accessibilityLabel={
          isFavorite
            ? t("shoeStore.common.removeFromFavorites")
            : t("shoeStore.common.addToFavorites")
        }
        accessibilityState={{ selected: isFavorite }}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={iconSize.sm}
          color={isFavorite ? colors.primary : colors.primaryText}
        />
      </Pressable>
    </View>
  );
}
