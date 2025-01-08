import { GaragHeroToastProps } from "@/utils/helpers/garagHeroToast/types";

export type ToastType = Pick<
  GaragHeroToastProps,
  "title" | "description" | "type"
>;
