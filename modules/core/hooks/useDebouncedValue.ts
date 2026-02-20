import { useEffect, useState } from "react";

/**
 * Returns a debounced version of the value.
 * The debounced value updates after `delayMs` of no changes to the input value.
 *
 * @param value - The value to debounce
 * @param delayMs - Delay in milliseconds (e.g. 300 for search inputs)
 */
export function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debouncedValue;
}
