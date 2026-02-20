import { iconSize } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fragment } from "react";
import { Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createShoeDetailProductInfoStyles } from "./ShoeDetailProductInfo.styles";
import type { ShoeDetailProductInfoProps } from "./ShoeDetailProductInfo.types";

export function ShoeDetailProductInfo({
  rating,
  name,
  price,
  gender,
}: ShoeDetailProductInfoProps) {
  const { styles, colors, t } = useShoeStoreUI(
    createShoeDetailProductInfoStyles,
  );

  return (
    <Fragment>
      <View style={[styles.row, styles.genderRatingRow]}>
        <Text style={styles.genderText}>{t(`shoeStore.filter.${gender}`)}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={iconSize.xs} color={colors.primary} />
          <Text style={styles.ratingText}>({rating})</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.nameText} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </Fragment>
  );
}
