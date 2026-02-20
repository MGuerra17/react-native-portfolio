import { iconSize } from "@/constants/theme";
import { ShoeStoreHeader } from "@/modules/shoe-store/components/ShoeStoreHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { Button } from "@/modules/core/components/Button";
import { createShoeDetailErrorScreenStyles } from "./ShoeDetailErrorScreen.styles";
import type { ShoeDetailErrorScreenProps } from "./ShoeDetailErrorScreen.types";

export function ShoeDetailErrorScreen({
  onGoBack,
  onGoHome,
}: ShoeDetailErrorScreenProps) {
  const { t, styles, colors } = useShoeStoreUI(
    createShoeDetailErrorScreenStyles,
  );

  return (
    <View style={styles.screen}>
      <View style={styles.headerWrapper}>
        <ShoeStoreHeader />
      </View>

      <View style={styles.content}>
        <View style={styles.errorContainer}>
          <Ionicons
            name="alert-circle-outline"
            size={iconSize.xl}
            color={colors.secondaryText}
          />

          <Text style={styles.title}>
            {t("shoeStore.shoeDetail.error.title")}
          </Text>

          <Text style={styles.message}>
            {t("shoeStore.shoeDetail.error.message")}
          </Text>

          {onGoBack && (
            <View style={styles.buttonContainer}>
              <Button
                title={t("shoeStore.shoeDetail.error.goBack")}
                onPress={onGoBack}
                brandColor={colors.primaryText}
                textColor={colors.background}
              />
            </View>
          )}

          {onGoHome && (
            <View style={styles.buttonContainer}>
              <Button
                title={t("shoeStore.shoeDetail.error.goHome")}
                onPress={onGoHome}
                brandColor={colors.primaryText}
                textColor={colors.background}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
