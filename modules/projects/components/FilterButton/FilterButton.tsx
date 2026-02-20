import { iconSize } from "@/constants/theme";
import { useUI } from "@/modules/core/hooks/useUI";
import Octicons from "@expo/vector-icons/Octicons";
import { Pressable, Text, View } from "react-native";
import { createFilterButtonStyles } from "./FilterButton.styles";
import type { FilterButtonProps } from "./FilterButton.types";

export function FilterButton({
  onPress,
  activeFilterCount = 0,
}: FilterButtonProps) {
  const { colors, styles, t } = useUI(createFilterButtonStyles);
  const showBadge = activeFilterCount > 0;

  const accessibilityLabel =
    activeFilterCount > 0
      ? `${t("projects.filter.filterButtonWithCount")} ${activeFilterCount}`
      : t("projects.filter.filterButton");

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={t("projects.filter.openFilterSheet")}
    >
      <Octicons name="filter" size={iconSize.xs} color={colors.icon} />
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
