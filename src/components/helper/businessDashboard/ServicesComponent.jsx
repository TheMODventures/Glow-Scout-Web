import React from "react";
import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";

const ServicesComponent = () => {
  let dummyData = [
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed.",
      label: "Lorem Ipsum",
    },
  ];
  return (
    <div className="container my-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-2">
        {dummyData.map((item, index) => (
          <TreatmentCard key={index} {...item} imageHeightWeb={"[100px]"} />
        ))}
      </div>
      <div className=" flex justify-end items-end sticky bottom-3 left-3">
        <button className="py-2 px-4 bg-darkMahron text-white rounded-full shadow-md transform transition-transform hover:scale-105">
          +
        </button>
      </div>
    </div>
  );
};

export default ServicesComponent;
