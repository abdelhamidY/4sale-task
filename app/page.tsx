import ExchangeFrom from "@/components/home/exchangeForm/ExchangeForm";

export default function Home() {
  return (
    <main className="has-app-max-width container relative z-[2] flex min-h-screen w-full flex-col items-center justify-start gap-4 pt-28 dark:bg-gray-800">
      <h1 className="text-[60px] font-normal text-white">Money Exchange</h1>
      <div className="pt-8">
        <ExchangeFrom />
      </div>
    </main>
  );
}
