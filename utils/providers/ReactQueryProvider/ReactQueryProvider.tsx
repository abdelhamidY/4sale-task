"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryProviderProps } from "./types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
