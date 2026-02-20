import { ShoeDetailScreen } from "@/modules/shoe-store";
import { useLocalSearchParams } from "expo-router";

export default function ShoeDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const shoeId = typeof id === "string" ? id : undefined;

  return <ShoeDetailScreen id={shoeId} />;
}
