import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useCurrencyStore from "@/lib/store/currencyStore";
import { useEffect, useMemo } from "react";
import { CurrencyList } from "@/components/CurrencyList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { rates, fetchRates } = useCurrencyStore();

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  const currencies = useMemo(
    () =>
      Object.entries(rates.rates || {}).map(([code, value]) => ({
        code,
        value,
      })),
    [rates.rates],
  );

  return (
    <SafeAreaView style={styles.stepContainer}>
      <ThemedView style={styles.stepContainer}>
        {rates.success && (
          <>
            <ThemedText style={{ padding: 16 }} type="subtitle">
              ✅ Last updated at: {rates.date}
            </ThemedText>
            <CurrencyList currencies={currencies} />
          </>
        )}
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    flex: 1,
  },
});
