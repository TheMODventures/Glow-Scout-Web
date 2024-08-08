"use client";
import SettingComponent from "@/components/reuseableComponenet/Setting";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/auth/authSlice";
import axiosInstance from "@/axiosInstance";
import { useToast } from "@/components/ui/use-toast";

const Setting = () => {
  const user = useSelector(selectUser);
  const { toast } = useToast();
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
    { placeholder: "Alternate Email address", value: userUpdateData.alternateEmail },
    { placeholder: "Snapchat handle", value: "" },
  ]);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    alternateEmail: "",
  });

  const nameRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^\d{1,12}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showToast = (title, description, color = "red") => {
    toast({
      title: <p className={`text-${color}-500 text-xl`}>{title}</p>,
      description: (
        <div className={`mt-2 w-[280px] rounded-md border-2 border-${color}-500 p-2`}>
          <p className={`text-${color}-500 text-lg text-center`}>{description}</p>
        </div>
      ),
    });
  };

  const handleDetailsChange = (index, value) => {
    const newDetails = details.map((detail, i) =>
      i === index ? { ...detail, value } : detail
    );
    setDetails(newDetails);

    const updatedData = { ...userUpdateData };
    const updatedErrors = { ...errors };

    if (index === 0) {
      if (nameRegex.test(value)) {
        updatedData.name = value;
        updatedErrors.name = "";
      } else {
        updatedErrors.name = "Name doesn't contain any number";
      }
    } else if (index === 1) {
      updatedData.city = value;
    }

    setUserUpdateData(updatedData);
    setErrors(updatedErrors);
  };

  const handleContactDetailChange = (index, value) => {
    const newContactDetail = contactDetail.map((contact, i) =>
      i === index ? { ...contact, value } : contact
    );
    setContactDetail(newContactDetail);

    const updatedData = { ...userUpdateData };
    const updatedErrors = { ...errors };

    if (index === 0) {
      if (phoneRegex.test(value)) {
        updatedData.phone = value;
        updatedErrors.phone = "";
      } else {
        updatedErrors.phone = "Invalid phone no, phone is >=12 numbers";
      }
    } else if (index === 2) {
      if (emailRegex.test(value)) {
        updatedData.email = value;
        updatedErrors.email = "";
      } else {
        updatedErrors.email = "Invalid Email";
      }
    } else if (index === 4) {
      if (emailRegex.test(value)) {
        updatedData.alternateEmail = value;
        updatedErrors.alternateEmail = "";
      } else {
        updatedErrors.alternateEmail = "Invalid alternate email";
      }
    }

    setUserUpdateData(updatedData);
    setErrors(updatedErrors);
  };

  const handleSave = async () => {
    if (
      userUpdateData.name.trim() === "" ||
      userUpdateData.city.trim() === "" ||
      userUpdateData.phone.trim() === "" ||
      userUpdateData.email.trim() === "" ||
      userUpdateData.alternateEmail.trim() === "" ||
      userUpdateData.profileImage === ""
    ) {
      showToast("Error", "All fields must be filled out.","red");
      return;
    }
    if (userUpdateData.email === userUpdateData.alternateEmail) {
      showToast("Error", "Email and Alternate Email can't be same.","red");
      return;
    }
    if ( errors.name ) {
      showToast("Error", errors.name,"red");
      return;
    }
    if ( errors.phone ) {
      showToast("Error", errors.phone,"red");
      return;
    }
    if ( errors.email ) {
      showToast("Error", errors.email,"red");
      return;
    }
    if ( errors.alternateEmail ) {
      showToast("Error", errors.alternateEmail,"red");
      return;
    }
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
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      showToast("Success", "User details updated successfully!", "green");
      console.log("API Response: ", response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        showToast("Error", `Failed to update user details: ${error.response.data.message}`);
      } else {
        showToast("Error", "An unexpected error occurred. Please try again later.", "red");
      }
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserUpdateData((prevData) => ({
        ...prevData,
        profileImage: file,
      }));
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
