import GaragHeroToast from "@/utils/helpers/garagHeroToast/garageHeroToast";
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
    GaragHeroToast({
      type: "error",
      title: error.code,
      description: error.message,
    });

    return Promise.reject(error);
  },
);

export default axios;
