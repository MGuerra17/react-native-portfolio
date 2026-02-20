import { useRouter } from "expo-router";
import { useCallback } from "react";
import { DefaultHeaderView } from "./DefaultHeaderView";

export function DefaultHeader() {
  const router = useRouter();

  const onBack = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }, [router]);

  return <DefaultHeaderView onBack={onBack} />;
}
