import { FlatList, StyleSheet } from "react-native";
import { CurrencyItem } from "./CurrencyItem";
import type { Currency } from "@/lib/types/currency";
import { ThemedText } from "./ThemedText";

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
        <ThemedText style={{ padding: 16 }} type="subtitle">
          No favorites yet
        </ThemedText>
      )}
    </>
  );
};

const styles = StyleSheet.create({});
