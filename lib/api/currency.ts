import { fetcher } from ".";
import { API_KEY } from "../config";
import type { CurrencyRates } from "../types/currency";

const getCurrencyRates = async () => {
  const currencyRates = await fetcher<CurrencyRates>("/latest", {
    method: "GET",
    params: {
      access_token: API_KEY,
    },
  });

  return currencyRates;
};

export { getCurrencyRates };
