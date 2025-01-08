import * as yup from "yup";
function useOtpValidation() {
  return yup.array().required("OTP is required").min(6, "OTP must be 6 digits");
}

export default useOtpValidation;
