import { Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { getBagTotalRowStyles } from "./BagTotalRow.styles";
import type { BagTotalRowProps } from "./BagTotalRow.types";

export function BagTotalRow({ total }: BagTotalRowProps) {
  const { t, styles } = useShoeStoreUI(getBagTotalRowStyles);

  return (
    <View style={styles.row}>
      <Text style={styles.label}>{t("shoeStore.bag.total")}</Text>
      <Text style={styles.value}>{total}</Text>
    </View>
  );
}
