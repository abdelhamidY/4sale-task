"use client";
import { persistor } from "@/redux/redux.configration";
import { PersistGate } from "redux-persist/integration/react";
import { PropsWithChildren } from "react";
// import DefaultLoadingBoundary from "@/components/ReactBoundry";

const ReactReduxParsistProvider = ({ children }: PropsWithChildren) => {
  return (
    <PersistGate loading={<></>} persistor={persistor}>
      {children}
    </PersistGate>
  );
};

export default ReactReduxParsistProvider;
