import { PropsWithChildren, ReactElement } from "react";

export type NoContentProps = PropsWithChildren<{
  noContentComponent: ReactElement;
  items: Array<any>;
}>;
