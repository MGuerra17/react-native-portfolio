import type { StyleProp, ViewStyle } from "react-native";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type ButtonProps = {
  variant?: ButtonVariant;
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  /** When provided, overrides the default brand color (e.g. for module-specific branding like shoe store). */
  brandColor?: string;
  /** When provided, overrides the default text color for the button. */
  textColor?: string;
  /** Optional accessibility label. If not provided, `title` will be used. */
  accessibilityLabel?: string;
  /** testID for E2E / testing. */
  testID?: string;
};
