import React from "react";
import { NoContentProps } from "./types";

const NoContentContainer = ({
  children,
  items,
  noContentComponent,
}: NoContentProps) => {
  if (items?.length === 0) {
    return noContentComponent;
  }

  return children;
};

export default React.memo(NoContentContainer);
