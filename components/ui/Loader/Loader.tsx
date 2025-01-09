"use client";

import React from "react";

type LoaderProps = {
  error?: boolean;
  isLoading?: boolean;
  pastDelay?: boolean;
  retry?: () => void;
  timedOut?: boolean;
  isSmall?: boolean;
};

const Loader = ({
  error,
  isLoading,
  pastDelay,
  retry,
  timedOut,
  isSmall,
}: LoaderProps) => {
  if (isLoading) {
    return (
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="flex flex-col items-center">
          <svg
            role="svg"
            className="h-10 w-10 animate-spin text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <span className="mt-2 text-white">Loading...</span>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className="text-center">
        <p className="text-red-500">Error!</p>
        <button
          onClick={retry}
          className="mt-2 rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
        >
          Retry
        </button>
      </div>
    );
  } else if (timedOut) {
    return (
      <div className="text-center">
        <p className="text-yellow-500">Taking a long time...</p>
        <button
          onClick={retry}
          className="mt-2 rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
        >
          Retry
        </button>
      </div>
    );
  } else if (pastDelay) {
    return (
      <div className="text-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Loader;
