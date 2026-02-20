import { Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { QuantityCounter } from "@/modules/shoe-store/components/QuantityCounter";
import { getBagItemProductInfoStyles } from "./BagItemProductInfo.styles";
import type { BagItemProductInfoProps } from "./BagItemProductInfo.types";

export function BagItemProductInfo({
  name,
  price,
  quantity,
  sizeType,
  size,
  onQuantityChange,
}: BagItemProductInfoProps) {
  const { styles } = useShoeStoreUI(getBagItemProductInfoStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.size}>
        {sizeType} {size}
      </Text>
      <Text style={styles.price}>{price}</Text>
      <QuantityCounter
        quantity={quantity}
        onDecrement={() => onQuantityChange(-1)}
        onIncrement={() => onQuantityChange(1)}
      />
    </View>
  );
}
