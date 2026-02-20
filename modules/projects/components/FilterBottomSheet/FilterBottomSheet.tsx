import { useFilterBottomSheet } from "@/modules/projects/hooks/useFilterBottomSheet";
import { FilterBottomSheetView } from "./FilterBottomSheetView";

export type FilterBottomSheetProps = {
  isOpen: boolean;
  selectedCategory: string | null;
  onApply: (category: string | null) => void;
  onClose: () => void;
};

export function FilterBottomSheet({
  isOpen,
  selectedCategory,
  onApply,
  onClose,
}: FilterBottomSheetProps) {
  const filterBottomSheetProps = useFilterBottomSheet({
    isOpen,
    selectedCategory,
    onApply,
    onClose,
  });

  return <FilterBottomSheetView {...filterBottomSheetProps} />;
}
