import { iconSize } from "@/constants/theme";
import { Button } from "@/modules/core/components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Modal, Pressable, Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import {
  PRICE_FILTER_MAX,
  PRICE_FILTER_MIN,
  PRICE_FILTER_STEP,
} from "@/modules/shoe-store/types/filter.types";
import { GenderFilterOptions } from "@/modules/shoe-store/components/GenderFilterOptions";
import { PriceRangeSlider } from "@/modules/shoe-store/components/PriceRangeSlider";
import { createFilterBottomSheetStyles } from "./FilterBottomSheet.styles";
import type { FilterBottomSheetProps } from "./FilterBottomSheet.types";
import { formatPriceLabel } from "./FilterBottomSheet.utils";

export function FilterBottomSheetView({
  isOpen,
  onClose,
  pendingGender,
  onSelectGender,
  pendingPriceRange,
  onPriceRangeChange,
  onReset,
  onApply,
}: FilterBottomSheetProps) {
  const { t, styles, colors } = useShoeStoreUI(createFilterBottomSheetStyles);

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
          <View style={styles.headerRow}>
            <View style={styles.handle} />
          </View>

          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>{t("shoeStore.filter.categoryLabel")}</Text>
            <Pressable
              style={styles.resetButton}
              onPress={onReset}
              accessibilityRole="button"
              accessibilityLabel={t("shoeStore.filter.reset")}
            >
              <Ionicons
                name="refresh"
                size={iconSize.xs}
                color={colors.secondaryText}
              />
              <Text style={styles.resetButtonText}>{t("shoeStore.filter.reset")}</Text>
            </Pressable>
          </View>

          <GenderFilterOptions
            selectedGender={pendingGender}
            onSelect={onSelectGender}
          />

          <Text style={styles.sectionTitle}>{t("shoeStore.filter.priceLabel")}</Text>

          <Text style={styles.priceRangeLabel}>
            {formatPriceLabel(pendingPriceRange.min)} -{" "}
            {formatPriceLabel(pendingPriceRange.max)}
          </Text>

          <PriceRangeSlider
            minValue={PRICE_FILTER_MIN}
            maxValue={PRICE_FILTER_MAX}
            lowValue={pendingPriceRange.min}
            highValue={pendingPriceRange.max}
            step={PRICE_FILTER_STEP}
            onValueChange={(low, high) =>
              onPriceRangeChange({ min: low, max: high })
            }
          />

          <View style={styles.buttonsContainer}>
            <Button
              onPress={onClose}
              variant="ghost"
              title={t("shoeStore.filter.cancel")}
              brandColor={colors.primaryText}
            />
            <Button
              onPress={onApply}
              variant="primary"
              title={t("shoeStore.filter.apply")}
              brandColor={colors.primaryText}
              textColor={colors.background}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
