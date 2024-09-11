"use client";

import axiosInstance from "@/axiosInstance";
import { useRouter } from "next/navigation";
import { parseCookies, destroyCookie } from "nookies";

// const router = useRouter();

const verifyOtp = async (data) => {
  let currentEmail;
  if (typeof window !== "undefined") {
    currentEmail = localStorage.getItem("email");
  }
  try {
    const otpNumber = Number(data.otp);
    console.log(otpNumber);
    console.log(currentEmail);
    const response = await axiosInstance.put("/auth/verify-otp", {
      email: currentEmail,
      otp: otpNumber,
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

const resetPassword = async (data) => {
  let resetPasswordToken;
    const cookies = parseCookies();
    resetPasswordToken = cookies.resetPasswordToken;
  try {
    const response = await axiosInstance.put(
      "/auth/reset-password",
      { password: data.password },
      { headers: { Authorization: `Bearer ${resetPasswordToken}` } }
    );
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


const logout = async () => {  
  try {
    await axiosInstance.post("/auth/logout");
    localStorage.removeItem("email");
    destroyCookie(null, "resetPasswordToken");
    destroyCookie(null, "accessToken");
    localStorage.clear();
    console.log("User logged out successfully");
    // router.push("/auth/login");
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


const updateUser = async (formData)=>{
  try {

    const response = await axiosInstance.put("/users/update", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating  user:", error);
  } 
}


export { verifyOtp, resetPassword ,logout ,updateUser };
