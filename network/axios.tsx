import fourSaleToast from "@/utils/helpers/fourSaleToast/fourSaleToats";
import axiosDefault from "axios";
const axios = axiosDefault.create({
  headers: {
    Accept: "application/json",
    withCredentials: false,
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    fourSaleToast({
      type: "error",
      title: error.code,
      description: error.message,
    });

    return Promise.reject(error);
  },
);

export default axios;
