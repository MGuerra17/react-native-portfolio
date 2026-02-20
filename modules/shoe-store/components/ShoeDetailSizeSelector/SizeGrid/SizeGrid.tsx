import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { ScrollView } from "react-native";
import { SizeBox } from "@/modules/shoe-store/components/ShoeDetailSizeSelector/SizeBox";
import { createSizeGridStyles } from "./SizeGrid.styles";
import type { SizeGridProps } from "./SizeGrid.types";

export function SizeGrid({ sizes, selectedSize, onSizeSelect }: SizeGridProps) {
  const { styles } = useShoeStoreUI(createSizeGridStyles);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.sizeGrid}
    >
      {sizes.map(({ size, stock }) => {
        const isSelected = selectedSize === size;
        return (
          <SizeBox
            key={size}
            size={size}
            stock={stock}
            isSelected={isSelected}
            onPress={() => {
              if (stock > 0) {
                onSizeSelect(isSelected ? null : size);
              }
            }}
          />
        );
      })}
    </ScrollView>
  );
}
