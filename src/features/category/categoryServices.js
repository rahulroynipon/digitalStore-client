import axiosInstance from "./../../lib/axiosInstance";

const getCategory = async () => {
  try {
    const reponse = await axiosInstance.get("/category");
    return reponse;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const categoryServices = {
  getCategory,
};
