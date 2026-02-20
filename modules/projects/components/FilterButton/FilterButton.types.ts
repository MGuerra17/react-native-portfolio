export type FilterButtonProps = {
  onPress: () => void;
  /** Number of filters currently applied (e.g. 1 when a category is selected). Badge is shown when > 0. */
  activeFilterCount?: number;
};
