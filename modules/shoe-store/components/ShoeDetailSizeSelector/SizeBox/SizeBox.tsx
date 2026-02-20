import { Pressable, Text } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createSizeBoxStyles } from "./SizeBox.styles";
import type { SizeBoxProps } from "./SizeBox.types";

export function SizeBox({
  size,
  stock,
  isSelected,
  onPress,
}: SizeBoxProps) {
  const { t, styles } = useShoeStoreUI(createSizeBoxStyles);
  const isDisabled = stock === 0;

  return (
    <Pressable
      style={[
        styles.sizeBox,
        isSelected && styles.sizeBoxSelected,
        isDisabled && styles.sizeBoxDisabled,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={`${t("shoeStore.shoeDetail.size")} ${size}${isDisabled ? `, ${t("shoeStore.shoeDetail.outOfStock")}` : ""}`}
      accessibilityState={{
        selected: isSelected,
        disabled: isDisabled,
      }}
      testID={`shoe-detail-size-${size}`}
    >
      <Text
        style={[
          styles.sizeBoxText,
          isSelected && styles.sizeBoxTextSelected,
          isDisabled && styles.sizeBoxTextDisabled,
        ]}
      >
        {size}
      </Text>
    </Pressable>
  );
}
