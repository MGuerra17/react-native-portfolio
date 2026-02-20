export type ShoeDetailBottomBarProps = {
  isFavorite: boolean;
  canAddToBag: boolean;
  sizeAlreadyInBag: boolean;
  onToggleFavorite: () => void;
  onAddToBag: () => void;
};
