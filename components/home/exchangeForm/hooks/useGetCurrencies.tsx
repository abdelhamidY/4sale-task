import { getAllCurrencies } from "@/network/apis/Currencies.api";
import { useQuery } from "react-query";

const useGetCurrencies = () => {
  return useQuery("currencies", () => getAllCurrencies(), {
    enabled: true,
  });
};

export default useGetCurrencies;
