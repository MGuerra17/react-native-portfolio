import { SearchResultItem } from "@/modules/shoe-store/components/SearchResultItem";
import type { ShoePreview } from "@/modules/shoe-store/types/shoe.types";

export type SearchResultsListProps = {
  shoes: ShoePreview[];
  onSelectShoe: (shoe: ShoePreview) => void;
};

export function SearchResultsList({
  shoes,
  onSelectShoe,
}: SearchResultsListProps) {
  return (
    <>
      {shoes.map((shoe) => (
        <SearchResultItem
          key={shoe.id}
          shoe={shoe}
          onPress={() => onSelectShoe(shoe)}
        />
      ))}
    </>
  );
}
