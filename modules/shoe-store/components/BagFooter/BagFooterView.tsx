import { BagTotalRow } from "@/modules/shoe-store/components/BagTotalRow";
import { Button } from "@/modules/core/components/Button";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { View } from "react-native";
import { createBagFooterStyles } from "./BagFooter.styles";
import type { BagFooterProps } from "./BagFooter.types";

export function BagFooterView({ total, onCheckoutPress }: BagFooterProps) {
  const { t, styles, colors } = useShoeStoreUI(createBagFooterStyles);

  return (
    <View style={styles.footer}>
      <BagTotalRow total={total} />
      <Button
        title={t("shoeStore.bag.checkout")}
        onPress={onCheckoutPress}
        brandColor={colors.primaryText}
        textColor={colors.background}
        testID="bag-checkout"
      />
    </View>
  );
}

