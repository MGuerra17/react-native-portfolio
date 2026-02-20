import { act, renderHook } from "@testing-library/react-native";
import { useQuery } from "../useQuery";

describe("useQuery", () => {
  let originalConsoleError: typeof console.error;

  beforeEach(() => {
    jest.useFakeTimers();
    // Silenciar console.error para tests que esperan errores (son logs esperados)
    originalConsoleError = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    jest.useRealTimers();
    console.error = originalConsoleError;
  });

  it("starts in loading state and then returns data on success", async () => {
    const queryFn = jest.fn().mockResolvedValue({ id: 1 });
    const { result } = renderHook(() => useQuery({ queryFn }));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
    expect(result.current.isSuccess).toBe(false);

    await act(async () => {
      await jest.runAllTimersAsync();
    });

    expect(queryFn).toHaveBeenCalledTimes(1);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual({ id: 1 });
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it("sets error state when queryFn throws", async () => {
    const err = new Error("Fetch failed");
    const queryFn = jest.fn().mockRejectedValue(err);
    const { result } = renderHook(() => useQuery({ queryFn }));

    await act(async () => {
      await jest.runAllTimersAsync();
    });

    expect(result.current.isError).toBe(true);
    expect(result.current.error).toBe(err);
    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
  });

  it("does not fetch when enabled is false", async () => {
    const queryFn = jest.fn().mockResolvedValue("data");
    const { result } = renderHook(() =>
      useQuery({ queryFn, enabled: false })
    );

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeUndefined();
    expect(queryFn).not.toHaveBeenCalled();

    await act(async () => {
      await jest.runAllTimersAsync();
    });

    expect(queryFn).not.toHaveBeenCalled();
  });

  it("calls onSuccess when query succeeds", async () => {
    const data = { value: 42 };
    const queryFn = jest.fn().mockResolvedValue(data);
    const onSuccess = jest.fn();
    renderHook(() => useQuery({ queryFn, onSuccess }));

    await act(async () => {
      await jest.runAllTimersAsync();
    });

    expect(onSuccess).toHaveBeenCalledWith(data);
  });

  it("calls onError when query fails", async () => {
    const err = new Error("Failed");
    const queryFn = jest.fn().mockRejectedValue(err);
    const onError = jest.fn();
    renderHook(() => useQuery({ queryFn, onError }));

    await act(async () => {
      await jest.runAllTimersAsync();
    });

    expect(onError).toHaveBeenCalledWith(err);
  });

  it("refetch runs query again and uses refetchFn when provided", async () => {
    const queryFn = jest.fn().mockResolvedValue("initial");
    const refetchFn = jest.fn().mockResolvedValue("refetched");
    const { result } = renderHook(() =>
      useQuery({ queryFn, refetchFn })
    );

    await act(async () => {
      await jest.runAllTimersAsync();
    });

    expect(result.current.data).toBe("initial");
    expect(queryFn).toHaveBeenCalledTimes(1);
    expect(refetchFn).not.toHaveBeenCalled();

    await act(async () => {
      await result.current.refetch();
    });

    expect(refetchFn).toHaveBeenCalledTimes(1);
    expect(result.current.data).toBe("refetched");
  });

  it("refetch uses queryFn when refetchFn is not provided", async () => {
    const queryFn = jest.fn().mockResolvedValue("data");
    const { result } = renderHook(() => useQuery({ queryFn }));

    await act(async () => {
      await jest.runAllTimersAsync();
    });

    expect(queryFn).toHaveBeenCalledTimes(1);

    await act(async () => {
      await result.current.refetch();
    });

    expect(queryFn).toHaveBeenCalledTimes(2);
  });

  it("reset clears data and error", async () => {
    const queryFn = jest.fn().mockResolvedValue("data");
    const { result } = renderHook(() => useQuery({ queryFn }));

    await act(async () => {
      await jest.runAllTimersAsync();
    });

    expect(result.current.data).toBe("data");
    expect(result.current.isSuccess).toBe(true);

    act(() => {
      result.current.reset();
    });

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBe(false);
  });

  it("isRefreshing is true during refetch", async () => {
    let resolveQuery: (value: string) => void;
    const queryFn = jest.fn().mockImplementation(
      () =>
        new Promise<string>((resolve) => {
          resolveQuery = resolve;
        })
    );
    const { result } = renderHook(() => useQuery({ queryFn }));

    await act(async () => {
      await jest.runAllTimersAsync();
    });

    expect(result.current.isRefreshing).toBe(false);

    let refetchPromise: Promise<void>;
    act(() => {
      refetchPromise = result.current.refetch();
    });

    expect(result.current.isRefreshing).toBe(true);

    await act(async () => {
      resolveQuery!("refetched");
      await refetchPromise!;
    });

    expect(result.current.isRefreshing).toBe(false);
    expect(result.current.data).toBe("refetched");
  });
});
