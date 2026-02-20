import { SearchResultsList } from "@/modules/shoe-store/components/SearchResultsList";
import { SearchScreenHeader } from "@/modules/shoe-store/components/SearchScreenHeader";
import { useShoeStoreUI } from "@/modules/shoe-store/hooks/useShoeStoreUI";
import { Fragment } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { createSearchScreenStyles } from "./SearchScreen.styles";
import type { SearchScreenProps } from "./SearchScreen.types";

export function SearchScreenView({
  query,
  onQueryChange,
  recentShoes,
  searchResults,
  onSelectRecentShoe,
  onSelectShoe,
  onBack,
  isLoadingSearch = false,
}: SearchScreenProps) {
  const { t, styles, colors } = useShoeStoreUI(createSearchScreenStyles);
  const isTyping = query.trim().length > 0;
  const showNoResults =
    isTyping && !isLoadingSearch && searchResults.length === 0;

  return (
    <View style={styles.screen}>
      <SearchScreenHeader
        query={query}
        onQueryChange={onQueryChange}
        onBack={onBack}
        placeholder={t("shoeStore.search.placeholder")}
      />
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {!isTyping && recentShoes.length > 0 && (
          <Fragment>
            <Text style={styles.sectionTitle}>
              {t("shoeStore.search.recentTitle")}
            </Text>
            <SearchResultsList
              shoes={recentShoes}
              onSelectShoe={onSelectRecentShoe}
            />
          </Fragment>
        )}
        {isTyping && isLoadingSearch ? (
          <ActivityIndicator
            size="small"
            color={colors.primaryText}
            style={styles.loadingIndicator}
          />
        ) : showNoResults ? (
          <Text style={styles.noResultsMessage}>
            {t("shoeStore.search.noResults")}
          </Text>
        ) : (
          <SearchResultsList
            shoes={searchResults}
            onSelectShoe={onSelectShoe}
          />
        )}
      </ScrollView>
    </View>
  );
}
