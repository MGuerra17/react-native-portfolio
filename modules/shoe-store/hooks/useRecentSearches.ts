import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { RECENT_SEARCHES_STORAGE_KEY } from "@/modules/shoe-store/constants/storage";

const MAX_RECENT_ITEMS = 10;

function parseStoredRecentShoeIds(stored: string | null): string[] {
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

export function useRecentSearches() {
  const [recentShoeIds, setRecentShoeIds] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(RECENT_SEARCHES_STORAGE_KEY).then((stored) => {
      setRecentShoeIds(parseStoredRecentShoeIds(stored));
    });
  }, []);

  const addRecentShoe = useCallback((shoeId: string) => {
    if (!shoeId) return;
    setRecentShoeIds((prev) => {
      const withoutDuplicate = prev.filter((id) => id !== shoeId);
      const next = [shoeId, ...withoutDuplicate].slice(0, MAX_RECENT_ITEMS);
      AsyncStorage.setItem(
        RECENT_SEARCHES_STORAGE_KEY,
        JSON.stringify(next)
      ).catch((error) => {
        if (__DEV__) {
          console.warn(
            "Failed to persist recent searches to AsyncStorage:",
            error,
          );
        }
      });
      return next;
    });
  }, []);

  const clearRecentSearches = useCallback(() => {
    setRecentShoeIds([]);
    AsyncStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify([])).catch(
      (error) => {
        if (__DEV__) {
          console.warn(
            "Failed to clear recent searches from AsyncStorage:",
            error,
          );
        }
      },
    );
  }, []);

  return {
    recentShoeIds,
    addRecentShoe,
    clearRecentSearches,
  };
}
