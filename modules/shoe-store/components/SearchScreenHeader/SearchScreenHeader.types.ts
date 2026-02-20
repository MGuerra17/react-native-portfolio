export type SearchScreenHeaderProps = {
  query: string;
  onQueryChange: (text: string) => void;
  onBack: () => void;
  placeholder?: string;
};
