import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { IconSymbol } from "./ui/IconSymbol";
import * as Haptics from "expo-haptics";
import useCurrencyStore from "@/lib/store/currencyStore";
import type { Currency } from "@/lib/types/currency";

type CurrencyItemProps = {
  code: string;
  value: number;
};

export const CurrencyItem = ({ code, value }: CurrencyItemProps) => {
  const { toggleFavoriteRate } = useCurrencyStore();
  const isFavorite = useCurrencyStore((state) =>
    state.favorites.find((currency) => currency.code === code),
  );

  const handleToggleFavorite = async (code: Currency) => {
    toggleFavoriteRate(code);
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const rateToAdd = { code, value };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.currencyInfo}>
        <ThemedText type="defaultSemiBold">{code}</ThemedText>
        <ThemedText>{value.toFixed(2)}</ThemedText>
      </ThemedView>
      <TouchableOpacity onPress={() => handleToggleFavorite(rateToAdd)}>
        <IconSymbol
          name={isFavorite ? "star.fill" : "star"}
          size={24}
          color={isFavorite ? "#FFD700" : "#808080"}
        />
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  currencyInfo: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
});
