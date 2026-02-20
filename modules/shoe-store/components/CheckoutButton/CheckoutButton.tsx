import { Pressable, Text } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { getCheckoutButtonStyles } from "./CheckoutButton.styles";

type CheckoutButtonProps = {
  onPress?: () => void;
};

export function CheckoutButton({ onPress }: CheckoutButtonProps) {
  const { t, styles } = useShoeStoreUI(getCheckoutButtonStyles);

  return (
<Pressable
    style={styles.button}
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={t("shoeStore.bag.checkout")}
    testID="bag-checkout"
  >
      <Text style={styles.buttonText}>{t("shoeStore.bag.checkout")}</Text>
    </Pressable>
  );
}
