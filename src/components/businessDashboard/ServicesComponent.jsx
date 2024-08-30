import React, { useEffect, useState } from "react";
import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import axiosInstance from "@/axiosInstance";
import { Plus } from 'lucide-react';
import CreateTreatment from "./CreatTreatment";
import UpdateTreatment from "./UpdateTreatment";
import { creatTreatment } from "@/API/business.api";
import { Button } from "../ui/button";

const ServicesComponent = () => {
  const [currentView, setCurrentView] = useState("list");
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [allTreatments, setAllTreatments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    getTreatments(currentPage);
  }, [currentPage]);

  const getTreatments = async (page) => {
    if (isFetching) return; // Prevents multiple API calls for the same page
    setIsFetching(true);
    
    try {
      const response = await axiosInstance.get(`/treatment?page=${page}`, {
        withCredentials: true,
      });
      const newTreatments = response.data.data.data;

      setAllTreatments((prevTreatments) => {
        // Filter out any duplicate treatments based on a unique identifier, e.g., id
        const newUniqueTreatments = newTreatments.filter(
          (newTreatment) =>
            !prevTreatments.some(
              (existingTreatment) => existingTreatment.id === newTreatment.id
            )
        );
        return [...prevTreatments, ...newUniqueTreatments];
      });

      setHasNextPage(response.data.data.pagination.hasNextPage);
    } catch (error) {
      console.error("Error fetching treatments: ", error);
    } finally {
      setIsFetching(false); // Reset fetching status
    }
  };

  const handleAddClick = () => {
    setCurrentView("add");
  };

  const handleEditClick = (treatment) => {
    setSelectedTreatment(treatment);
    setCurrentView("edit");
  };

  const handleDiscard = () => {
    setCurrentView("list");
  };

  const handleViewMore = () => {
    if (hasNextPage && !isFetching) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="my-5">
      {currentView === "list" && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-2">
            {allTreatments.map((item, index) => (
              <button key={index} onClick={() => handleEditClick(item)}>
                <TreatmentCard {...item} imageHeightWeb={"h-60"} />
              </button>
            ))}
          </div>
          {hasNextPage && (
            <div className="flex justify-center items-center mt-10">
              <Button
                onClick={handleViewMore}
                variant="myCustom"
                className="px-6 rounded-full py-[20px] font-raleway font-bold"
                disabled={isFetching} // Disable the button while fetching data
              >
                {isFetching ? "Loading..." : "View More"}
              </Button>
            </div>
          )}
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

      {currentView === "add" && <CreateTreatment onSubmit={creatTreatment} onDiscard={handleDiscard} />}

      {currentView === "edit" && <UpdateTreatment treatment={selectedTreatment} onDiscard={handleDiscard} />}
    </div>
  );
};

export default ServicesComponent;
