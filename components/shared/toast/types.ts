import { fourSaleToastProps } from "@/utils/helpers/fourSaleToast/types";
export type ToastType = Pick<
fourSaleToastProps,
  "title" | "description" | "type"
>;
