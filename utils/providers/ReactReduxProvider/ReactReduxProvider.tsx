"use client";

import { store } from "@/redux/redux.configration";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";

function ReactReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReactReduxProvider;
