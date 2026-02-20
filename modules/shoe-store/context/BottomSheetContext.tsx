import { createContext, useContext, useState, useCallback, useRef, useEffect, useMemo, ReactNode } from "react";

export type BottomSheetType = "filter" | "checkout-success";

type BottomSheetState = {
  [K in BottomSheetType]: boolean;
};

type BottomSheetContextValue = {
  state: BottomSheetState;
  isOpen: (type: BottomSheetType) => boolean;
  open: (type: BottomSheetType) => void;
  close: (type: BottomSheetType) => void;
  toggle: (type: BottomSheetType) => void;
};

const BottomSheetContext = createContext<BottomSheetContextValue | undefined>(
  undefined
);

export function BottomSheetProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BottomSheetState>({
    filter: false,
    "checkout-success": false,
  });

  // Keep ref in sync with state
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  // Stable functions that don't depend on state
  const open = useCallback((type: BottomSheetType) => {
    setState((prev) => ({ ...prev, [type]: true }));
  }, []);

  const close = useCallback((type: BottomSheetType) => {
    setState((prev) => ({ ...prev, [type]: false }));
  }, []);

  const toggle = useCallback((type: BottomSheetType) => {
    setState((prev) => ({ ...prev, [type]: !prev[type] }));
  }, []);

  // isOpen is stable - reads from ref, but components re-render via state in context
  const isOpen = useCallback((type: BottomSheetType) => {
    return stateRef.current[type];
  }, []);

  // Context value includes state so components re-render when state changes
  // Functions are stable and don't change
  const value = useMemo(
    () => ({
      state,
      isOpen,
      open,
      close,
      toggle,
    }),
    [state, isOpen, open, close, toggle]
  );

  return (
    <BottomSheetContext.Provider value={value}>
      {children}
    </BottomSheetContext.Provider>
  );
}

export function useBottomSheet() {
  const context = useContext(BottomSheetContext);
  if (context === undefined) {
    throw new Error(
      "useBottomSheet must be used within a BottomSheetProvider"
    );
  }
  return context;
}
