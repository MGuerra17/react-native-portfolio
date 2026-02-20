import { iconSize } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createFilterButtonStyles } from "./FilterButton.styles";
import type { FilterButtonProps } from "./FilterButton.types";

export function FilterButton({
  onPress,
  activeFilterCount = 0,
}: FilterButtonProps) {
  const { t, styles, colors } = useShoeStoreUI(createFilterButtonStyles);
  const showBadge = activeFilterCount > 0;

  const accessibilityLabel =
    activeFilterCount > 0
      ? t("shoeStore.common.filterWithCount").replace(
          "{count}",
          String(activeFilterCount),
        )
      : t("shoeStore.common.filter");

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <Ionicons
        name="filter"
        size={iconSize.sm}
        color={colors.primaryText}
      />
      {showBadge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {activeFilterCount > 9 ? "9+" : activeFilterCount}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
