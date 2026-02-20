import { useBottomSheet } from "@/modules/shoe-store/context/BottomSheetContext";
import { getBagTotal, useBagStore } from "@/modules/shoe-store/stores";
import { useCallback, useMemo } from "react";
import { BagFooterView } from "./BagFooterView";

export function BagFooter() {
  const { open } = useBottomSheet();

  // Use separate selectors to avoid creating new objects on each render
  const items = useBagStore((state) => state.items);
  const hasItems = useMemo(() => items.length > 0, [items.length]);
  const total = useMemo(() => getBagTotal(items), [items]);

  const onCheckoutPress = useCallback(() => {
    open("checkout-success");
  }, [open]);

  if (!hasItems) {
    return null;
  }

  return <BagFooterView total={total} onCheckoutPress={onCheckoutPress} />;
}
