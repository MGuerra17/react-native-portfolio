import { useUI } from "@/modules/core/hooks/useUI";
import { TextInput } from "react-native";
import { createSearchInputStyles } from "./SearchInput.styles";
import type { SearchInputProps } from "./SearchInput.types";

export function SearchInput({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  ...rest
}: SearchInputProps) {
  const { colors, styles, t } = useUI(createSearchInputStyles);
  const defaultPlaceholder = placeholder ?? t("projects.search.placeholder");

  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={defaultPlaceholder}
      placeholderTextColor={placeholderTextColor ?? colors.secondaryText}
      {...rest}
    />
  );
}
