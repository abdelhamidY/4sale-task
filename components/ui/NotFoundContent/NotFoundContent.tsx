import { EmptySvgrepoCom } from "@/icons";

const NotFoundContent = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-1 dark:bg-gray-900">
      <EmptySvgrepoCom />
      <span className="text-center text-sm font-medium text-[#767C85]">
        No Items Found
      </span>
    </div>
  );
};
export default NotFoundContent;
