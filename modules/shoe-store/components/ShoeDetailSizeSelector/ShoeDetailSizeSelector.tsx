import { Text, View } from "react-native";
import { SizeGrid } from "./SizeGrid";
import { SizeTypeSelector } from "./SizeTypeSelector";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createShoeDetailSizeSelectorStyles } from "./ShoeDetailSizeSelector.styles";
import type { ShoeDetailSizeSelectorProps } from "./ShoeDetailSizeSelector.types";

export function ShoeDetailSizeSelector({
  sizeType,
  setSizeType,
  selectedSize,
  setSelectedSize,
  sizes,
}: ShoeDetailSizeSelectorProps) {
  const { t, styles } = useShoeStoreUI(createShoeDetailSizeSelectorStyles);

  const handleSizeTypeChange = (type: typeof sizeType) => {
    setSizeType(type);
    setSelectedSize(null);
  };

  return (
    <View style={styles.sizeSection}>
      <View style={styles.sizeHeaderRow}>
        <Text style={styles.sizeTitle}>{t("shoeStore.shoeDetail.size")}</Text>
        <SizeTypeSelector
          sizeType={sizeType}
          onSizeTypeChange={handleSizeTypeChange}
        />
      </View>
      <SizeGrid
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeSelect={setSelectedSize}
      />
    </View>
  );
}
