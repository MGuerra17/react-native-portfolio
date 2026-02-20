import AsyncStorage from "@react-native-async-storage/async-storage";
import { act, renderHook } from "@testing-library/react-native";
import { useRecentSearches } from "../useRecentSearches";

beforeEach(() => {
  jest.clearAllMocks();
  (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
  (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);
});

describe("useRecentSearches", () => {
  it("starts with empty recentShoeIds and loads from AsyncStorage", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(
      JSON.stringify(["id-1", "id-2"])
    );

    const { result } = renderHook(() => useRecentSearches());

    expect(result.current.recentShoeIds).toEqual([]);

    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.recentShoeIds).toEqual(["id-1", "id-2"]);
  });

  it("addRecentShoe adds id to the front and persists", async () => {
    const { result } = renderHook(() => useRecentSearches());

    await act(async () => {
      await Promise.resolve();
    });

    act(() => {
      result.current.addRecentShoe("shoe-1");
    });

    expect(result.current.recentShoeIds).toEqual(["shoe-1"]);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      expect.any(String),
      JSON.stringify(["shoe-1"])
    );
  });

  it("addRecentShoe moves existing id to front", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(
      JSON.stringify(["a", "b", "c"])
    );
    const { result } = renderHook(() => useRecentSearches());

    await act(async () => {
      await Promise.resolve();
    });

    act(() => {
      result.current.addRecentShoe("b");
    });

    expect(result.current.recentShoeIds).toEqual(["b", "a", "c"]);
  });

  it("addRecentShoe does nothing when shoeId is empty", async () => {
    const { result } = renderHook(() => useRecentSearches());

    await act(async () => {
      await Promise.resolve();
    });

    act(() => {
      result.current.addRecentShoe("");
    });

    expect(result.current.recentShoeIds).toEqual([]);
    expect(AsyncStorage.setItem).not.toHaveBeenCalled();
  });

  it("clearRecentSearches clears list and persists", async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(
      JSON.stringify(["a", "b"])
    );
    const { result } = renderHook(() => useRecentSearches());

    await act(async () => {
      await Promise.resolve();
    });
    expect(result.current.recentShoeIds).toEqual(["a", "b"]);

    act(() => {
      result.current.clearRecentSearches();
    });

    expect(result.current.recentShoeIds).toEqual([]);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      expect.any(String),
      JSON.stringify([])
    );
  });
});
