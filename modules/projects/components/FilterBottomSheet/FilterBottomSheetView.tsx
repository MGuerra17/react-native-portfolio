import { Button } from "@/modules/core/components/Button";
import { useUI } from "@/modules/core/hooks/useUI";
import { Modal, Pressable, Text, View } from "react-native";
import { CategoryFilterOptions } from "@/modules/projects/components/CategoryFilterOptions";
import { createFilterBottomSheetStyles } from "./FilterBottomSheet.styles";
import type { FilterBottomSheetProps } from "./FilterBottomSheet.types";

export function FilterBottomSheetView({
  isOpen,
  onClose,
  pendingCategory,
  onSelectCategory,
  onApply,
}: FilterBottomSheetProps) {
  const { t, styles } = useUI(createFilterBottomSheetStyles);

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      accessibilityViewIsModal={true}
    >
      <Pressable
        style={styles.overlay}
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel={t("projects.filter.closeFilterSheet")}
      >
        <Pressable
          style={styles.sheet}
          onPress={(e) => e.stopPropagation()}
          accessible={false}
        >
          <View style={styles.handle} />

          <Text style={styles.sectionTitle}>
            {t("projects.filter.categoryLabel")}
          </Text>

          <CategoryFilterOptions
            selectedCategory={pendingCategory}
            onSelect={onSelectCategory}
          />

          <View style={styles.buttonsContainer}>
            <Button
              onPress={() => onClose()}
              variant="ghost"
              title={t("projects.filter.cancel")}
            />
            <Button
              onPress={onApply}
              variant="primary"
              title={t("projects.filter.apply")}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
