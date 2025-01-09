export const AppApis = {
  home: {
    getCurrencies: `${process.env.NEXT_PUBLIC_API_CURRENCIES}/currencies.json`,
    getExchangeAmount: `${process.env.NEXT_PUBLIC_API_EXCHANGE_AMOUNT}${process.env.NEXT_PUBLIC_API_EXCHANGE_AMOUNT_API_KEY}/pair`,
  },
};
