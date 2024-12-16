export type CurrencyRates = {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
};

export type Currency = {
  code: string;
  value: number;
};
