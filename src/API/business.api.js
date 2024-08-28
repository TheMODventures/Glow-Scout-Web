
import axiosInstance from "@/axiosInstance";

const creatTreatment = async (data) => {
  try {
    const response = await axiosInstance.post("/treatment/create", data, {
      withCredentials: true, 
      headers: {
        "Content-Type": "multipart/form-data" 
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
      console.error("Status code:", error.response.status);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
  }
};

const getTreatment = async (id) => {
  try {
    const response = await axiosInstance.get(`/treatment/${id}`, {
      withCredentials: true  
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching treatment data:", error);
  }
};

const updateTreatment = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/treatment/update/${id}`, data, {
      withCredentials: true,  
      headers: {
        "Content-Type": "multipart/form-data"  
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating treatment:", error);
  }
};

export { creatTreatment, getTreatment, updateTreatment };
