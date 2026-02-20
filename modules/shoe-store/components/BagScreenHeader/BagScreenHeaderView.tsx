import { iconSize } from "@/constants/theme";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, Text, View } from "react-native";
import { getBagScreenHeaderStyles } from "./BagScreenHeader.styles";
import type { BagScreenHeaderProps } from "./BagScreenHeader.types";

export function BagScreenHeaderView({
  onBack,
  itemCount,
}: BagScreenHeaderProps) {
  const { t, colors, styles } = useShoeStoreUI(getBagScreenHeaderStyles);

  const itemsLabel =
    itemCount === 1
      ? t("shoeStore.bag.oneItem")
      : `${itemCount} ${t("shoeStore.bag.items")}`;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onBack}
        hitSlop={styles.hitSlop}
        accessibilityRole="button"
        accessibilityLabel={t("shoeStore.bag.goBack")}
        style={styles.backButton}
      >
        <Feather
          name="arrow-left"
          size={iconSize.sm}
          color={colors.primaryText}
        />
      </Pressable>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{t("shoeStore.bag.title")}</Text>
        <Text style={styles.itemCount}>{itemsLabel}</Text>
      </View>
    </View>
  );
}
