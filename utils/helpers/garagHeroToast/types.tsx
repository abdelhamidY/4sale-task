import { ReactElement } from "react";

export type GaragHeroToastProps = {
  type: "success" | "error" | "warning" | "info" | "default";
  title?: string;
  description?: string;
  toastId?: string;
};

export type MapTypeToComponent = (
  params: Omit<GaragHeroToastProps, "type">,
) => Record<GaragHeroToastProps["type"], ReactElement>;
