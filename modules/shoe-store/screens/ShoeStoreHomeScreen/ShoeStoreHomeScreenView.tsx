import { iconSize } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FilterButton } from "@/modules/shoe-store/components/FilterButton";
import { FilterBottomSheet } from "@/modules/shoe-store/components/FilterBottomSheet";
import { ShoeStoreHeader } from "@/modules/shoe-store/components/ShoeStoreHeader";
import { ShoesList } from "@/modules/shoe-store/components/ShoesList";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createShoeStoreHomeScreenStyles } from "./ShoeStoreHomeScreen.styles";
import type { ShoeStoreHomeScreenProps } from "./ShoeStoreHomeScreen.types";

export function ShoeStoreHomeScreenView({
  shoes,
  isLoading,
  isRefreshing,
  onRefresh,
  activeFilterCount,
  selectedGender,
  priceRange,
  onApplyFilter,
  onSearchPress,
  onFilterPress,
}: ShoeStoreHomeScreenProps) {
  const { t, colors, styles } = useShoeStoreUI(createShoeStoreHomeScreenStyles);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.screen} testID="shoe-store-home">
        <ShoeStoreHeader />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {t("shoeStore.home.sectionTitle")}
          </Text>
          <View style={styles.actions}>
            <Pressable
              style={styles.actionButton}
              onPress={onSearchPress}
              accessibilityRole="button"
              accessibilityLabel={t("shoeStore.common.search")}
              testID="shoe-store-search-button"
            >
              <Ionicons
                name="search"
                size={iconSize.sm}
                color={colors.primaryText}
              />
            </Pressable>
            <FilterButton
              onPress={onFilterPress}
              activeFilterCount={activeFilterCount}
            />
          </View>
        </View>
        <ShoesList
          shoes={shoes}
          isLoading={isLoading}
          isRefreshing={isRefreshing}
          onRefresh={onRefresh}
          keyboardShouldPersistTaps="never"
        />
        <FilterBottomSheet
          selectedGender={selectedGender}
          priceRange={priceRange}
          onApply={onApplyFilter}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
