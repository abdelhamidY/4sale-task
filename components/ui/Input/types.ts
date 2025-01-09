import { HtmlHTMLAttributes } from "react";

export interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  id?: string;
  type?: string;
  placeholder?: string;
    error?: string;
    value ?: string;
}
