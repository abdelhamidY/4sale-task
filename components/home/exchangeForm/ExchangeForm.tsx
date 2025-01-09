"use client";
import CardLayout from "@/components/shared/cardLayout/cardLayout";
import DropdownSearch from "@/components/ui/DropDownSearch/DropdownSearch";
import Input from "@/components/ui/Input/Input";
import { useAppDispatch, useAppSelector } from "@/redux/redux.configration";
import {
  resetExchangeValues,
  setExchangeValues,
} from "@/redux/slices/exchange.slice";
import useGetCurrencies from "./hooks/useGetCurrencies";
import { IoSwapHorizontalSharp } from "react-icons/io5";
import { useCallback, useMemo } from "react";
import useExchangeCurrency from "./hooks/useExchangeCurrency";
import Loader from "@/components/ui/Loader/Loader";
import Button from "@/components/ui/Button/Button";
import useDebounce from "@/utils/hooks/useDebounce";

const ExchangeFrom = () => {
  const { data: currencies } = useGetCurrencies();

  const dispatch = useAppDispatch();
  const exchangeSlice = useAppSelector((state) => state.exchangeRateSlice);

  const debouncedAmount = useDebounce(exchangeSlice.exchangeAmount, 1200);

  const { data: exchangeData, isLoading: exchangeLoading } =
    useExchangeCurrency({
      from: exchangeSlice.exchangeFrom,
      to: exchangeSlice.exchangeTo,
      amount: exchangeSlice.exchangeAmount,
      enabled:
        exchangeSlice.exchangeFrom !== "" &&
        exchangeSlice.exchangeTo !== "" &&
        exchangeSlice.exchangeAmount !== "" &&
        Number(debouncedAmount) > 0,
    });

  const handleAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (/^\d*\.?\d*$/.test(value) || value === "") {
        dispatch(
          setExchangeValues({
            ...exchangeSlice,
            exchangeAmount: value,
          }),
        );
      }
    },
    [dispatch, exchangeSlice],
  );


  const handleBlur = useCallback(() => {
    const { exchangeAmount } = exchangeSlice;

    if (!exchangeAmount || isNaN(Number(exchangeAmount))) {
      dispatch(
        setExchangeValues({
          ...exchangeSlice,
          exchangeAmount: "0.0",
        }),
      );
    } else if (exchangeAmount.includes(".") && !exchangeAmount.split(".")[1]) {
      dispatch(
        setExchangeValues({
          ...exchangeSlice,
          exchangeAmount: `${exchangeAmount}0`,
        }),
      );
    } else {
      dispatch(
        setExchangeValues({
          ...exchangeSlice,
          exchangeAmount: exchangeAmount,
        }),
      );
    }
  }, [dispatch, exchangeSlice]);

  const handleExchangeChange = useCallback(
    (field: "exchangeFrom" | "exchangeTo", item: string) => {
      dispatch(
        setExchangeValues({
          ...exchangeSlice,
          [field]: item === exchangeSlice[field] ? "" : item,
        }),
      );
    },
    [dispatch, exchangeSlice],
  );

  const handleSwapping = useCallback(() => {
    dispatch(
      setExchangeValues({
        ...exchangeSlice,
        exchangeFrom: exchangeSlice.exchangeTo,
        exchangeTo: exchangeSlice.exchangeFrom,
      }),
    );
  }, [dispatch, exchangeSlice]);

  const currencyItems: string[] = useMemo(() => {
    return currencies?.data ? Object.keys(currencies.data) : [];
  }, [currencies?.data]);

  return (
    <CardLayout className="relative h-auto max-w-[40rem] w-full p-6 md:h-[20rem] lg:min-w-[60rem] lg:max-w-[60rem]">
      {exchangeLoading && <Loader isLoading />}

      <div className="flex flex-col items-center gap-6 px-4 py-6 md:flex-row md:gap-4">
        <div className="w-full flex-grow md:w-[200px]">
          <Input
            id="Amount"
            name="Amount"
            about="Amount"
            type="text"
            label="Amount"
            value={exchangeSlice.exchangeAmount}
            onChange={handleAmountChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="w-full flex-grow md:w-[200px]">
          <DropdownSearch
            label="From"
            name="exchangeFrom"
            placeholder="Currency"
            items={currencyItems}
            onChange={(item) => handleExchangeChange("exchangeFrom", item)}
            anotherExchange={exchangeSlice.exchangeTo}
            value={exchangeSlice.exchangeFrom}
          />
        </div>

        <div className="hidden items-center justify-center self-end md:flex">
          <div
            className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border"
            onClick={handleSwapping}
          >
            <IoSwapHorizontalSharp size={15} color="#3B82F6" />
          </div>
        </div>

        <div className="w-full flex-grow md:w-[200px]">
          <DropdownSearch
            label="To"
            name="exchangeTo"
            placeholder="Currency"
            onChange={(item) => handleExchangeChange("exchangeTo", item)}
            anotherExchange={exchangeSlice.exchangeFrom}
            items={currencyItems}
            value={exchangeSlice.exchangeTo}
          />
        </div>

        <div className="flex items-center justify-center md:hidden">
          <div
            role="swap-div"
            className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border"
            onClick={handleSwapping}
          >
            <IoSwapHorizontalSharp size={15} color="#3B82F6" />
          </div>
        </div>
      </div>
      {exchangeData && (
        <div className="flex flex-col gap-3 px-5">
          <Button
            className="w-full rounded-full bg-[#4578cc] px-14 md:w-fit lg:w-fit"
            onClick={() => dispatch(resetExchangeValues())}
          >
            Reset
          </Button>

          <div className="w-full flex-grow">
            <p className="block text-base md:text-2xl">
              {`${exchangeSlice.exchangeAmount} ${exchangeSlice.exchangeFrom} Equals ${exchangeData.data.conversion_result} ${exchangeSlice.exchangeTo}`}
            </p>
          </div>
        </div>
      )}
    </CardLayout>
  );
};

export default ExchangeFrom;
