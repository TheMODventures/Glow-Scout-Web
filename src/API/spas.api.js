import axiosInstance from "@/axiosInstance";


const getSpas= async ()=>{


    try {
        const response = await axiosInstance.get("/spas", {
            withCredentials: true,
          });
          return response;  
    } catch (error) {
        console.error("Error message: ", error.message);
    }
}


export {getSpas};