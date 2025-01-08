import CustomToast from "@/components/shared/toast/Toast";
import { toast } from "react-toastify";
import { GaragHeroToastProps } from "./types";
const GaragHeroToast = ({
  type,
  title,
  description,
  toastId,
}: GaragHeroToastProps) => {
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

export default GaragHeroToast;
