import { BagFooter } from "@/modules/shoe-store/components/BagFooter";
import { BagItemList } from "@/modules/shoe-store/components/BagItemList";
import { BagScreenHeader } from "@/modules/shoe-store/components/BagScreenHeader";
import { CheckoutSuccessBottomSheet } from "@/modules/shoe-store/components/CheckoutSuccessBottomSheet";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { Fragment } from "react";
import { View } from "react-native";
import { createBagScreenStyles } from "./BagScreen.styles";

export function BagScreen() {
  const { styles } = useShoeStoreUI(createBagScreenStyles);

  return (
    <Fragment>
      <View style={styles.screen}>
        <View style={styles.header}>
          <BagScreenHeader />
        </View>

        <BagItemList />

        <BagFooter />
      </View>
      <CheckoutSuccessBottomSheet />
    </Fragment>
  );
}
