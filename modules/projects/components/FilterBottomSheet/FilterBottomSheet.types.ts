export type FilterBottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  pendingCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onApply: () => void;
};
