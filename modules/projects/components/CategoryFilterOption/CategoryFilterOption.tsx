import { useUI } from "@/modules/core/hooks/useUI";
import { Pressable, Text } from "react-native";
import { createCategoryFilterOptionStyles } from "./CategoryFilterOption.styles";
import type { CategoryFilterOptionProps } from "./CategoryFilterOption.types";

export function CategoryFilterOption({
  label,
  isSelected,
  onPress,
}: CategoryFilterOptionProps) {
  const { styles, t } = useUI(createCategoryFilterOptionStyles);

  return (
    <Pressable
      style={[styles.button, isSelected && styles.buttonSelected]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${t("projects.accessibility.categoryFilter")} ${label}`}
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
