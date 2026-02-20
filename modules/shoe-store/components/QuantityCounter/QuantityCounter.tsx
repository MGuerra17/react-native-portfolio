import { iconSize } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { getQuantityCounterStyles } from "./QuantityCounter.styles";
import type { QuantityCounterProps } from "./QuantityCounter.types";

export function QuantityCounter({
  quantity,
  onDecrement,
  onIncrement,
}: QuantityCounterProps) {
  const { t, colors, styles } = useShoeStoreUI(getQuantityCounterStyles);
  const canDecrement = quantity > 1;

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          canDecrement ? styles.buttonEnabled : styles.buttonDisabled,
        ]}
        onPress={onDecrement}
        disabled={!canDecrement}
        accessibilityRole="button"
        accessibilityLabel={t("shoeStore.common.decreaseQuantity")}
        accessibilityState={{ disabled: !canDecrement }}
      >
        <Ionicons name="remove" size={iconSize.sm} color={colors.background} />
      </Pressable>
      <Text style={styles.count}>{quantity}</Text>
      <Pressable
        style={[styles.button, styles.buttonEnabled]}
        onPress={onIncrement}
        accessibilityRole="button"
        accessibilityLabel={t("shoeStore.common.increaseQuantity")}
      >
        <Ionicons name="add" size={iconSize.sm} color={colors.background} />
      </Pressable>
    </View>
  );
}
