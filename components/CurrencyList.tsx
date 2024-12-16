import { FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { CurrencyItem } from "./CurrencyItem";
import useCurrencyStore from "@/lib/store/currencyStore";
import { useState } from "react";
import type { Currency } from "@/lib/types/currency";
import { ThemedText } from "./ThemedText";

export const CurrencyList = ({
  currencies,
}: { currencies: Array<Currency> }) => {
  const { fetchRates } = useCurrencyStore();
  const [refreshing, setRefreshing] = useState(false);

  const refreshRates = async () => {
    setRefreshing(true);
    await fetchRates();
    setRefreshing(false);
  };

  return (
    <>
      {currencies.length > 0 ? (
        <FlatList
          refreshing={refreshing}
          onRefresh={async () => await refreshRates()}
          data={currencies}
          renderItem={({ item }) => (
            <CurrencyItem code={item.code} value={item.value} />
          )}
          keyExtractor={(item) => item.code}
        />
      ) : (
        <ThemedText type="subtitle">No rates available</ThemedText>
      )}
    </>
  );
};
