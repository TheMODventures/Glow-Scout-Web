"use client";
import SettingComponent from "@/components/reuseableComponenet/Setting";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/user/authSlice";
import axiosInstance from "@/axiosInstance";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation"; 
import { parseCookies } from "nookies";

const Setting = () => {
  const user = useSelector(selectUser);
  const router = useRouter();
  const { toast } = useToast();
  const cookies=parseCookies();
  let accessToken = cookies.accessToken;
  

  const [userUpdateData, setUserUpdateData] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    alternateEmail: "",
    profileImage: "",
  });

  const [details, setDetails] = useState([
    { placeholder: "Enter your name", value: "" },
    { placeholder: "Enter your city", value: "" },
  ]);
  const [imgUrl, setImgUrl]= useState()
  const [contactDetail, setContactDetail] = useState([
    { placeholder: "Mobile/Telephone", value: "" },
    { placeholder: "Facebook handle", value: "" },
    { placeholder: "Email address", value: "" },
    { placeholder: "Instagram handle", value: "" },
    { placeholder: "Alternate Email address", value: "" },
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

  const getUser = async () => {
    try {
      const response = await axiosInstance.get("auth/getCurrentUser", {
        withCredentials: true,
      });
      setImgUrl(response.data.data.profileImage);
      setUserUpdateData({
        name: response.data.data.name,
        city: response.data.data.city,
        phone: response.data.data.phone,
        email: response.data.data.email,
        alternateEmail: response.data.data.alternateEmail,
        profileImage: response.data.data.profileImage,
      });
    } catch (error) {
      console.log(error);
    }
  };

  
  
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setDetails([
      { placeholder: "Enter your name", value: userUpdateData.name },
      { placeholder: "Enter your city", value: userUpdateData.city },
    ]);
  }, [userUpdateData.name, userUpdateData.city]);

  useEffect(() => {
    setContactDetail([
      { placeholder: "Mobile/Telephone", value: userUpdateData?.phone || "" },
      { placeholder: "Facebook handle", value: "" },
      { placeholder: "Email address", value: userUpdateData?.email || ""},
      { placeholder: "Instagram handle", value: "" },
      {
        placeholder: "Alternate Email address",
        value: userUpdateData.alternateEmail,
      },
      { placeholder: "Snapchat handle", value: "" },
    ]);
  }, [userUpdateData.phone, userUpdateData.email, userUpdateData.alternateEmail]);

  const handleOnclick = () => {
    return setUserUpdateData({
      name: "",
      city: "",
      phone: "",
      email: "",
      alternateEmail: "",
      profileImage: "",
    });
  };

  const showToast = (description) => {
    toast({
      description: (
        <div
          className={`mt-2 w-[280px] rounded-md border-2 border-red-500 p-2`}
        >
          <p className={`text-red-500 text-base text-center`}>{description}</p>
        </div>
      ),
    });
  };

  const showToastSuccess = (description) => {
    toast({
      description: (
        <div
          className={`mt-2 w-[280px] rounded-md border-2 border-green-500 p-2`}
        >
          <p className={`text-green-500 text-base text-center`}>
            {description}
          </p>
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
      userUpdateData.name?.trim() === "" ||
      userUpdateData.city?.trim() === "" ||
      userUpdateData.phone?.trim() === "" ||
      userUpdateData.email?.trim() === "" ||
      userUpdateData.alternateEmail?.trim() === "" ||
      userUpdateData.profileImage === ""
    ) {
      showToast("All fields must be filled out.");
      return;
    }
    if (userUpdateData.email === userUpdateData.alternateEmail) {
      showToast("Email and Alternate Email can't be same.");
      return;
    }
    if (errors.name) {
      showToast(errors.name);
      return;
    }
    if (errors.phone) {
      showToast(errors.phone);
      return;
    }
    if (errors.email) {
      showToast(errors.email);
      return;
    }
    if (errors.alternateEmail) {
      showToast(errors.alternateEmail);
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

      showToastSuccess("User details updated successfully!");
      console.log("API Response: ", response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        showToast(
          `Failed to update user details: ${error.response.data.message}`
        );
      } else {
        showToast("An unexpected error occurred. Please try again later.");
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
        handleOnclick={handleOnclick}
        imgUrl={imgUrl}
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
