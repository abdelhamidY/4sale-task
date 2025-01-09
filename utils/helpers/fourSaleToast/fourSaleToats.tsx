import CustomToast from "@/components/shared/toast/Toast";
import { toast } from "react-toastify";
import { fourSaleToastProps } from "./types";
const fourSaleToast = ({
  type,
  title,
  description,
  toastId,
}: fourSaleToastProps) => {
  return toast(
    <CustomToast title={title} description={description} type={type} />,
    {
      type,

      autoClose: 10000,
      hideProgressBar: false,

      icon: false,
      pauseOnHover: true,
      toastId,
      closeOnClick: true,
    },
  );
};

export default fourSaleToast;
