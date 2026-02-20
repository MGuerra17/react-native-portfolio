import { useRouter } from "expo-router";
import { useCallback } from "react";
import { getBagItemCount, useBagStore } from "@/modules/shoe-store/stores";
import { BagScreenHeaderView } from "./BagScreenHeaderView";

export function BagScreenHeader() {
  const router = useRouter();
  const itemCount = useBagStore((state) => getBagItemCount(state.items));

  const onBack = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/projects/shoe-store");
    }
  }, [router]);

  return <BagScreenHeaderView onBack={onBack} itemCount={itemCount} />;
}
