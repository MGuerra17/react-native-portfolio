import { Button } from "@/modules/core/components/Button";
import {
  SUCCESS_ICON_COLOR,
  SUCCESS_ICON_SIZE,
} from "@/modules/shoe-store/constants/ui";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Modal, Pressable, Text, View } from "react-native";
import { createCheckoutSuccessBottomSheetStyles } from "./CheckoutSuccessBottomSheet.styles";
import type { CheckoutSuccessBottomSheetProps } from "./CheckoutSuccessBottomSheet.types";

export function CheckoutSuccessBottomSheetView({
  visible,
  onFinish,
}: CheckoutSuccessBottomSheetProps) {
  const { t, styles, colors } = useShoeStoreUI(
    createCheckoutSuccessBottomSheetStyles,
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onFinish}
      accessibilityViewIsModal={true}
    >
      <Pressable
        style={styles.overlay}
        onPress={onFinish}
        accessibilityRole="button"
        accessibilityLabel={t("shoeStore.bag.finish")}
      >
        <Pressable
          style={styles.sheet}
          onPress={(e) => e.stopPropagation()}
          accessibilityRole="none"
          accessibilityViewIsModal={false}
        >
          <View style={styles.headerRow}>
            <View style={styles.handle} />
          </View>

          <View style={styles.iconWrapper}>
            <Ionicons
              name="checkmark-circle"
              size={SUCCESS_ICON_SIZE}
              color={SUCCESS_ICON_COLOR}
            />
          </View>

          <Text style={styles.message}>
            {t("shoeStore.bag.checkoutSuccess")}
          </Text>

          <View style={styles.buttonWrapper}>
            <Button
              title={t("shoeStore.bag.finish")}
              onPress={onFinish}
              brandColor={colors.primaryText}
              textColor={colors.background}
              testID="checkout-success-finish"
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
