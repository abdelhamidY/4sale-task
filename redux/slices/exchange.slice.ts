import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  exchangeFrom: string;
  exchangeTo: string;
  exchangeRate: number;
  exchangeAmount: string;
  exchangeResult: string;
} = {
  exchangeFrom: "",
  exchangeTo: "",
  exchangeRate: 0,
  exchangeAmount: Number(1.0).toFixed(1),
  exchangeResult: "",
};

const exchangeRateSlice = createSlice({
  name: "exchangeRateSlice",
  initialState,
  reducers: {
    setExchangeValues: (
      state,
      action: PayloadAction<Partial<typeof initialState>>,
    ) => ({ ...state, ...action.payload }),

    resetExchangeValues: () => {
      return initialState;
    },
  },
});

export const { setExchangeValues, resetExchangeValues } =
  exchangeRateSlice.actions;
export default exchangeRateSlice.reducer;
