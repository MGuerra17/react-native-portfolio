import { RootLayoutContent } from "@/modules/core/components/RootLayoutContent/RootLayoutContent";
import { useRootLayoutContent } from "../../hooks/useRootLayoutContent";

export function RootLayoutContainer() {
  const rootLayoutContentProps = useRootLayoutContent();

  return <RootLayoutContent {...rootLayoutContentProps} />;
}
