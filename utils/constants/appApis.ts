export const AppApis = {
  home: {
    getCurrencies: "https://openexchangerates.org/api/currencies.json",
    getExchangeAmount: `${process.env.NEXT_PUBLIC_API_EXCHANGE_AMOUNT}${process.env.NEXT_PUBLIC_API_EXCHANGE_AMOUNT_API_KEY}/pair`,
  },
};
