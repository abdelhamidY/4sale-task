import { Label } from "flowbite-react/components/Label";
import { TextInput } from "flowbite-react/components/TextInput";
import { InputProps } from "./types";

const Input = ({ className, ...props }: InputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      ".",
    ];

    const value = (e.target as HTMLInputElement).value;

    if (!/^\d$/.test(e.key) && e.key !== "." && !allowedKeys.includes(e.key)) {
      e.preventDefault();
      return;
    }

    if (e.key === "." && value.includes(".")) {
      e.preventDefault();
    }
  };
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={props.name} value={props.label} />
      <TextInput
        type="text"
        className={`custom-input ${className}`}
        onKeyDown={handleKeyDown}
        {...props}
      />
    </div>
  );
};

export default Input;
