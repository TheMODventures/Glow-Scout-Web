"use client";
import SettingComponent from "@/components/reuseableComponenet/Setting";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/auth/authSlice";
import axiosInstance from "@/axiosInstance";
const Setting = () => {
  const user = useSelector(selectUser);
  const [userUpdateData, setUserUpdateData] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    alternateEmail: "",
    profileImage: "",
  });

  const [details, setDetails] = useState([
    { placeholder: "Enter your name", value: userUpdateData.name },
    { placeholder: "Enter your city", value: userUpdateData.city },
  ]);

  const [contactDetail, setContactDetail] = useState([
    { placeholder: "Mobile/Telephone", value: userUpdateData.phone },
    { placeholder: "Facebook handle", value: "" },
    { placeholder: "Email address", value: userUpdateData.email },
    { placeholder: "Instagram handle", value: "" },
    {
      placeholder: "Alternate Email address",
      value: userUpdateData.alternateEmail,
    },
    { placeholder: "Snapchat handle", value: "" },
  ]);

  const handleDetailsChange = (index, value) => {
    const newDetails = details.map((detail, i) =>
      i === index ? { ...detail, value } : detail
    );
    setDetails(newDetails);

    const updatedData = { ...userUpdateData };
    if (index === 0) {
      updatedData.name = value;
    } else if (index === 1) {
      updatedData.city = value;
    }
    setUserUpdateData(updatedData);
  };

  const handleContactDetailChange = (index, value) => {
    const newContactDetail = contactDetail.map((contact, i) =>
      i === index ? { ...contact, value } : contact
    );
    setContactDetail(newContactDetail);

    const updatedData = { ...userUpdateData };
    if (index === 0) {
      updatedData.phone = value;
    } else if (index === 2) {
      updatedData.email = value;
    } else if (index === 4) {
      updatedData.alternateEmail = value;
    }
    setUserUpdateData(updatedData);
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userUpdateData.name);
      formData.append("city", userUpdateData.city);
      formData.append("phone", userUpdateData.phone);
      formData.append("email", userUpdateData.email);
      formData.append("alternateEmail", userUpdateData.alternateEmail);

      if (userUpdateData.profileImage) {
        formData.append("profileImage", userUpdateData.profileImage);
      }

      const response = await axiosInstance.put("/users/update", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("API Response: ", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // const reader = new FileReader();
      // reader.onloadend = () => {
      setUserUpdateData((prevData) => ({
        ...prevData,
        profileImage: file,
      }));
      // };
      // reader.readAsDataURL(file); // Convert file to base64 string
    }
  };
  return (
    <>
      <SettingComponent
        type="user"
        details={details}
        reviews={[
          { name: "Radiant Serenity", rating: 0 },
          { name: "Crystal Calm", rating: 2 },
          { name: "Eternal Bliss", rating: 3 },
          { name: "Heavenly Escape", rating: 4 },
          { name: "Radiant Serenity", rating: 4 },
          { name: "Crystal Calm", rating: 2 },
          { name: "Eternal Bliss", rating: 3 },
        ]}
        contactDetail={contactDetail}
        onDetailsChange={handleDetailsChange}
        onContactDetailChange={handleContactDetailChange}
        saveBtnFunc={handleSave}
        onImageChange={handleImageChange}
      />
    </>
  );
};

export default Setting;
