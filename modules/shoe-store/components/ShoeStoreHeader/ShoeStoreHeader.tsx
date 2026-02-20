import { RelativePathString, useRouter } from "expo-router";
import { useCallback } from "react";
import { getBagItemCount, useBagStore } from "@/modules/shoe-store/stores";
import { ShoeStoreHeaderView } from "./ShoeStoreHeaderView";

export function ShoeStoreHeader() {
  const router = useRouter();
  const itemCount = useBagStore((state) => getBagItemCount(state.items));

  const onBack = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }, [router]);

  const onBagPress = useCallback(() => {
    router.push("/projects/shoe-store/bag" as RelativePathString);
  }, [router]);

  return (
    <ShoeStoreHeaderView
      onBack={onBack}
      onBagPress={onBagPress}
      bagItemCount={itemCount}
    />
  );
}
