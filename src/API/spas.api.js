import axiosInstance from "@/axiosInstance";

const getSpas = async () => {
  try {
    const response = await axiosInstance.get("/spas", {
      withCredentials: true,
    });
    console.log( response.data.data.data    );
    return response.data.data.data;
    
  } catch (error) {
    console.error("Error message: ", error.message);
  }
};

const updateSpa = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/spas/update/${id}`, data, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating Business spa user:", error);
  }
};

export { getSpas, updateSpa };
