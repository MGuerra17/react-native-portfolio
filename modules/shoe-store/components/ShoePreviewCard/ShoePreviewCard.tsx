import { iconSize } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createShoePreviewCardStyles } from "./ShoePreviewCard.styles";
import type { ShoePreviewCardProps } from "./ShoePreviewCard.types";

export function ShoePreviewCard({
  shoe,
  isFavorite = false,
  onLike,
  onPress,
}: ShoePreviewCardProps) {
  const { t, styles, colors } = useShoeStoreUI(createShoePreviewCardStyles);

  return (
<Pressable
    style={styles.card}
    onPress={() => onPress?.(shoe)}
    accessibilityRole="button"
    accessibilityLabel={shoe.name}
    testID={`shoe-preview-${shoe.id}`}
  >
      <Pressable
        style={styles.likeButton}
        onPress={(e) => {
          e?.stopPropagation?.();
          onLike?.();
        }}
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
      <View style={styles.imageContainer}>
        <Image
          source={shoe.image}
          style={styles.image}
          contentFit="contain"
          accessibilityLabel={`${t("shoeStore.common.shoeImage")}: ${shoe.name}`}
        />
      </View>
      <Text style={styles.name}>{shoe.name}</Text>
      <Text style={styles.price}>{shoe.price}</Text>
    </Pressable>
  );
}
