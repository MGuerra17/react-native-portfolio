import { iconSize } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { StoreIcon } from "@/modules/shoe-store/components/StoreIcon";
import { getShoeStoreHeaderStyles } from "./ShoeStoreHeader.styles";
import type { ShoeStoreHeaderProps } from "./ShoeStoreHeader.types";

export function ShoeStoreHeaderView({
  onBack,
  onBagPress,
  bagItemCount,
}: ShoeStoreHeaderProps) {
  const { t, styles, colors } = useShoeStoreUI(getShoeStoreHeaderStyles);
  const showBadge = bagItemCount > 0;
  const badgeLabel = bagItemCount > 99 ? "99+" : String(bagItemCount);

  const bagAccessibilityLabel = showBadge
    ? t("shoeStore.bag.bagWithItems").replace("{count}", String(bagItemCount))
    : t("shoeStore.bag.bag");

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onBack}
        hitSlop={styles.hitSlop}
        accessibilityRole="button"
        accessibilityLabel={t("shoeStore.common.goBack")}
        style={styles.backButton}
      >
        <Feather
          name="arrow-left"
          size={iconSize.sm}
          color={colors.primaryText}
        />
      </Pressable>

      <StoreIcon size={40} color={colors.primaryText} />

      <Pressable
        style={styles.storeButton}
        hitSlop={styles.hitSlop}
        onPress={onBagPress}
        accessibilityRole="button"
        accessibilityLabel={bagAccessibilityLabel}
        testID="shoe-store-bag-button"
      >
        <Ionicons name="bag" size={iconSize.sm} color={colors.background} />
        {showBadge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badgeLabel}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

