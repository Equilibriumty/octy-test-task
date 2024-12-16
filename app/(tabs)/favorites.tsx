import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import useCurrencyStore from "@/lib/store/currencyStore";
import { FavoriteCurrencyList } from "@/components/FavoriteCurrencyList";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";

export default function FavoritesScreen() {
  const { favorites } = useCurrencyStore();
  return (
    <SafeAreaView style={styles.stepContainer}>
      <ThemedView style={{ flex: 1 }}>
        <ThemedText style={{ padding: 16 }} type="subtitle">
          Favorite currencies
        </ThemedText>
        <FavoriteCurrencyList currencies={favorites} />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  stepContainer: {
    flex: 1,
  },
});
