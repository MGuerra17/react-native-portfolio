import { useState } from "react";
import { Text, View } from "react-native";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { AccordionItem } from "@/modules/shoe-store/components/AccordionItem";
import { ShoeDetailAccordionReviews } from "@/modules/shoe-store/components/ShoeDetailAccordionReviews";
import { createShoeDetailAccordionStyles } from "./ShoeDetailAccordion.styles";
import type {
  AccordionSection,
  ShoeDetailAccordionProps,
} from "./ShoeDetailAccordion.types";

export function ShoeDetailAccordion({
  description,
  deliveryAndReturnsPolicy,
  reviews,
}: ShoeDetailAccordionProps) {
  const { t, styles } = useShoeStoreUI(createShoeDetailAccordionStyles);
  const [expandedSection, setExpandedSection] =
    useState<AccordionSection | null>(null);

  const handleToggle = (section: AccordionSection) => {
    setExpandedSection((current) => (current === section ? null : section));
  };

  return (
    <View style={styles.section}>
      <AccordionItem
        title={t("shoeStore.shoeDetail.description")}
        expanded={expandedSection === "description"}
        onToggle={() => handleToggle("description")}
      >
        <Text style={styles.descriptionText}>{description}</Text>
      </AccordionItem>

      <AccordionItem
        title={t("shoeStore.shoeDetail.deliveryReturns")}
        expanded={expandedSection === "policy"}
        onToggle={() => handleToggle("policy")}
      >
        <Text style={styles.policyText}>{deliveryAndReturnsPolicy}</Text>
      </AccordionItem>

      <AccordionItem
        title={t("shoeStore.shoeDetail.reviews")}
        expanded={expandedSection === "reviews"}
        onToggle={() => handleToggle("reviews")}
      >
        <ShoeDetailAccordionReviews reviews={reviews} />
      </AccordionItem>
    </View>
  );
}
