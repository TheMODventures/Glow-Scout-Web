import React, { useEffect, useState } from "react";
import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import axiosInstance from "@/axiosInstance";
import { Plus } from 'lucide-react';
import CreateTreatment from "./CreatTreatment";
import UpdateTreatment from "./UpdateTreatment";
import { creatTreatment } from "@/API/business.api";

const ServicesComponent = () => {
  const [currentView, setCurrentView] = useState("list");
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [allTreatment, setAllTreatment] = useState([]);

  useEffect(() => {
    getTreatments();
  }, []);

  const getTreatments = async () => {
    try {
      const response = await axiosInstance.get("/treatment", {
        withCredentials: true,
      });
      setAllTreatment(response.data.data.data);
      console.log(response.data.data.data)
    } catch (error) {
      console.error("Error fetching treatments: ", error);
    }
  };

  const handleAddClick = () => {
    setCurrentView("add");
  };

  const handleEditClick = (treatment) => {
    setSelectedTreatment(treatment);
    console.log("Selected Treatment: ", treatment);
    setCurrentView("edit");
  };

  const handleDiscard = () => {
    setCurrentView("list");
  };

  return (
    <div className=" my-5">
      {currentView === "list" && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-2">
            {allTreatment.map((item, index) => (
              <button key={index} onClick={() => handleEditClick(item)}>
                <TreatmentCard {...item} imageHeightWeb={"h-60"} />
              </button>
            ))}
          </div>
          <div className="flex justify-end items-end sticky bottom-3 left-3">
            <button
              onClick={handleAddClick}
              className="py-2 px-2 text-xl bg-darkMahron text-white rounded-full shadow-md transform transition-transform hover:scale-105"
            >
              <Plus size={32} color="#F6E9CE" strokeWidth={2.5} />
            </button>
          </div>
        </>
      )}

      {currentView === "add" && <CreateTreatment onSubmit={creatTreatment} onDiscard={handleDiscard}/>}

      {currentView === "edit"  && (
        <UpdateTreatment treatment={selectedTreatment} onDiscard={handleDiscard}/>
      )}
    </div>
  );
};

export default ServicesComponent;
