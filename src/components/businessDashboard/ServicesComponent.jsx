import React, { useEffect, useState } from "react";
import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import axiosInstance from "@/axiosInstance";
import { Plus } from 'lucide-react';
import CreateTreatment from "./CreatTreatment";
import UpdateTreatment from "./UpdateTreatment";
import { creatTreatment } from "@/API/business.api";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import SkeletonCard from "../reuseableComponenet/SkeletonCard";

const ServicesComponent = () => {
  const [currentView, setCurrentView] = useState("list");
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [allTreatments, setAllTreatments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const currentUser = useSelector((state) => state.auth.user);


  useEffect(() => {
    getTreatments(currentPage);
  }, [currentPage]);

  const getTreatments = async (page) => {
    if (isFetching) return;
    setIsFetching(true);
    
    try {
      const response = await axiosInstance.get(`/spas/SimilarTreatments/${currentUser._id}`, {
        withCredentials: true,
      });
      const newTreatments = response.data.data.data;

      const filterTreatments = newTreatments.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));


      setAllTreatments((prevTreatments) => {
        const newUniqueTreatments = filterTreatments.filter(
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
      setIsFetching(false);
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
            {
              isFetching
                ? Array(8).fill().map((_, index) => <SkeletonCard key={index} />):
            
            allTreatments.map((item, index) => (
              <button key={index} onClick={() => handleEditClick(item)}>
                <TreatmentCard {...item} imageHeightWeb={"h-60"} />
              </button>
            ))}
            
          </div>
          <>
          {
              allTreatments.length===0 && (
                <div className="flex justify-center items-center h-10 w-full text-center font-raleway">
                  <p>You have not created any Treatment</p>
                </div>
              )
            }
          </>
          {hasNextPage && (
            <div className="flex justify-center items-center mt-10">
              <Button
                onClick={handleViewMore}
                variant="myCustom"
                className="px-6 rounded-full py-[20px] font-raleway font-bold"
                disabled={isFetching}
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
