import { LocaleContext, type LocaleContextValue } from "@/modules/core/context";
import React from "react";

export function useLocale(): LocaleContextValue {
  const context = React.useContext(LocaleContext);
  if (context == null) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}
