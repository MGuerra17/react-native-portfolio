import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { Pressable, Text, View } from "react-native";
import { createSizeTypeSelectorStyles } from "./SizeTypeSelector.styles";
import type { SizeTypeSelectorProps } from "./SizeTypeSelector.types";

export function SizeTypeSelector({
  sizeType,
  onSizeTypeChange,
}: SizeTypeSelectorProps) {
  const { t, styles } = useShoeStoreUI(createSizeTypeSelectorStyles);

  return (
    <View style={styles.sizeTypeRow}>
      {(["US", "UK", "EU"] as const).map((type) => (
        <Pressable
          key={type}
          style={styles.sizeTypeButton}
          onPress={() => onSizeTypeChange(type)}
          accessibilityRole="button"
          accessibilityLabel={`${t("shoeStore.shoeDetail.sizeTypeLabel")} ${t(`shoeStore.shoeDetail.sizeType${type}`)}`}
        >
          <Text
            style={[
              styles.sizeTypeText,
              sizeType === type && styles.sizeTypeTextActive,
            ]}
          >
            {t(`shoeStore.shoeDetail.sizeType${type}`)}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
