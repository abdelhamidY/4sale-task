import ExchangeFrom from "@/components/home/exchangeForm/ExchangeForm";

export default function Home() {
  return (
    <main className="has-app-max-width container relative z-[2] flex min-h-screen w-full flex-col items-center justify-start gap-4 pt-28 dark:bg-gray-800">
      <div className="margin-auto flex justify-center">
        <h1 className="text-3xl font-semibold text-white lg:text-[60px]">
          Money Exchange
        </h1>
      </div>
      <div className="pt-8">
        <ExchangeFrom />
      </div>
    </main>
  );
}
