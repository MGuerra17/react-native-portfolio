import { iconSize } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { createAccordionItemStyles } from "./AccordionItem.styles";
import type { AccordionItemProps } from "./AccordionItem.types";

export function AccordionItem({
  title,
  expanded,
  onToggle,
  children,
}: AccordionItemProps) {
  const { styles, colors } = useShoeStoreUI(createAccordionItemStyles);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.header}
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityLabel={title}
        accessibilityState={{ expanded }}
      >
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={iconSize.sm}
          color={colors.primaryText}
        />
      </Pressable>
      {expanded && <View style={styles.content}>{children}</View>}
    </View>
  );
}
