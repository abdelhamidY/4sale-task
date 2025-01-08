import * as yup from "yup";

function useEmailValidation() {
  return yup
    .string()
    .required("Email is required")
    .email("Invalid email format");
}

export default useEmailValidation;
