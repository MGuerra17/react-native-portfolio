import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStore } from "zustand/react";
import { createStore } from "zustand/vanilla";
import { FAVORITES_STORAGE_KEY } from "@/modules/shoe-store/constants/storage";

function parseStoredFavorites(stored: string | null): string[] {
  if (stored == null) return [];
  try {
    const parsed = JSON.parse(stored) as unknown;
    if (!Array.isArray(parsed)) return [];
    if (!parsed.every((x): x is string => typeof x === "string")) return [];
    return parsed;
  } catch {
    return [];
  }
}

export type FavoritesState = {
  favoriteIds: string[];
  _hydrated: boolean;
};

export type FavoritesActions = {
  setFavoriteIds: (
    ids: string[] | ((prev: string[]) => string[])
  ) => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export type FavoritesStore = FavoritesState & FavoritesActions;

export const favoritesStore = createStore<FavoritesStore>((set) => ({
  favoriteIds: [],
  _hydrated: false,

  setFavoriteIds: (idsOrUpdater) => {
    set((state) => ({
      favoriteIds:
        typeof idsOrUpdater === "function"
          ? idsOrUpdater(state.favoriteIds)
          : idsOrUpdater,
    }));
  },

  addFavorite: (id) => {
    set((state) => {
      const next = state.favoriteIds.includes(id)
        ? state.favoriteIds
        : [...state.favoriteIds, id];
      AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next)).catch(
        (error) => {
          if (__DEV__) {
            console.warn("Failed to persist favorites to AsyncStorage:", error);
          }
        },
      );
      return { favoriteIds: next };
    });
  },

  removeFavorite: (id) => {
    set((state) => {
      const next = state.favoriteIds.filter((fid) => fid !== id);
      AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next)).catch(
        (error) => {
          if (__DEV__) {
            console.warn("Failed to persist favorites to AsyncStorage:", error);
          }
        },
      );
      return { favoriteIds: next };
    });
  },
}));

favoritesStore.subscribe((state) => {
  if (!state._hydrated) return;
  // Persistence is done in addFavorite/removeFavorite to avoid double write
});

export async function hydrateFavoritesStore(): Promise<void> {
  const stored = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
  favoritesStore.setState({
    favoriteIds: parseStoredFavorites(stored),
    _hydrated: true,
  });
}

export function useFavoritesStore<T>(
  selector: (state: FavoritesStore) => T
): T {
  return useStore(favoritesStore, selector);
}
