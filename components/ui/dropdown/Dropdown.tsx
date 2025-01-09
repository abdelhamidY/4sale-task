"use client";
import { Dropdown as FlowbiteDropDown } from "flowbite-react/components/Dropdown";
import { Label } from "flowbite-react/components/Label";
import React, { useState } from "react";

const DropDown = ({
  label,
  name,
  items,
  onChange,
  currentValue,
}: {
  label: string;
  name: string;
  currentValue: string;
  items: string[];
  onChange?: (selectedValue: string) => void;
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const disableStyleMap: Record<string, string> = {
    true: "text-gray-400 cursor-not-allowed",
    false: "cursor-pointer",
  };

  const handleSelect = (item: string) => {
    if (item === currentValue) {
      return;
    }

    setSelectedItem(item);
    if (onChange) {
      onChange(item);
    }
  };

  // Proper filtering of items based on search term
  const filteredItems = searchTerm
    ? items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : items; // If searchTerm is empty, return all items

  console.log({ filteredItems: filteredItems.length });

  return (
    <div className="dropdown flex flex-col gap-1">
      <Label htmlFor={name} value={label} />

      <FlowbiteDropDown
        id={name}
        dismissOnClick={true}
        label={
          <div className="min-w-[250px] truncate text-left text-black">
            {selectedItem || "Select an option"}
          </div>
        }
        className="dropdown max-h-[200px] min-h-[200px] min-w-[300px] max-w-[300px] overflow-y-scroll"
      >
        {/* Search Input */}

        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FlowbiteDropDown.Item
              key={item}
              href="#"
              onClick={() => handleSelect(item)}
              className={`${
                item === selectedItem ? "bg-gray-100" : ""
              } ${disableStyleMap[item === currentValue ? "true" : "false"]}`}
            >
              {item}
            </FlowbiteDropDown.Item>
          ))
        ) : (
          <div className="p-2 text-center text-gray-400">No items found</div>
        )}
      </FlowbiteDropDown>
    </div>
  );
};

export default React.memo(DropDown);
