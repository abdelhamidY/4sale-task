"use client";

import { ToastType } from "./types";

function CustomToast({ title, description, type }: ToastType) {
  const mapTypographyColors: Record<ToastType["type"], string> = {
    success: "text-green-600",
    error: "text-red-600",
    default: "text-gray-700",
    info: "text-blue-600",
    warning: "text-yellow-600",
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        {title && (
          <p
            className={`text-sm font-semibold leading-tight ${mapTypographyColors[type]}`}
          >
            {title}
          </p>
        )}
        {description && (
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
    </>
  );
}

export default CustomToast;
