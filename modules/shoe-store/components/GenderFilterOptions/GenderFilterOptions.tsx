import { View } from "react-native";
import { GenderFilterOption } from "@/modules/shoe-store/components/GenderFilterOption";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createGenderFilterOptionsStyles } from "./GenderFilterOptions.styles";
import type { GenderFilterOptionsProps } from "./GenderFilterOptions.types";
import { GENDER_OPTIONS, getGenderLabel } from "./GenderFilterOptions.utils";

export function GenderFilterOptions({
  selectedGender,
  onSelect,
}: GenderFilterOptionsProps) {
  const { t, styles } = useShoeStoreUI(createGenderFilterOptionsStyles);

  return (
    <View style={styles.genderGrid}>
      {[GENDER_OPTIONS.slice(0, 2), GENDER_OPTIONS.slice(2, 4)].map(
        (row, rowIndex) => (
          <View key={rowIndex} style={styles.genderGridRow}>
            {row.map((value) => {
              const isSelected = selectedGender === value;
              return (
                <GenderFilterOption
                  key={value ?? "all"}
                  label={getGenderLabel(value, t)}
                  isSelected={isSelected}
                  onPress={() => onSelect(value)}
                />
              );
            })}
          </View>
        )
      )}
    </View>
  );
}
