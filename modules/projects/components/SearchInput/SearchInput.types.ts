import type { TextInputProps } from "react-native";

export type SearchInputProps = TextInputProps & {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
};
