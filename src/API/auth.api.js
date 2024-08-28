"use client";

import axiosInstance from "@/axiosInstance";

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
  if (typeof window !== "undefined") {
    resetPasswordToken = localStorage.getItem("resetPasswordToken");
  }
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

export { verifyOtp, resetPassword };
