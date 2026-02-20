import { Pressable, Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createRecentSearchesListStyles } from "./RecentSearchesList.styles";
import type { RecentSearchesListProps } from "./RecentSearchesList.types";

export function RecentSearchesList({
  recentSearches,
  onSelectSearch,
}: RecentSearchesListProps) {
  const { t, styles } = useShoeStoreUI(createRecentSearchesListStyles);

  if (recentSearches.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {recentSearches.map((query) => (
          <Pressable
            key={query}
            style={styles.item}
            onPress={() => onSelectSearch(query)}
            accessibilityRole="button"
            accessibilityLabel={t("shoeStore.common.searchFor").replace(
              "{query}",
              query,
            )}
          >
            <Text style={styles.itemText} numberOfLines={1}>
              {query}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
