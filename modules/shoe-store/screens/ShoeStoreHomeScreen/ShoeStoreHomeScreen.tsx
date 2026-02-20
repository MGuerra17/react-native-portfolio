import { useShoeStoreHomeScreen } from "@/modules/shoe-store/hooks/useShoeStoreHomeScreen";
import { ShoeStoreHomeScreenView } from "./ShoeStoreHomeScreenView";

export function ShoeStoreHomeScreen() {
  const shoeStoreHomeScreenProps = useShoeStoreHomeScreen();

  return <ShoeStoreHomeScreenView {...shoeStoreHomeScreenProps} />;
}
