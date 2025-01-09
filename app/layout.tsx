import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react/components/ThemeModeScript";
import "./globals.css";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import DefaultLoadingBoundary from "@/components/ui/DefualtLoadingBoundary/DefaultLoadingBoundry";

const ReactReduxProvider = dynamic(
  () => import("@/utils/providers/ReactReduxProvider/ReactReduxProvider"),
);

const ReactToastifyProvider = dynamic(
  () => import("@/utils/providers/ReactToastifyProvider/ReactToastifyProvider"),
);

const ReactQueryProvider = dynamic(
  () => import("@/utils/providers/ReactQueryProvider/ReactQueryProvider"),
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exchange App - Best Currency Rates",
  description:
    "Easily exchange currencies and find the best rates. Reliable, fast, and up-to-date currency converter.",
  keywords: [
    "currency exchange",
    "exchange rates",
    "forex",
    "currency converter",
    "best rates",
  ],
  openGraph: {
    title: "Exchange App - Best Currency Rates",
    description:
      "Exchange currencies quickly and efficiently with our advanced app. Stay updated with live rates.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <Suspense fallback={<DefaultLoadingBoundary />}>
          <ReactReduxProvider>
            <ReactQueryProvider>
              <ReactToastifyProvider>{children}</ReactToastifyProvider>
            </ReactQueryProvider>
          </ReactReduxProvider>
        </Suspense>
      </body>
    </html>
  );
}
