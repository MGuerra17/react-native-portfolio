import { useSearchScreen } from "@/modules/shoe-store/hooks/useSearchScreen";
import { SearchScreenView } from "./SearchScreenView";

export function SearchScreen() {
  const searchScreenProps = useSearchScreen();

  return <SearchScreenView {...searchScreenProps} />;
}
