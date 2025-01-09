import { getExchangeAmount } from "@/network/apis/Currencies.api";
import { getExchangeValueParams } from "@/network/apis/Currencies.types";
import { useQuery } from "react-query";

const useExchangeCurrency = ({
  from,
  to,
  amount,
  enabled,
}: getExchangeValueParams & { enabled: boolean }) => {
  return useQuery(
    `get-exchnage-${from}-${to}-${amount}`,
    () =>
      getExchangeAmount({
        from,
        to,
        amount,
      }),
    {
      enabled: enabled,
    },
  );
};

export default useExchangeCurrency;
