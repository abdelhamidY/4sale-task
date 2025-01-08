import * as yup from "yup";

function usePasswordValidation() {
  return yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(255, "Password must not exceed 255 characters");
}

export default usePasswordValidation;
