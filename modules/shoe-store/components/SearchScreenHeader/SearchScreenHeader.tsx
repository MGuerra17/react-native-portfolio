import { iconSize } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { SearchInput } from "@/modules/shoe-store/components/SearchInput";
import { createSearchScreenHeaderStyles } from "./SearchScreenHeader.styles";
import type { SearchScreenHeaderProps } from "./SearchScreenHeader.types";

export function SearchScreenHeader({
  query,
  onQueryChange,
  onBack,
  placeholder,
}: SearchScreenHeaderProps) {
  const { t, styles, colors } = useShoeStoreUI(createSearchScreenHeaderStyles);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onBack}
        hitSlop={styles.hitSlop}
        style={styles.backButton}
        accessibilityRole="button"
        accessibilityLabel={t("shoeStore.common.goBack")}
      >
        <Feather
          name="arrow-left"
          size={iconSize.sm}
          color={colors.primaryText}
        />
      </Pressable>
      <View style={styles.inputWrapper}>
        <SearchInput
          value={query}
          onChangeText={onQueryChange}
          placeholder={placeholder}
          onClose={onBack}
          autoFocus
        />
      </View>
    </View>
  );
}
