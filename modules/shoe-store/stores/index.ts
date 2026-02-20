export {
  bagStore,
  getBagItemCount,
  getBagTotal,
  hydrateBagStore,
  useBagStore,
} from "./bagStore";
export type { BagActions, BagState, BagStore } from "./bagStore";
export type { AddToBagOptions } from "@/modules/shoe-store/types/bag.types";

export {
  favoritesStore,
  hydrateFavoritesStore,
  useFavoritesStore,
} from "./favoritesStore";
export type {
  FavoritesActions,
  FavoritesState,
  FavoritesStore,
} from "./favoritesStore";
