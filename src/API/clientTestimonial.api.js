import axiosInstance from "@/axiosInstance";

export const getClientTestimonials = async () => {
  try {
    const response = await axiosInstance.get('/api/testimonials'); // Use the actual endpoint for testimonials
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error; 
  }
};
