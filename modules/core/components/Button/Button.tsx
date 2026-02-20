import { useUI } from "@/modules/core/hooks/useUI";
import { Pressable, Text } from "react-native";
import { createButtonStyles } from "./Button.styles";
import type { ButtonProps, ButtonVariant } from "./Button.types";

const TEXT_STYLE_MAP: Record<
  ButtonVariant,
  "primaryText" | "secondaryText" | "outlineText" | "ghostText"
> = {
  primary: "primaryText",
  secondary: "secondaryText",
  outline: "outlineText",
  ghost: "ghostText",
};

const VARIANT_STYLE_MAP: Record<
  ButtonVariant,
  "primary" | "secondary" | "outline" | "ghost"
> = {
  primary: "primary",
  secondary: "secondary",
  outline: "outline",
  ghost: "ghost",
};

export function Button({
  variant = "primary",
  title,
  onPress,
  disabled = false,
  style,
  brandColor,
  textColor,
  accessibilityLabel,
  testID,
}: ButtonProps) {
  const { styles } = useUI((context) =>
    createButtonStyles(context, brandColor)
  );
  const variantStyle = VARIANT_STYLE_MAP[variant];
  const textStyleKey = TEXT_STYLE_MAP[variant];

  return (
    <Pressable
      style={[
        styles.container,
        styles[variantStyle],
        disabled && { opacity: 0.5 },
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      testID={testID}
    >
      <Text
        style={[
          styles.text,
          styles[textStyleKey],
          textColor && { color: textColor },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
