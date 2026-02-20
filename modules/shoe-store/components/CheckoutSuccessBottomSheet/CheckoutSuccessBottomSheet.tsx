import { useRouter } from "expo-router";
import { useCallback } from "react";
import { useBottomSheet } from "@/modules/shoe-store/context/BottomSheetContext";
import { bagStore } from "@/modules/shoe-store/stores";
import { CheckoutSuccessBottomSheetView } from "./CheckoutSuccessBottomSheetView";

export function CheckoutSuccessBottomSheet() {
  const router = useRouter();
  const { state, close } = useBottomSheet();
  const visible = state["checkout-success"];

  const onFinish = useCallback(() => {
    bagStore.getState().clearBag();
    close("checkout-success");
    router.dismissTo("/projects/shoe-store");
  }, [router, close]);

  return <CheckoutSuccessBottomSheetView visible={visible} onFinish={onFinish} />;
}
