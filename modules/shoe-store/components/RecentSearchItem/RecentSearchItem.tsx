import { iconSize } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createRecentSearchItemStyles } from "./RecentSearchItem.styles";
import type { RecentSearchItemProps } from "./RecentSearchItem.types";

export function RecentSearchItem({
  query,
  onPress,
}: RecentSearchItemProps) {
  const { t, styles, colors } = useShoeStoreUI(createRecentSearchItemStyles);

  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={t("shoeStore.common.searchFor").replace(
        "{query}",
        query,
      )}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name="time-outline"
          size={iconSize.sm}
          color={colors.primaryText}
        />
      </View>
      <Text style={styles.text} numberOfLines={1}>
        {query}
      </Text>
    </Pressable>
  );
}
