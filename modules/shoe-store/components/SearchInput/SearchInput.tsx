import { iconSize } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, TextInput, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createSearchInputStyles } from "./SearchInput.styles";
import type { SearchInputProps } from "./SearchInput.types";

export function SearchInput({
  value,
  onChangeText,
  placeholder,
  onClose,
  placeholderTextColor,
  ...rest
}: SearchInputProps) {
  const { t, styles, colors } = useShoeStoreUI(createSearchInputStyles);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor ?? colors.secondaryText}
        {...rest}
        testID="search-input"
      />
      {onClose && (
        <Pressable
          style={styles.closeButton}
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel={t("shoeStore.common.closeSearch")}
        >
          <Ionicons
            name="close"
            size={iconSize.sm}
            color={colors.primaryText}
          />
        </Pressable>
      )}
    </View>
  );
}
