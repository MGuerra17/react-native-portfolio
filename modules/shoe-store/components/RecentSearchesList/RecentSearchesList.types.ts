export type RecentSearchesListProps = {
  recentSearches: string[];
  onSelectSearch: (query: string) => void;
  onClear?: () => void;
};
