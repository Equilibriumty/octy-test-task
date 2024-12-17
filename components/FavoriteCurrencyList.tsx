import { FlatList, StyleSheet } from "react-native";
import { CurrencyItem } from "./CurrencyItem";
import type { Currency } from "@/lib/types/currency";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export const FavoriteCurrencyList = ({
  currencies,
}: { currencies: Array<Currency> }) => {
  return (
    <>
      {currencies.length > 0 ? (
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <CurrencyItem code={item.code} value={item.value} />
          )}
          keyExtractor={(item) => item.code}
        />
      ) : (
        <ThemedView style={styles.container}>
          <ThemedText type="subtitle">No favorites yet</ThemedText>
        </ThemedView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
