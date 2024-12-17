import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import useCurrencyStore from "@/lib/store/currencyStore";
import { FavoriteCurrencyList } from "@/components/FavoriteCurrencyList";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";

export default function FavoritesScreen() {
  const { favorites } = useCurrencyStore();
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.titleStyle} type="subtitle">
          Favorite currencies
        </ThemedText>
        <FavoriteCurrencyList currencies={favorites} />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    gap: 8,
    flex: 1,
  },
  titleStyle: {
    padding: 16,
  },
  container: {
    flex: 1,
  },
});
