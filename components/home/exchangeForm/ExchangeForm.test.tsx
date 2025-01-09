import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import MockStoreCreator from "redux-mock-store";
import {
  setExchangeValues,
  resetExchangeValues,
} from "@/redux/slices/exchange.slice";
import ExchangeFrom from "./ExchangeForm";

jest.mock("./hooks/useGetCurrencies", () => () => ({
  data: { data: { USD: "United States Dollar", EUR: "Euro" } },
}));
jest.mock("./hooks/useExchangeCurrency", () => () => ({
  data: { data: { conversion_result: 1.5 } },
  isLoading: false,
}));

const mockStore = MockStoreCreator([]);

describe("ExchangeFrom Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      exchangeRateSlice: {
        exchangeFrom: "",
        exchangeTo: "",
        exchangeAmount: "",
      },
    });
  });

  it("allows the user to input an amount", () => {
    render(
      <Provider store={store}>
        <ExchangeFrom />
      </Provider>,
    );

    const amountInput = screen.getByLabelText(/Amount/i);
    fireEvent.change(amountInput, { target: { value: "100" } });

    expect(store.getActions()).toContainEqual(
      setExchangeValues({
        exchangeAmount: "100",
        exchangeFrom: "",
        exchangeTo: "",
      }),
    );
  });

  it("swaps the 'From' and 'To' currencies when swap button is clicked", () => {
    store = mockStore({
      exchangeRateSlice: {
        exchangeFrom: "USD",
        exchangeTo: "EUR",
        exchangeAmount: "100",
      },
    });

    render(
      <Provider store={store}>
        <ExchangeFrom />
      </Provider>,
    );

    const swapButton = screen.getByRole("swap-div");
    fireEvent.click(swapButton);

    expect(store.getActions()).toContainEqual(
      setExchangeValues({
        exchangeFrom: "EUR",
        exchangeTo: "USD",
        exchangeAmount: "100",
      }),
    );
  });

  it("resets the exchange values when reset button is clicked", () => {
    render(
      <Provider store={store}>
        <ExchangeFrom />
      </Provider>,
    );

    const resetButton = screen.getByRole("button", { name: /reset/i });
    fireEvent.click(resetButton);

    expect(store.getActions()).toContainEqual(resetExchangeValues());
  });

  it("displays the exchange result when data is available", () => {
    render(
      <Provider store={store}>
        <ExchangeFrom />
      </Provider>,
    );

    expect(screen.getByText(/Equals 1.5/i)).toBeInTheDocument();
  });
});
