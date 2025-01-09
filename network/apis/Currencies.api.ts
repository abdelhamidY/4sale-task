import { AppApis } from "@/utils/constants/appApis";
import axios from "../axios";
import { getExchangeValueParams } from "./Currencies.types";
import { Exchange } from "../models/Exchange";

export const getAllCurrencies = async () => {
  return await axios.get(AppApis.home.getCurrencies);
};

export const getExchangeAmount = async (params: getExchangeValueParams) => {
  return await axios.get<Exchange>(
    `${AppApis.home.getExchangeAmount}/${params.from}/${params.to}/${params.amount}`,
  );
};
