import axiosInstance from "@/axiosInstance";

export const fetchGoals = async () => {
    try {
      const response = await axiosInstance.get("/goals");
      return response.data.data;
    } catch (error) {
      console.error("Failed to fetch goals", error);
      return [];
    }
  };