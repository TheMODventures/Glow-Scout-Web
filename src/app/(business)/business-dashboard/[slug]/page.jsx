"use client";
import React, { useState } from "react";
import AnalyticsComponent from "@/components/businessDashboard/AnalyticsComponent";
import ServicesComponent from "@/components/businessDashboard/ServicesComponent";
import SettingComponent from "@/components/reuseableComponenet/Setting";

const Page = () => {
  const [activeTab, setActiveTab] = useState("analytics");

  const [details, setDetails] = useState([
    { placeholder: "Enter Spa name", value:  "" },
    { placeholder: "Enter address", value: "" , icon: 'location'},
  ]);

  const [contactDetail, setContactDetail] = useState([
    { placeholder: "Mobile/Telephone", value: "" },
    { placeholder: "Facebook handle", value: "" },
    { placeholder: "Email address", value:  "" },
    { placeholder: "Instagram handle", value: "" },
    { placeholder: "Alternate Email address", value: "" },
    { placeholder: "Snapchat handle", value: "" },
  ]);

  const handleDetailsChange = (index, value) => {
    setDetails((prevDetails) =>
      prevDetails.map((detail, i) =>
        i === index ? { ...detail, value } : detail
      )
    );
    // console.log(details);
    
  };

  const handleContactDetailChange = (index, value) => {
    setContactDetail((prevContactDetail) =>
      prevContactDetail.map((contact, i) =>
        i === index ? { ...contact, value } : contact
      )
    );
    // console.log(contactDetail);
    
  };
  const handleSave = () =>{
    console.log(details);
    console.log(contactDetail);
  }
  const renderContent = () => {
    switch (activeTab) {
      case "analytics":
        return <AnalyticsComponent />;
      case "services":
        return <ServicesComponent />;
      case "account":
        return (
          <SettingComponent
            type="business"
            details={details}
              contactDetail={contactDetail}
              onDetailsChange={handleDetailsChange}
              onContactDetailChange={handleContactDetailChange}
              saveBtnFunc = {handleSave}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full  justify-center items-center mt-10 px-4 md:px-0">
      <div className="w-full max-w-[500px] flex flex-col items-center">
        <div className="py-4 rounded-full px-6 shadow-lg md:mb-6 flex justify-center items-center w-full  space-x-5 bg-lightbg m-auto">
          <button
            onClick={() => setActiveTab("analytics")}
            className={`rounded-full text-base  font-raleway text-center border-2 border-darkMahron w-full h-10 text-darkMahron transition-colors duration-300 ${
              activeTab === "analytics" ? "bg-darkMahron text-white" : ""
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`rounded-full text-base  font-raleway text-center border-2 border-darkMahron w-full h-10 text-darkMahron transition-colors duration-300 ${
              activeTab === "services" ? "bg-darkMahron text-white" : ""
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab("account")}
            className={`rounded-full  border-2 text-base font-raleway  text-center border-darkMahron w-full h-10 text-darkMahron transition-colors duration-300 ${
              activeTab === "account" ? "bg-darkMahron text-white" : ""
            }`}
          >
            Settings
          </button>
        </div>
        <div className="w-full md:min-w-[800px] lg:min-w-[900px] xl:min-w-[1100px] ">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Page;
