import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  favoritesStore,
  hydrateFavoritesStore,
} from "../favoritesStore";

function getFavoriteIds() {
  return favoritesStore.getState().favoriteIds;
}

beforeEach(() => {
  favoritesStore.setState({ favoriteIds: [], _hydrated: false });
  jest.clearAllMocks();
});

describe("favoritesStore", () => {
  describe("addFavorite", () => {
    it("adds id to favorites", () => {
      favoritesStore.getState().addFavorite("id-1");
      expect(getFavoriteIds()).toEqual(["id-1"]);
    });

    it("does not duplicate when adding same id again", () => {
      favoritesStore.getState().addFavorite("id-1");
      favoritesStore.getState().addFavorite("id-1");
      expect(getFavoriteIds()).toEqual(["id-1"]);
    });

    it("adds multiple ids", () => {
      favoritesStore.getState().addFavorite("id-1");
      favoritesStore.getState().addFavorite("id-2");
      expect(getFavoriteIds()).toContain("id-1");
      expect(getFavoriteIds()).toContain("id-2");
      expect(getFavoriteIds()).toHaveLength(2);
    });
  });

  describe("removeFavorite", () => {
    it("removes id from favorites", () => {
      favoritesStore.getState().addFavorite("id-1");
      favoritesStore.getState().removeFavorite("id-1");
      expect(getFavoriteIds()).toEqual([]);
    });

    it("leaves other ids when removing one", () => {
      favoritesStore.getState().addFavorite("id-1");
      favoritesStore.getState().addFavorite("id-2");
      favoritesStore.getState().removeFavorite("id-1");
      expect(getFavoriteIds()).toEqual(["id-2"]);
    });
  });

  describe("setFavoriteIds", () => {
    it("replaces favoriteIds with array", () => {
      favoritesStore.getState().setFavoriteIds(["a", "b"]);
      expect(getFavoriteIds()).toEqual(["a", "b"]);
    });

    it("uses updater function when given function", () => {
      favoritesStore.getState().setFavoriteIds(["a"]);
      favoritesStore.getState().setFavoriteIds((prev) => [...prev, "b"]);
      expect(getFavoriteIds()).toEqual(["a", "b"]);
    });
  });
});

describe("hydrateFavoritesStore", () => {
  it("loads favoriteIds from AsyncStorage and sets _hydrated", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(["id-1", "id-2"]));

    await hydrateFavoritesStore();

    expect(favoritesStore.getState()._hydrated).toBe(true);
    expect(getFavoriteIds()).toEqual(["id-1", "id-2"]);
  });

  it("handles null from AsyncStorage", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

    await hydrateFavoritesStore();

    expect(getFavoriteIds()).toEqual([]);
  });
});
