"use client";

import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import FilterSearch from "@/components/reuseableComponenet/FilterSearch";
import FilterSelect from "@/components/reuseableComponenet/FilterSelect";

const page = () => {
  const selectitems = [
    {
      value: "saveMoney",
      label: "Save Money",
    },
    {
      value: "saveTime",
      label: "Save Time",
    },
    {
      value: "saveBoth",
      label: "Save Both",
    },
  ];

  let dummyData = [
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum dolor sit amet.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur adipiscing elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-5.png",
      title: "Dermal Fillers",
      description: "Pellentesque at vehicula elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-5.png",
      title: "Dermal Fillers",
      description: "Pellentesque at vehicula elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-5.png",
      title: "Dermal Fillers",
      description: "Pellentesque at vehicula elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur adipiscing elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum dolor sit amet.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur adipiscing elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum dolor sit amet.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur adipiscing elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum dolor sit amet.",
      label: "Lorem Ipsum",
    },
  ];

  function spaSubmitHandler(data) {
    console.log("Spa search submitted:", data);
  }

  return (
    <div className=" py-20 md:mt-6 font-raleway relative isolate border-t-2 border-darkMahron">
      <div className="text-center pb-5">
        <h2 className="text-4xl">Treatments</h2>
        <p className="mt-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>

      <div className="my-5">
        <FilterSearch
          onSubmit={spaSubmitHandler}
          schema={FilterSelect}
          placeholder="Search for Treatment"
          buttonText="Book Now!"
          selectItems={selectitems}
        />
      </div>

      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 mb-2">
          {dummyData.map((item, index) => (
            <TreatmentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
