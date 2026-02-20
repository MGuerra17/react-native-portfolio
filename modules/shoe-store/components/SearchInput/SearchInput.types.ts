import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import type { TextInputProps } from "react-native";

export type SearchInputProps = TextInputProps & {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  onClose?: () => void;
};
