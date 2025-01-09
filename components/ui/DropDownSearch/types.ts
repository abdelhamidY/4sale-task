export type DropDownProps = {
  label: string;
  name: string;
  anotherExchange: string;
  items: string[];
  placeholder?: string;
  value: string;
  onChange: (selectedValue: string) => void;
};
