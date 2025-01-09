"use clients";
import { Label } from "flowbite-react/components/Label";
import React, { useEffect, useMemo, useRef, useState } from "react";
import NoContentContainer from "../NoContentContainer/NoContentContainer";
import NotFoundContent from "../NotFoundContent/NotFoundContent";
import { DropDownProps } from "./types";

const DropdownSearch = ({
  anotherExchange,
  label,
  name,
  items,
  onChange,
  placeholder,
  value,
}: DropDownProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredItems = useMemo(
    () =>
      items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [items, searchTerm],
  );
  const handleSelect = (item: string) => {
    if (onChange) {
      onChange(item);
      setDropdownOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const disableStyleMap: Record<string, string> = {
    true: "text-gray-400 cursor-not-allowed",
    false: "cursor-pointer text-gray-700",
  };

  const isItemDisabled = (item: string) => item === anotherExchange;

  return (
    <div className="relative" ref={dropdownRef}>
      <div>
        <Label htmlFor={name} value={label} />
      </div>
      <button
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
        aria-labelledby="dropdownSearchButton"
        id="dropdownSearchButton"
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between rounded-lg border bg-white px-5 py-2.5 text-center text-sm font-medium text-black dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {value ? value : placeholder}
        <svg
          className="ms-3 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div
          id="dropdownSearch"
          className="absolute z-10 w-full rounded-lg bg-white shadow dark:bg-gray-700"
        >
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search item"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
          </div>
          <ul
            role="listbox"
            className="h-28 overflow-y-auto px-3 pb-3 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSearchButton"
          >
            <NoContentContainer
              items={filteredItems}
              noContentComponent={<NotFoundContent />}
            >
              {filteredItems.map((item) => (
                <li key={item}>
                  <div
                    className={`s flex items-center rounded ps-2 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                      item === value ? "bg-gray-100 text-white" : ""
                    } disabled:cursor-not-allowed disabled:opacity-50`}
                  >
                    <span
                      className={`ms-2 w-full cursor-not-allowed rounded py-2 text-sm font-medium dark:text-gray-300 ${
                        disableStyleMap[
                          item === anotherExchange ? "true" : "false"
                        ]
                      }`}
                      onClick={() =>
                        !isItemDisabled(item) && handleSelect(item)
                      }
                    >
                      {item}
                    </span>
                  </div>
                </li>
              ))}
            </NoContentContainer>
          </ul>
        </div>
      )}
    </div>
  );
};

export default React.memo(DropdownSearch);
