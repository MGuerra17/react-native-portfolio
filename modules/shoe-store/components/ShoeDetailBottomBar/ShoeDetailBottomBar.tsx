import { iconSize } from "@/constants/theme";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { createShoeDetailBottomBarStyles } from "./ShoeDetailBottomBar.styles";
import type { ShoeDetailBottomBarProps } from "./ShoeDetailBottomBar.types";

export function ShoeDetailBottomBar({
  isFavorite,
  canAddToBag,
  sizeAlreadyInBag,
  onToggleFavorite,
  onAddToBag,
}: ShoeDetailBottomBarProps) {
  const { t, colors, styles } = useShoeStoreUI(createShoeDetailBottomBarStyles);

  return (
    <View style={styles.bottomBar}>
      <Pressable
        style={styles.favoriteButton}
        onPress={onToggleFavorite}
        accessibilityRole="button"
        accessibilityLabel={
          isFavorite
            ? t("shoeStore.shoeDetail.removeFromFavorites")
            : t("shoeStore.shoeDetail.addToFavorites")
        }
        accessibilityState={{ selected: isFavorite }}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={iconSize.sm}
          color={isFavorite ? colors.primary : colors.primaryText}
        />
      </Pressable>
      <Pressable
        style={[styles.pillButton, !canAddToBag && styles.pillButtonDisabled]}
        onPress={onAddToBag}
        disabled={!canAddToBag}
        accessibilityRole="button"
        accessibilityLabel={t("shoeStore.shoeDetail.addToBag")}
        accessibilityState={{ disabled: !canAddToBag }}
        testID="shoe-detail-add-to-bag"
      >
        <Text style={styles.pillButtonText}>
          {canAddToBag
            ? t("shoeStore.shoeDetail.addToBagButton")
            : sizeAlreadyInBag
              ? t("shoeStore.shoeDetail.alreadyInBag")
              : t("shoeStore.shoeDetail.selectSize")}
        </Text>
      </Pressable>
    </View>
  );
}
