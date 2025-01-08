import { AppApis } from "@/utils/constants/appApis";
import { appRoutes } from "@/utils/constants/appRoutes";
import GaragHeroToast from "@/utils/helpers/garagHeroToast/garageHeroToast";
import axiosDefault from "axios";
const axios = axiosDefault.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  },
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const status = error?.response?.status;
    const message = error?.response?.data?.detail;
    const apiUrl = error?.config?.url;

    if (status === 403) {
      GaragHeroToast({
        type: "error",
        title: "Error",
        description: error.response.data.detail,
      });
    }

    return Promise.reject(error);
  },
);

export default axios;
