import { iconSize } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import { useRef } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { BagItemCard } from "@/modules/shoe-store/components/BagItemCard";
import { getSwipeableBagItemStyles } from "./SwipeableBagItem.styles";
import type { SwipeableBagItemProps } from "./SwipeableBagItem.types";

export function SwipeableBagItem({
  item,
  isFavorite,
  onQuantityChange,
  onToggleFavorite,
  onRemove,
}: SwipeableBagItemProps) {
  const { t, colors, styles } = useShoeStoreUI(getSwipeableBagItemStyles);
  const openedOnceRef = useRef(false);

  const handleSwipeableOpen = () => {
    if (openedOnceRef.current) {
      onRemove();
    } else {
      openedOnceRef.current = true;
    }
  };

  const handleSwipeableClose = () => {
    openedOnceRef.current = false;
  };

  const renderRightActions = () => (
    <View style={styles.deleteAction}>
      <RectButton
        style={styles.deleteButton}
        onPress={onRemove}
        accessibilityRole="button"
        accessibilityLabel={t("shoeStore.bag.removeItem")}
      >
        <Feather name="trash" size={iconSize.sm} color={colors.primary} />
      </RectButton>
    </View>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      friction={2}
      rightThreshold={40}
      onSwipeableOpen={handleSwipeableOpen}
      onSwipeableClose={handleSwipeableClose}
    >
      <BagItemCard
        item={item}
        isFavorite={isFavorite}
        onQuantityChange={onQuantityChange}
        onToggleFavorite={onToggleFavorite}
      />
    </Swipeable>
  );
}
