import { borderRadius, fontSize, spacing } from "@/constants/theme";
import type { UIStyleContext } from "@/modules/core/types/styleFactory";
import type { ShoeStoreScheme } from "@/modules/shoe-store/constants/theme";
import { StyleSheet, ViewStyle } from "react-native";

const BOTTOM_BAR_HEIGHT = 64;
const FAVORITE_BUTTON_SIZE = 48;
const SIZE_BOX_SIZE = 64;
const CAROUSEL_INDICATOR_HEIGHT = 4;
const CAROUSEL_INDICATOR_WIDTH = 8;

export type ShoeDetailScreenSkeletonStyles = {
  screen: ViewStyle;
  headerWrapper: ViewStyle;
  scrollContent: ViewStyle;
  content: ViewStyle;
  carouselSection: ViewStyle;
  carouselItem: ViewStyle;
  carouselImage: ViewStyle;
  carouselIndicators: ViewStyle;
  carouselIndicator: ViewStyle;
  productInfoSection: ViewStyle;
  genderRatingRow: ViewStyle;
  genderPlaceholder: ViewStyle;
  ratingPlaceholder: ViewStyle;
  namePriceRow: ViewStyle;
  namePlaceholder: ViewStyle;
  pricePlaceholder: ViewStyle;
  sizeSection: ViewStyle;
  sizeHeaderRow: ViewStyle;
  sizeTitlePlaceholder: ViewStyle;
  sizeTypeRow: ViewStyle;
  sizeTypeButton: ViewStyle;
  sizeGrid: ViewStyle;
  sizeBox: ViewStyle;
  accordionSection: ViewStyle;
  accordionItem: ViewStyle;
  accordionHeader: ViewStyle;
  accordionTitlePlaceholder: ViewStyle;
  accordionIconPlaceholder: ViewStyle;
  accordionContentPlaceholder: ViewStyle;
  bottomBar: ViewStyle;
  favoriteButtonPlaceholder: ViewStyle;
  pillButtonPlaceholder: ViewStyle;
};

export const createShoeDetailScreenSkeletonStyles = ({
  colors,
  layout,
}: UIStyleContext<ShoeStoreScheme>) =>
  StyleSheet.create<ShoeDetailScreenSkeletonStyles>({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    headerWrapper: {
      backgroundColor: colors.surface,
    },
    scrollContent: {
      paddingBottom: BOTTOM_BAR_HEIGHT + spacing.lg,
    },
    content: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.lg,
      paddingBottom: spacing.xl,
    },
    carouselSection: {
      backgroundColor: colors.surface,
      alignItems: "center",
      paddingBottom: spacing.md,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      overflow: "hidden",
    },
    carouselItem: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: spacing.xl,
    },
    carouselImage: {
      borderRadius: borderRadius.md,
      backgroundColor: colors.muted,
      alignSelf: "center",
    },
    carouselIndicators: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.sm,
      marginTop: spacing.sm,
    },
    carouselIndicator: {
      width: CAROUSEL_INDICATOR_WIDTH,
      height: CAROUSEL_INDICATOR_HEIGHT,
      borderRadius: borderRadius.full,
      backgroundColor: colors.muted,
    },
    productInfoSection: {
      marginBottom: spacing.lg,
    },
    genderRatingRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.sm,
    },
    genderPlaceholder: {
      height: fontSize.sm,
      width: "25%",
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
    },
    ratingPlaceholder: {
      height: fontSize.sm,
      width: "15%",
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
    },
    namePriceRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    namePlaceholder: {
      height: fontSize.lg,
      flex: 1,
      marginRight: spacing.md,
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
    },
    pricePlaceholder: {
      height: fontSize.lg,
      width: "30%",
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
    },
    sizeSection: {
      marginTop: spacing.lg,
    },
    sizeHeaderRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: spacing.md,
    },
    sizeTitlePlaceholder: {
      height: fontSize.md,
      width: "20%",
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
    },
    sizeTypeRow: {
      flexDirection: "row",
      gap: spacing.lg,
    },
    sizeTypeButton: {
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
      minWidth: 40,
    },
    sizeGrid: {
      flexDirection: "row",
      gap: spacing.md,
      paddingRight: spacing.lg,
    },
    sizeBox: {
      width: SIZE_BOX_SIZE,
      height: SIZE_BOX_SIZE,
      borderRadius: borderRadius.md,
      backgroundColor: colors.muted,
    },
    accordionSection: {
      marginTop: spacing.lg,
    },
    accordionItem: {
      borderBottomWidth: 1,
      borderBottomColor: colors.surface,
    },
    accordionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: spacing.md,
      paddingRight: spacing.xs,
    },
    accordionTitlePlaceholder: {
      height: fontSize.md,
      width: "40%",
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
    },
    accordionIconPlaceholder: {
      width: 20,
      height: 20,
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
    },
    accordionContentPlaceholder: {
      height: 60,
      width: "100%",
      borderRadius: borderRadius.sm,
      backgroundColor: colors.muted,
      marginBottom: spacing.md,
    },
    bottomBar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: BOTTOM_BAR_HEIGHT,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: spacing.lg,
      gap: spacing.md,
      backgroundColor: colors.background,
    },
    favoriteButtonPlaceholder: {
      width: FAVORITE_BUTTON_SIZE,
      height: FAVORITE_BUTTON_SIZE,
      borderRadius: FAVORITE_BUTTON_SIZE / 2,
      borderWidth: 2,
      borderColor: colors.surface,
      backgroundColor: colors.muted,
    },
    pillButtonPlaceholder: {
      flex: 1,
      height: FAVORITE_BUTTON_SIZE,
      borderRadius: borderRadius.full,
      backgroundColor: colors.muted,
    },
  });
