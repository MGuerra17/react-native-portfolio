import { useShoeDetailScreen } from "@/modules/shoe-store/hooks/useShoeDetailScreen";
import { RelativePathString, useRouter } from "expo-router";
import { useCallback } from "react";
import { ShoeDetailScreenView } from "./ShoeDetailScreenView";

type ShoeDetailScreenProps = {
  id: string | undefined;
};

export function ShoeDetailScreen({ id }: ShoeDetailScreenProps) {
  const router = useRouter();
  const shoeDetailScreenProps = useShoeDetailScreen(id);

  const onGoBack = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/projects/shoe-store" as RelativePathString);
    }
  }, [router]);

  const onGoHome = useCallback(() => {
    router.replace("/projects/shoe-store" as RelativePathString);
  }, [router]);

  return (
    <ShoeDetailScreenView
      {...shoeDetailScreenProps}
      onGoBack={onGoBack}
      onGoHome={onGoHome}
    />
  );
}
