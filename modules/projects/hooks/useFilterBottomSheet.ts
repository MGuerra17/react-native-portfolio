import { useEffect, useState } from "react";

export type UseFilterBottomSheetParams = {
  isOpen: boolean;
  selectedCategory: string | null;
  onApply: (category: string | null) => void;
  onClose: () => void;
};

export function useFilterBottomSheet({
  isOpen,
  selectedCategory,
  onApply,
  onClose,
}: UseFilterBottomSheetParams) {
  const [pendingCategory, setPendingCategory] = useState<string | null>(
    selectedCategory
  );

  useEffect(() => {
    if (isOpen) {
      setPendingCategory(selectedCategory);
    }
  }, [isOpen, selectedCategory]);

  const handleApply = () => {
    onApply(pendingCategory);
    onClose();
  };

  return {
    isOpen,
    onClose,
    pendingCategory,
    onSelectCategory: setPendingCategory,
    onApply: handleApply,
  };
}
