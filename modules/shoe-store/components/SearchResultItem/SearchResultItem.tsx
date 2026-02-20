import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createSearchResultItemStyles } from "./SearchResultItem.styles";
import type { SearchResultItemProps } from "./SearchResultItem.types";

export function SearchResultItem({ shoe, onPress }: SearchResultItemProps) {
  const { t, styles } = useShoeStoreUI(createSearchResultItemStyles);

  return (
<Pressable
    style={styles.container}
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={shoe.name}
    testID={`search-result-${shoe.id}`}
  >
      <View style={styles.imageContainer}>
        <Image
          source={shoe.image}
          style={styles.image}
          contentFit="cover"
          accessibilityLabel={`${t("shoeStore.common.shoeImage")}: ${shoe.name}`}
        />
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {shoe.name}
      </Text>
    </Pressable>
  );
}
