import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCurrencyRates } from "../api/currency";
import type { CurrencyRates } from "../types/currency";

type CurrencyStore = {
  rates: CurrencyRates;
  favorites: Array<{ code: string; value: number }>;
  fetchRates: () => Promise<void>;
  toggleFavoriteRate: (rate: { code: string; value: number }) => void;
};

const useCurrencyStore = create<CurrencyStore>()(
  immer(
    persist(
      (set) => ({
        rates: { rates: {}, success: false, timestamp: 0, base: "", date: "" },
        favorites: [],
        fetchRates: async () => {
          const currencyRates = await getCurrencyRates();
          if (currencyRates.success) {
            set({ rates: currencyRates });
          }
        },
        toggleFavoriteRate: (rate: { code: string; value: number }) => {
          set((state) => {
            const existingFavorite = state.favorites.find(
              (favorite) => favorite.code === rate.code,
            );
            if (existingFavorite) {
              state.favorites = state.favorites.filter(
                (favorite) => favorite.code !== rate.code,
              );
            } else {
              state.favorites.push(rate);
            }
          });
        },
      }),
      {
        name: "currency-storage",
        storage: createJSONStorage(() => AsyncStorage),
        partialize: (state) => ({
          rates: state.rates,
          favorites: state.favorites,
        }),
      },
    ),
  ),
);

export default useCurrencyStore;
