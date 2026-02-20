import { Pressable, Text } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createGenderFilterOptionStyles } from "./GenderFilterOption.styles";
import type { GenderFilterOptionProps } from "./GenderFilterOption.types";

export function GenderFilterOption({
  label,
  isSelected,
  onPress,
}: GenderFilterOptionProps) {
  const { styles } = useShoeStoreUI(createGenderFilterOptionStyles);

  return (
    <Pressable
      style={[styles.button, isSelected && styles.buttonSelected]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected: isSelected }}
    >
      <Text
        style={[styles.buttonText, isSelected && styles.buttonTextSelected]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </Pressable>
  );
}
