import { ReactElement } from "react";

export type fourSaleToastProps = {
  type: "success" | "error" | "warning" | "info" | "default";
  title?: string;
  description?: string;
  toastId?: string;
};

export type MapTypeToComponent = (
  params: Omit<fourSaleToastProps, "type">,
) => Record<fourSaleToastProps["type"], ReactElement>;
